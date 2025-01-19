
export const ALL_PRODUCT_QUERY = `*[_type == "products"]`

export const ALL_CATEGORIES_QUERY = `*[_type == "categories"]`

export const FEATURED_PRODUCTS_QUERY = `*[_type == "products" && "featured" in tags]`


export const GALLERY_PRODUCTS = `*[_type == "products" && "gallery" in tags]`