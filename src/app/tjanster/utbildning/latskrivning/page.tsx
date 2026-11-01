import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseView } from "@/components/sections/course-page";
import { pageMetadata } from "@/lib/seo";
import { loadCourse } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const course = await loadCourse("latskrivning");
  return pageMetadata({
    title: course?.metaTitle ?? "Låtskrivning i Uppsala",
    description: course?.metaDescription ?? "",
    path: "/tjanster/utbildning/latskrivning",
  });
}

export default async function SongwritingPage() {
  const course = await loadCourse("latskrivning");
  if (!course) notFound();
  return <CourseView course={course} path="/tjanster/utbildning/latskrivning" />;
}
