import type { Metadata } from "next";
import { CourseView } from "@/components/sections/course-page";
import { songwritingCourse } from "@/content/pages/education";

export const metadata: Metadata = {
  title: songwritingCourse.metaTitle,
  description: songwritingCourse.metaDescription,
};

export default function SongwritingPage() {
  return <CourseView course={songwritingCourse} />;
}
