export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  vendor: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  featuredImage: {
    id: string;
    url: string;
    altText: string | null;
    width: number;
    height: number;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface CollectionResponse {
  collection: {
    products: Product[];
  };
}

export async function fetchCoffeeProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://idrinkcoffee.com/collections/coffee.json');
    if (!response.ok) {
      throw new Error('Failed to fetch coffee products');
    }
    const data: CollectionResponse = await response.json();
    return data.collection.products;
  } catch (error) {
    console.error('Error fetching coffee products:', error);
    return [];
  }
}
