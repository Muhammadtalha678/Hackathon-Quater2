import { ALL_CATEGORIES_QUERY, ALL_PRODUCT_QUERY, FEATURED_PRODUCTS_QUERY, GALLERY_PRODUCTS } from "@/lib/quries";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [featuredProducts, categories, products, galleryProducts] = await Promise.all([
            client.fetch(FEATURED_PRODUCTS_QUERY),
            client.fetch(ALL_CATEGORIES_QUERY),
            client.fetch(ALL_PRODUCT_QUERY),
            client.fetch(GALLERY_PRODUCTS)
        ])
        return NextResponse.json({
            error: true, data: {
                featuredProducts, categories, products, galleryProducts
            }, message: "Categories, Featured fetched successfully"
        })
    } catch (error) {
        const err = error as Error
        return NextResponse.json({
            error: true, data: null, message: err.message
        })
    }

}