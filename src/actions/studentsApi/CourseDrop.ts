export type DroppableCourse = {
  id: string;
  code: string;
  title: string;
  teacher: string;
  grade: string;
  status: "Eligible" | "Dropped" | "Pending Approval";
};

export const dropCourseData: Record<string, DroppableCourse[]> = {
  "Summer 2025": [
    {
      id: "drop1",
      code: "MTH101",
      title: "Calculus I",
      teacher: "Dr. Alan Turing",
      grade: "F",
      status: "Eligible",
    },
    {
      id: "drop2",
      code: "PHY101",
      title: "Introduction to Physics",
      teacher: "Prof. Albert",
      grade: "D",
      status: "Eligible",
    },
  ],
  "Fall 2024": [
    {
      id: "drop3",
      code: "CSC201",
      title: "Data Structures",
      teacher: "Dr. Linus Torvalds",
      grade: "F",
      status: "Pending Approval",
    },
  ],
  "Spring 2024": [],
};
