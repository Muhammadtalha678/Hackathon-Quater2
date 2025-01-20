//finds all product
export const ALL_PRODUCT_QUERY = `*[_type == "products"]`
//finds all categories
export const ALL_CATEGORIES_QUERY = `*[_type == "categories"]`
//finds featured products
export const FEATURED_PRODUCTS_QUERY = `*[_type == "products" && "featured" in tags]`
//finds gallery products
export const GALLERY_PRODUCTS = `*[_type == "products" && "gallery" in tags]`
//finds products by caegory id
export const CATEGORY_PRODUCTS = `*[_type == "products" && category._ref == $id]`