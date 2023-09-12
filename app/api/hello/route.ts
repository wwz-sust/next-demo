import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    // const name = searchParams.get('name')
    // const id = searchParams.get('id')
    // console.log("searchParams", searchParams.entries());
    console.log(typeof searchParams.entries());
    // Object.entries() 获取{} key和value， Object.key() Object.value()只是获取key或者value
    const obj = Object.fromEntries(searchParams.entries())
    return NextResponse.json(obj)
}