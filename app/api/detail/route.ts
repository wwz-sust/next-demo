import { NextRequest, NextResponse } from "next/server";

export async function GET(req:Request) {
    const params = new URL(req.url);
    console.log("params", params);
    
    const names = params.searchParams.get("name");
    console.log(names);
    

    return NextResponse.json({ msg: 'ok', name: names });
}