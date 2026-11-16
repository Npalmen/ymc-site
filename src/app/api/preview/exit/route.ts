import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  (await draftMode()).disable();
  const response = NextResponse.redirect(new URL("/", request.url));
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
