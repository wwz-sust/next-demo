import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){
    const method = req.method
    const header = req.headers
    // const r = req.
    console.log(method);
    console.log(header);
    console.log(req.url);
    // return NextResponse.redirect(new URL('/login', req.url))
    return NextResponse.next();
}

export const config = {
    // 匹配项
    matcher: ['/about/:path*']
}