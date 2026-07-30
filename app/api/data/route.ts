import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { default: tips } = await import("../../../tips.json");

    if (!tips || tips.length === 0) {
      return NextResponse.json(
        { message: "No tips available" },
        { status: 404 },
      );
    }

    return NextResponse.json(tips);
  } catch {
    return NextResponse.json(
      { message: "Failed to load tips" },
      { status: 500 },
    );
  }
}
