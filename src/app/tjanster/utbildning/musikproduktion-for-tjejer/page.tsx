import type { Metadata } from "next";
import { CourseView } from "@/components/sections/course-page";
import { productionCourse } from "@/content/pages/education";

export const metadata: Metadata = {
  title: productionCourse.metaTitle,
  description: productionCourse.metaDescription,
};

export default function ProductionCoursePage() {
  return <CourseView course={productionCourse} />;
}
