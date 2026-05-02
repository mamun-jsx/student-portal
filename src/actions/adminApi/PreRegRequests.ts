export type PreRegRequest = {
  id: string;
  studentName: string;
  studentId: string;
  courseCode: string;
  courseTitle: string;
  status: "Pending" | "Accepted" | "Rejected";
  totalEnrolled: number; // Mock data for "how many students are enrolled"
};

export const adminPreRegRequests: PreRegRequest[] = [
  {
    id: "req1",
    studentName: "Alice Smith",
    studentId: "STU-2023-001",
    courseCode: "CSC201",
    courseTitle: "Data Structures and Algorithms",
    status: "Pending",
    totalEnrolled: 42,
  },
  {
    id: "req2",
    studentName: "Bob Johnson",
    studentId: "STU-2023-045",
    courseCode: "CSC201",
    courseTitle: "Data Structures and Algorithms",
    status: "Pending",
    totalEnrolled: 42,
  },
  {
    id: "req3",
    studentName: "Charlie Brown",
    studentId: "STU-2023-088",
    courseCode: "ARC101",
    courseTitle: "Computer Architecture",
    status: "Pending",
    totalEnrolled: 28,
  },
  {
    id: "req4",
    studentName: "Diana Prince",
    studentId: "STU-2022-102",
    courseCode: "MTH202",
    courseTitle: "Linear Algebra",
    status: "Accepted",
    totalEnrolled: 35,
  },
  {
    id: "req5",
    studentName: "Evan Wright",
    studentId: "STU-2024-005",
    courseCode: "CSC201",
    courseTitle: "Data Structures and Algorithms",
    status: "Pending",
    totalEnrolled: 42,
  },
  {
    id: "req6",
    studentName: "Fiona Gallagher",
    studentId: "STU-2023-019",
    courseCode: "ARC101",
    courseTitle: "Computer Architecture",
    status: "Pending",
    totalEnrolled: 28,
  },
  {
    id: "req7",
    studentName: "George Miller",
    studentId: "STU-2021-055",
    courseCode: "MTH202",
    courseTitle: "Linear Algebra",
    status: "Pending",
    totalEnrolled: 35,
  },
];
