import { apiClient } from './api-client';
import { CustomerDetails, UpdateCustomerRequest, CustomerAddress } from '@/lib/api-types';

const CACHE_KEY = 'customer_details_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 60 minutes

export const customerService = {
    async getCustomerDetails(forceRefresh = false) {
        let customerId = '';
        if (typeof window !== 'undefined') {
            customerId = localStorage.getItem('customerId') || '';
        }

        if (!customerId) return null;

        // Localhost bypass check
        if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
            console.log("Dev Mode: Returning mock customer details & address");
            const cachedDetails = localStorage.getItem('mock_customer_details');
            if (cachedDetails) {
                try {
                    return JSON.parse(cachedDetails);
                } catch (e) {}
            }
            const mockData = {
                customerId: "mock-customer-id",
                customerName: "Tejesh Neelam",
                customerMobileNumber: "9988776655",
                customerEmailId: "tejesh@example.com",
                customerAddress: [
                    {
                        customerAddressId: 1,
                        addressName: "Home",
                        customerDrNum: "Flat 402",
                        customerRoad: "Premium Residency, Jubilee Hills",
                        customerCity: "Hyderabad",
                        customerState: "Telangana",
                        customerPin: "500033",
                        customerCountry: "India"
                    },
                    {
                        customerAddressId: 2,
                        addressName: "Office",
                        customerDrNum: "Level 8",
                        customerRoad: "Tech Hub, Indiranagar",
                        customerCity: "Bengaluru",
                        customerState: "Karnataka",
                        customerPin: "560038",
                        customerCountry: "India"
                    }
                ]
            };
            localStorage.setItem('mock_customer_details', JSON.stringify(mockData));
            return mockData;
        }

        if (!forceRefresh) {
            try {
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const { timestamp, data, id } = JSON.parse(cached);
                    const isValid = (Date.now() - timestamp < CACHE_DURATION) && (id === customerId);
                    if (isValid) {
                        console.log('[CACHE HIT] Serving customer details from cache');
                        return data;
                    }
                }
            } catch (e) {
                console.warn('Failed to parse customer cache', e);
            }
        }

        console.log('[CACHE MISS] Fetching fresh customer details');
        const data = await apiClient<CustomerDetails>('/customer/get-customer-and-address', {
            params: { customerId }
        });

        if (typeof window !== 'undefined' && data) {
            localStorage.setItem(CACHE_KEY, JSON.stringify({
                timestamp: Date.now(),
                data,
                id: customerId
            }));
        }
        return data;
    },

    async updateCustomer(data: UpdateCustomerRequest) {
        const response = await apiClient<CustomerDetails>('/customer/update', {
            method: 'PUT',
            body: JSON.stringify(data),
        });

        if (response && typeof window !== 'undefined') {
            const customerId = localStorage.getItem('customerId') || '';

            // PRESERVE ADDRESSES: If response is missing addresses, try to salvage from cache
            let finalData = response;
            try {
                const cachedRaw = localStorage.getItem(CACHE_KEY);
                if (cachedRaw) {
                    const cached = JSON.parse(cachedRaw);
                    // If we have cached addresses but response dropped them (len=0 or null)
                    if (cached.data?.customerAddress?.length > 0) {
                        if (!response.customerAddress || response.customerAddress.length === 0) {
                            console.log('[updateCustomer] Restoring addresses from cache to prevent UI disappearance');
                            finalData = { ...response, customerAddress: cached.data.customerAddress };
                        }
                    }
                }
            } catch (e) {
                console.warn('Failed to merge address cache during update', e);
            }

            localStorage.setItem(CACHE_KEY, JSON.stringify({
                timestamp: Date.now(),
                data: finalData,
                id: customerId
            }));

            return finalData;
        }

        return response;
    },

    async createAddress(data: Partial<CustomerAddress>) {
        if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
            console.log("Dev Mode: Simulating create address locally");
            const cachedDetails = localStorage.getItem('mock_customer_details');
            let mockData = {
                customerId: "mock-customer-id",
                customerName: "Tejesh Neelam",
                customerMobileNumber: "9988776655",
                customerEmailId: "tejesh@example.com",
                customerAddress: [] as CustomerAddress[]
            };
            if (cachedDetails) {
                try {
                    mockData = JSON.parse(cachedDetails);
                } catch (e) {}
            }
            const newAddr = {
                customerAddressId: Date.now(),
                addressName: data.addressName || 'Home',
                customerDrNum: data.customerDrNum || '',
                customerRoad: data.customerRoad || '',
                customerCity: data.customerCity || '',
                customerState: data.customerState || '',
                customerPin: data.customerPin || '',
                customerCountry: data.customerCountry || 'India'
            } as CustomerAddress;
            mockData.customerAddress = [...(mockData.customerAddress || []), newAddr];
            localStorage.setItem('mock_customer_details', JSON.stringify(mockData));
            return newAddr;
        }
        return apiClient<CustomerAddress>('/customer/address/create', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    async updateAddress(data: CustomerAddress) {
        return apiClient<CustomerAddress>('/customer/address/update', {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }
};
