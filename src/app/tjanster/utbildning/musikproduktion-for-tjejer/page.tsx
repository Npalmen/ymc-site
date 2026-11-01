import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseView } from "@/components/sections/course-page";
import { pageMetadata } from "@/lib/seo";
import { loadCourse } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const course = await loadCourse("musikproduktion-for-tjejer");
  return pageMetadata({
    title: course?.metaTitle ?? "Musikproduktion för tjejer i Uppsala",
    description: course?.metaDescription ?? "",
    path: "/tjanster/utbildning/musikproduktion-for-tjejer",
  });
}

export default async function ProductionCoursePage() {
  const course = await loadCourse("musikproduktion-for-tjejer");
  if (!course) notFound();
  return <CourseView course={course} path="/tjanster/utbildning/musikproduktion-for-tjejer" />;
}
