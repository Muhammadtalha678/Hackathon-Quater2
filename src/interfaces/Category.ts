export interface Category {
    _id: string; // Unique identifier for the category
    _type: string; // Type of the document (e.g., 'categories')
    _createdAt: string; // Date when the category was created (ISO format)
    _updatedAt: string; // Date when the category was last updated (ISO format)
    _rev: string; // Revision ID (optional, may change with each update)
    title: string; // Title of the category
    image: {
        _type: string; // Type of the image object (should be 'image' for this structure)
        asset: {
            _ref: string; // Reference to the image asset (can be used to fetch image URL)
        };
    }; // Image information
}
