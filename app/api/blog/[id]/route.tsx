import { NextRequest, NextResponse } from "next/server"
import blogData from "../../../../blog-data.json"

const GET = (req: NextRequest ) => {

    const id =req.nextUrl.pathname.split('/').pop()

    const blogArticle = blogData.find(blog => blog.id === id)

    if (!blogArticle) {
        return NextResponse.json({}, { status: 404 })
    }

    return NextResponse.json(blogArticle, { status: 200 })
}

export { GET }