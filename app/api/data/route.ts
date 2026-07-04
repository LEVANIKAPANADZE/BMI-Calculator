import { NextResponse } from "next/server";
import tips from "../../../tips.json";

export async function GET() {
  return NextResponse.json(tips);
}
