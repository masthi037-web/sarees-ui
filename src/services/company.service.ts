import { cache } from 'react';
import { apiClient } from './api-client';
import { CompanyDetails } from '@/lib/api-types';

export const fetchCompanyDetails = cache(async (companyDomain: string): Promise<CompanyDetails | null> => {
    try {
        const isLocalhost = (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) ||
                            (process.env.NODE_ENV === 'development' || !companyDomain || companyDomain.includes('localhost') || companyDomain.includes('127.0.0.1'));

        if (isLocalhost) {
            console.log("Dev Mode: Returning mock company details for domain:", companyDomain);
            return {
                companyId: "mock-company-id",
                companyName: "Tirumala Sarees",
                companyDomain: companyDomain || "localhost",
                companyPhone: "9988776655",
                companyMessage: "Welcome to Tirumala Sarees",
                companyEmail: "support@tirumalasarees.com",
                gstNumber: "GST123456789",
                logo: "",
                banner: "",
                companyCoupon: "WELCOME10&&&10,FESTIVE20&&&20",
                ownerName: "Owner Name",
                ownerEmail: "owner@tirumalasarees.com",
                companyStatus: "ACTIVE",
                ownerPhone: "9988776655",
                companyAddress: "123 Saree Lane",
                companyCity: "Hyderabad",
                companyState: "Telangana",
                companyPinCode: "500033",
                companyFssAi: "",
                companyProductCategory: "Sarees",
                deliveryBetween: "3-5 Days",
                companyEstDate: "2020-01-01",
                averageRating: 4.8,
                totalRating: 5,
                noOfRatings: 100,
                minimumOrderCost: "0",
                freeDeliveryCost: "5000",
                deliveryCost: "100",
                socialMediaLink: null,
                about: "Premium silk sarees from Kanchipuram and Banaras.",
                razorpayKeyId: "rzp_test_mock",
                razorpayKeySecret: "mock_secret",
                razorpay: true,
                smePay: false,
                cashFree: false,
                companyRegisteredAt: "2020-01-01",
                updatedAt: "2020-01-01"
            } as CompanyDetails;
        }

        const data = await apiClient<CompanyDetails>('/company/public/get', {
            params: { companyDomain },
            next: { revalidate: 300, tags: ['company'] } // 5 minutes cache
        });

        if (!data) {
            console.warn(`Company details API returned null for domain: ${companyDomain}`);
            return null;
        }

        console.log("Company Delivery Between:", data.deliveryBetween);
        console.log(data.companyCoupon + " coupon");
        return data;
    } catch (error) {
        console.error('Error fetching company details:', error);
        return null;
    }
});
