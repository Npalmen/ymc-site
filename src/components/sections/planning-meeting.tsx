"use client";

import { useId, useState } from "react";
import type { RichLine as RichParts } from "@/content/rich-text";
import { planningMeeting, planningTopics, type PlanningTopic } from "@/content/pages/shared";
import { site } from "@/content/site";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { Pill } from "@/components/ui/pill";
import { RichLine } from "@/components/ui/rich-line";

export function PlanningMeeting({
  defaultTopic = "planering",
  copy = planningMeeting,
  topics = planningTopics,
  recipient = site.contact.email,
  variant = "page",
}: {
  defaultTopic?: PlanningTopic | string;
  copy?: {
    eyebrow: string;
    title: RichParts;
    lede: string;
    points: readonly string[];
    note: string;
  };
  topics?: readonly { value: string; label: string }[];
  recipient?: string;
  variant?: "page" | "sheet";
}) {
  const baseId = useId();
  const [topic, setTopic] = useState<string>(defaultTopic);
  const [status, setStatus] = useState("");

  function topicLabel(value: string) {
    return topics.find((topic) => topic.value === value)?.label ?? value;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const chosen = topicLabel(String(data.get("topic") ?? topic));
    const body = [
      `Namn: ${name}`,
      `E-post: ${email}`,
      `Telefon: ${phone || "–"}`,
      `Ämne: ${chosen}`,
      "",
      message || "–",
    ].join("\n");
    const href = `mailto:${recipient}?subject=${encodeURIComponent(`Yellow Music — ${chosen}`)}&body=${encodeURIComponent(body)}`;
    setStatus("Öppnar ditt e-postprogram. Inget sparas på webbplatsen.");
    window.location.href = href;
  }

  const form = (
    <>
      {variant === "sheet" ? null : (
        <h3 className="font-display text-3xl italic text-accent">Ansök om ett möte</h3>
      )}
      <form className={variant === "sheet" ? "sheet-fields mt-4" : "mt-6 flex flex-col gap-4"} onSubmit={onSubmit}>
        <Field id={`${baseId}-name`} label="Namn *" appearance="plain">
          <Input id={`${baseId}-name`} name="name" autoComplete="name" required placeholder="Ditt namn" />
        </Field>
        <Field id={`${baseId}-email`} label="E-post *" appearance="plain">
          <Input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="namn@example.com"
          />
        </Field>
        <Field id={`${baseId}-phone`} label="Telefon" appearance="plain">
          <Input id={`${baseId}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="07…" />
        </Field>
        <Field id={`${baseId}-topic`} label="Vad gäller det? *" appearance="plain">
          <Select
            id={`${baseId}-topic`}
            name="topic"
            required
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          >
            {topics.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field id={`${baseId}-message`} label="Meddelande" appearance="plain" className="sheet-span">
          <Textarea
            id={`${baseId}-message`}
            name="message"
            placeholder="Berätta kort var du är och vad du hoppas på."
          />
        </Field>
        <button
          type="submit"
          className="sheet-submit inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-pill)] bg-brand px-6 font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
        >
          Skicka förfrågan
        </button>
        <p className="sheet-note text-body-sm text-ink-muted">{copy.note}</p>
        {status ? (
          <p className="sheet-span text-body-sm text-ink" role="status">
            {status}
          </p>
        ) : null}
      </form>
    </>
  );

  if (variant === "sheet") return form;

  return (
    <section id="planering" className="bg-canvas px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[var(--container-default)] overflow-hidden rounded-[var(--radius-card)] bg-studio text-ink-inverse lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <Pill tone="dark">{copy.eyebrow}</Pill>
          <h2 className="text-section mt-5">
            <RichLine parts={copy.title} tone="brand" />
          </h2>
          <p className="mt-4 max-w-md text-body text-ink-inverse/75">{copy.lede}</p>
          <ul className="mt-6 space-y-3">
            {copy.points.map((point) => (
              <li key={point} className="flex gap-3 text-body-sm text-ink-inverse/85">
                <span className="mt-0.5 text-brand" aria-hidden>
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#f3ecdf] px-5 py-8 text-ink sm:px-8 sm:py-10">{form}</div>
      </div>
    </section>
  );
}
