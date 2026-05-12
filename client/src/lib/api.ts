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

function isListable(p: Product): boolean {
  const price = parseFloat(p.priceRange?.minVariantPrice?.amount ?? "0");
  if (!isFinite(price) || price <= 0) return false;

  const title = p.title.toLowerCase();
  if (title.includes("subscription")) return false;

  const tagsLower = p.tags.map((t) => t.toLowerCase());
  if (tagsLower.some((t) => t === "subscription" || t.startsWith("subscription-"))) {
    return false;
  }

  return true;
}

export async function fetchCoffeeProducts(): Promise<Product[]> {
  try {
    // Fetch from statically generated JSON file
    const response = await fetch('/data/coffee.json');
    if (!response.ok) {
      throw new Error('Failed to fetch coffee products');
    }
    const data: CollectionResponse = await response.json();
    return data.collection.products.filter(isListable);
  } catch (error) {
    console.error('Error fetching coffee products:', error);
    return [];
  }
}
