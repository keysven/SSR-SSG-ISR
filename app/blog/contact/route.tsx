import { NextRequest, NextResponse } from "next/server"

const POST = async (req: NextRequest) => {
    const { content } = await req.json()

    //dbに送信する処理をここに書く
    console.log(content)

    return NextResponse.json({},{ status: 200 })
}

export { POST }