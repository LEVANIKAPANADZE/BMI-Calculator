import { NextResponse } from "next/server";
import tips from "../../../tips.json";

export async function GET() {
  try {
    if (!tips || tips.length === 0) {
      return NextResponse.json(
        { message: "No tips available" },
        { status: 404 },
      );
    }

    return NextResponse.json(tips);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to load tips" },
      { status: 500 },
    );
  }
}
