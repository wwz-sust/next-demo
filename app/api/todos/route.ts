import { NextResponse } from "next/server";

export async function GET(){
    console.log(process.env.DATA_API_KEY);
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos:Todo[] = await res.json();
    return NextResponse.json({msg: 'todos', ...todos})
}