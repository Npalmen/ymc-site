import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseView } from "@/components/sections/course-page";
import { loadCourse } from "@/sanity/load";

export async function generateMetadata(): Promise<Metadata> {
  const course = await loadCourse("musikproduktion-for-tjejer");
  return { title: course?.metaTitle, description: course?.metaDescription };
}

export default async function ProductionCoursePage() {
  const course = await loadCourse("musikproduktion-for-tjejer");
  if (!course) notFound();
  return <CourseView course={course} />;
}
