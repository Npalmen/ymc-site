"use client";

import { useId, useState } from "react";
import { planningMeeting, planningTopics, type PlanningTopic } from "@/content/pages/shared";
import { site } from "@/content/site";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { Pill } from "@/components/ui/pill";
import { RichLine } from "@/components/ui/rich-line";

function topicLabel(value: string) {
  return planningTopics.find((topic) => topic.value === value)?.label ?? value;
}

export function PlanningMeeting({ defaultTopic = "planering" }: { defaultTopic?: PlanningTopic }) {
  const baseId = useId();
  const [topic, setTopic] = useState<string>(defaultTopic);
  const [status, setStatus] = useState("");

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
    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(`Yellow Music — ${chosen}`)}&body=${encodeURIComponent(body)}`;
    setStatus("Öppnar ditt e-postprogram. Inget sparas på webbplatsen.");
    window.location.href = href;
  }

  return (
    <section id="planering" className="bg-canvas px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[var(--container-default)] overflow-hidden rounded-[var(--radius-card)] bg-studio text-ink-inverse lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <Pill tone="dark">{planningMeeting.eyebrow}</Pill>
          <h2 className="text-section mt-5">
            <RichLine parts={planningMeeting.title} tone="brand" />
          </h2>
          <p className="mt-4 max-w-md text-body text-ink-inverse/75">{planningMeeting.lede}</p>
          <ul className="mt-6 space-y-3">
            {planningMeeting.points.map((point) => (
              <li key={point} className="flex gap-3 text-body-sm text-ink-inverse/85">
                <span className="mt-0.5 text-brand" aria-hidden>
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#f3ecdf] px-5 py-8 text-ink sm:px-8 sm:py-10">
          <h3 className="font-display text-3xl italic text-accent">Ansök om ett möte</h3>
          <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit} noValidate={false}>
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
              <Input
                id={`${baseId}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="07…"
              />
            </Field>
            <Field id={`${baseId}-topic`} label="Vad gäller det? *" appearance="plain">
              <Select
                id={`${baseId}-topic`}
                name="topic"
                required
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              >
                {planningTopics.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </Select>
            </Field>
            <Field id={`${baseId}-message`} label="Meddelande" appearance="plain">
              <Textarea
                id={`${baseId}-message`}
                name="message"
                placeholder="Berätta kort var du är och vad du hoppas på."
              />
            </Field>
            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-pill)] bg-brand px-6 font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
            >
              Skicka förfrågan
            </button>
            <p className="text-body-sm text-ink-muted">{planningMeeting.note}</p>
            {status ? (
              <p className="text-body-sm text-ink" role="status">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
