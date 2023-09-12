import { NextRequest, NextResponse } from "next/server";

type Params = {
    team: string
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
    console.log(params.team);

    return NextResponse.json({ id: params.team })
}