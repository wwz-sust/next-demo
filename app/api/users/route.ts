import { NextResponse } from "next/server";

export async function GET(req: Request){
    return NextResponse.json({
        name: "wwz",
        age: 18,
        email: 'wwzsust@163.com'
    })
}