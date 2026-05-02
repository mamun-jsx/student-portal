export type ReviewCourse = {
  id: string;
  courseCode: string;
  courseTitle: string;
  teacher: string;
  status: "Pending" | "Submitted";
  rating?: number;
};

export const myReviewCourses: ReviewCourse[] = [
  {
    id: "rev1",
    courseCode: "CSC301",
    courseTitle: "Operating Systems",
    teacher: "Dr. Linus Torvalds",
    status: "Pending",
  },
  {
    id: "rev2",
    courseCode: "CSC305",
    courseTitle: "Database Management Systems",
    teacher: "Edgar Codd",
    status: "Submitted",
    rating: 4,
  },
  {
    id: "rev3",
    courseCode: "MTH301",
    courseTitle: "Discrete Mathematics",
    teacher: "Dr. Sarah Smith",
    status: "Pending",
  },
  {
    id: "rev4",
    courseCode: "PHY101",
    courseTitle: "Physics for Computer Science",
    teacher: "Prof. Albert",
    status: "Pending",
  },
  {
    id: "rev5",
    courseCode: "GEN201",
    courseTitle: "Ethics in Technology",
    teacher: "Alice Johnson",
    status: "Submitted",
    rating: 5,
  },
  {
    id: "rev6",
    courseCode: "ENG105",
    courseTitle: "Technical Writing",
    teacher: "Prof. Emily White",
    status: "Pending",
  },
];
