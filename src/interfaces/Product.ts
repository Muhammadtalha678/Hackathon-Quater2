export interface Product {
    _id: string; // Unique ID of the product
    _type: string; // Type of the document, usually "products"
    _createdAt: string; // ISO timestamp for when the product was created
    _updatedAt: string; // ISO timestamp for when the product was last updated
    _rev?: string; // Revision ID
    title: string; // Title of the product
    description: string; // Description of the product
    price: number; // Price of the product
    priceWithoutDiscount?: number | null; // Price without discount, nullable
    badge?: string | null; // Badge label, such as "Sales"
    inventory: number; // Inventory count
    tags: string[]; // Tags array, e.g., ["featured", "instagram"]
    category: {
        _type: string; // Type of the reference, usually "reference"
        _ref: string; // ID of the referenced category
    }; // Category information
    image: {
        _type: string; // Type of the image object
        asset: {
            _ref: string; // Reference to the image asset
        };
    }; // Image information
}
