import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseView } from "@/components/sections/course-page";
import { pageMetadata } from "@/lib/seo";
import { loadCourse, loadExtraCourseSlugs } from "@/sanity/load";

type Params = { slug: string };

export async function generateStaticParams() {
  const slugs = await loadExtraCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const course = await loadCourse(slug);
  return pageMetadata({
    title: course?.metaTitle ?? "Kurs",
    description: course?.metaDescription ?? "",
    path: `/tjanster/utbildning/${slug}`,
  });
}

export default async function ExtraCoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = await loadCourse(slug);
  if (!course) notFound();
  return <CourseView course={course} path={`/tjanster/utbildning/${slug}`} />;
}
