import { NextResponse } from "next/server";

type Feecback = {
    name?:string
    email?: string
    message?: string
}

export async function POST(req: Request){
    
    const formData:FormData = await req.formData();
    let body = Object.fromEntries(formData);
    console.log(body);
    
    return NextResponse.json({code: 200, ...body});
}