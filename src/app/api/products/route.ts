import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await client.fetch(`*[_type == "products"]`)
        //if no response come
        if (!response) {
            throw new Error("Error Fetching Products");
        }
        return NextResponse.json({
            error: false, data: response, message: "Product Fetch Successfully"
        })
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({
            error: true, data: null, message: err.message
        })
    }
}