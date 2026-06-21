import { Category } from '@/lib/types';

export const MOCK_TENANT_CATEGORIES: Category[] = [
  {
    id: 'sarees',
    name: 'SAREES',
    categoryImage: '/offer_banner_1.png',
    catalogs: [
      {
        id: 'kanchipuram-silk',
        name: 'Kanchipuram Silks',
        catalogueImage: '/offer_banner_1.png',
        products: [
          {
            id: 's1',
            name: 'Kanchipuram Crimson Zari Silk Saree',
            price: 9500,
            priceAfterDiscount: 6650,
            imageId: 'product-s1',
            productImage: '/offer_banner_1.png',
            description: 'A magnificent crimson red Kanchipuram silk saree featuring ornate gold zari brocade, perfect for weddings and bridal wear.',
            rating: 4.9,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '30% OFF',
            pricing: [],
          },
          {
            id: 's2',
            name: 'Classic Royal Blue Silk Saree',
            price: 8800,
            priceAfterDiscount: 6160,
            imageId: 'product-s2',
            productImage: '/offer_banner_2.png',
            description: 'Timeless royal blue silk saree with exquisite gold checks and zari borders. Handcrafted by master weavers.',
            rating: 4.8,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '30% OFF',
            pricing: [],
          }
        ]
      },
      {
        id: 'banarasi-silk',
        name: 'Banarasi Silks',
        catalogueImage: '/offer_banner_3.png',
        products: [
          {
            id: 's3',
            name: 'Emerald Floral Banarasi Silk Saree',
            price: 12000,
            priceAfterDiscount: 8400,
            imageId: 'product-s3',
            productImage: '/offer_banner_3.png',
            description: 'Exquisite Banarasi silk saree with floral jal motifs and an elegant gold brocade pallu.',
            rating: 4.9,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: false,
            productOffer: '30% OFF',
            pricing: [],
          },
          {
            id: 's4',
            name: 'Blush Pink Organza Banarasi Saree',
            price: 6500,
            priceAfterDiscount: 4875,
            imageId: 'product-s4',
            productImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
            description: 'Lightweight and translucent blush pink organza saree featuring beautiful Banarasi border details.',
            rating: 4.7,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '25% OFF',
            pricing: [],
          }
        ]
      },
      {
        id: 'georgette-sarees',
        name: 'Designer Georgette',
        catalogueImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
        products: [
          {
            id: 's5',
            name: 'Midnight Black Sequined Georgette Saree',
            price: 5200,
            priceAfterDiscount: 4160,
            imageId: 'product-s5',
            productImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
            description: 'Sophisticated black georgette saree embellished with micro-sequins for a glamourous party wear look.',
            rating: 4.6,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: false,
            productOffer: '20% OFF',
            pricing: [],
          },
          {
            id: 's6',
            name: 'Peach Embroidered Georgette Saree',
            price: 4900,
            priceAfterDiscount: 3675,
            imageId: 'product-s6',
            productImage: 'https://images.unsplash.com/photo-1610030470298-40b355e71789?q=80&w=600&auto=format&fit=crop',
            description: 'Flowy peach georgette saree featuring intricate thread work embroidery and scalloped borders.',
            rating: 4.7,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '25% OFF',
            pricing: [],
          }
        ]
      },
      {
        id: 'dailywear-cotton',
        name: 'Premium Cotton & Linen',
        catalogueImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=600&auto=format&fit=crop',
        products: [
          {
            id: 's7',
            name: 'Mustard Yellow Handloom Linen Saree',
            price: 3200,
            priceAfterDiscount: 2560,
            imageId: 'product-s7',
            productImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=600&auto=format&fit=crop',
            description: 'Breathable mustard yellow linen saree with silver zari border and tassels, ideal for summer office wear.',
            rating: 4.8,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: false,
            productOffer: '20% OFF',
            pricing: [],
          },
          {
            id: 's8',
            name: 'Indigo Shibori Handloom Cotton Saree',
            price: 2800,
            priceAfterDiscount: 1960,
            imageId: 'product-s8',
            productImage: 'https://images.unsplash.com/photo-1583391265517-35bbdad01209?q=80&w=600&auto=format&fit=crop',
            description: 'Indigo shibori handloom cotton saree with indigo blue base and unique tie dye patterns.',
            rating: 4.8,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '30% OFF',
            pricing: [],
          }
        ]
      }
    ]
  },
  {
    id: 'dresses',
    name: 'DRESSES',
    categoryImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    catalogs: [
      {
        id: 'anarkali-suits',
        name: 'Anarkali Suits',
        catalogueImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
        products: [
          {
            id: 'd1',
            name: 'Royal Wine Silk Anarkali Suit',
            price: 5500,
            priceAfterDiscount: 4400,
            imageId: 'product-d1',
            productImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
            description: 'Heavy silk Anarkali suit with gold embroidery and a flowy georgette dupatta.',
            rating: 4.8,
            deliveryTime: '3-5 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '20% OFF',
            pricing: [],
          },
          {
            id: 'd2',
            name: 'Sage Green Embroidered Anarkali',
            price: 4800,
            priceAfterDiscount: 3840,
            imageId: 'product-d2',
            productImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
            description: 'Pastel sage green Anarkali suit featuring detailed threadwork border embroidery.',
            rating: 4.7,
            deliveryTime: '3-5 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: false,
            productOffer: '20% OFF',
            pricing: [],
          }
        ]
      },
      {
        id: 'salwar-kameez',
        name: 'Salwar Kameez',
        catalogueImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
        products: [
          {
            id: 'd3',
            name: 'Classic Red Georgette Punjabi Suit',
            price: 3500,
            priceAfterDiscount: 2800,
            imageId: 'product-d3',
            productImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
            description: 'Stunning traditional Punjabi salwar suit with heavy mirror and border embroidery.',
            rating: 4.9,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '20% OFF',
            pricing: [],
          }
        ]
      }
    ]
  },
  {
    id: 'western',
    name: 'WESTERN',
    categoryImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
    catalogs: [
      {
        id: 'tops-tunics',
        name: 'Tops & Tunics',
        catalogueImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
        products: [
          {
            id: 'w1',
            name: 'Floral Georgette Tunic Top',
            price: 1800,
            priceAfterDiscount: 1440,
            imageId: 'product-w1',
            productImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
            description: 'Elegant georgette tunic featuring floral design patterns and balloon sleeves.',
            rating: 4.6,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '20% OFF',
            pricing: [],
          }
        ]
      },
      {
        id: 'jeans-trousers',
        name: 'Jeans & Trousers',
        catalogueImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop',
        products: [
          {
            id: 'w2',
            name: 'High-Waist Wide-Leg Denim',
            price: 2400,
            priceAfterDiscount: 1920,
            imageId: 'product-w2',
            productImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop',
            description: 'Premium comfortable stretch denim jeans in deep blue wash.',
            rating: 4.8,
            deliveryTime: '2-4 days',
            deliveryCost: 0,
            createdAt: new Date().toISOString(),
            variants: [],
            famous: true,
            productOffer: '20% OFF',
            pricing: [],
          }
        ]
      }
    ]
  }
];
