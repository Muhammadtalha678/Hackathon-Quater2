import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    try {
        const url = new URL(req.url)
        console.log(url);
        const id = url.pathname.split("/").pop();
        console.log("id", id);

        if (!id) {
            return NextResponse.json({
                error: true, data: null, message: "Product id is Missing"
            })
        }
        const response = await client.fetch(`*[_type == "products" && _id == $id][0]`, { id }) //[0] return single document not array
        if (response) {
            return NextResponse.json({ error: false, data: response, message: "Product fetch successfully" })

        }
        else {
            return NextResponse.json({ error: true, data: null, message: "Product not found" })

        }
    } catch (error) {
        const err = error as Error
        return NextResponse.json({ error: true, data: null, message: 'Internal Server Error' + err.message })
    }
}