import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await client.fetch(`*[_type == "productd"]`)
        if (!response.ok) {
            throw new Error("Error Fetching Products");
        }
        return NextResponse.json({
            error: true, data: response, message: "Product Fetch Successfully"
        })
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({
            error: true, data: null, message: err.message
        })
    }
}