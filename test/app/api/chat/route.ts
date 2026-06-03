import { NextRequest, NextResponse } from "next/server";
import { generateResponse } from "../../../lib/ai";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const result = await generateResponse(prompt);

  return NextResponse.json({
    response: result,
  });
}
