import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
};

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET saknas" }, { status: 501 });
  }

  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(request, secret, true);
    if (!isValidSignature) {
      return NextResponse.json({ message: "Ogiltig signatur" }, { status: 401 });
    }
    if (!body?._type) {
      return NextResponse.json({ message: "Saknar _type" }, { status: 400 });
    }

    revalidateTag("content", "max");
    revalidateTag(body._type, "max");
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, type: body._type });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Okänt fel";
    return NextResponse.json({ message }, { status: 500 });
  }
}
