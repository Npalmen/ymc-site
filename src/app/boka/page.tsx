import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Boka",
  description: "Bokning — kommer snart.",
};

export default function BokaPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Boka</h1>
      <p className="mt-4 max-w-md text-lg text-neutral-600">
        Bokningsflöde är inte implementerat ännu. Planering finns i{" "}
        <code className="text-sm">docs/plans/areas/04-booking.md</code>.
      </p>
      <p className="mt-8 text-sm text-neutral-500">
        Tills vidare:{" "}
        <a
          href={`mailto:${site.contact.email}?subject=Planeringsm%C3%B6te`}
          className="underline underline-offset-4"
        >
          {site.contact.email}
        </a>
      </p>
      <Link href="/" className="mt-12 text-sm underline underline-offset-4">
        Tillbaka till startsidan
      </Link>
    </main>
  );
}
