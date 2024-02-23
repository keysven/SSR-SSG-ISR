import { NextResponse } from "next/server";
import blogData from "../../../blog-data.json"

const GET = () => {
    return NextResponse.json(blogData)
}

export {GET}