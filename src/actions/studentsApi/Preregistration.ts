export type Course = {
  id: string;
  code: string;
  title: string;
  credits: number;
  faculty: string;
  schedule: string;
};

export const preRegData: Record<string, Course[]> = {
  "Summer 2025": [
    {
      id: "sum1",
      code: "MGT111.1",
      title: "Principles of Management",
      credits: 3,
      faculty: "N/A",
      schedule: "-",
    },
    {
      id: "sum2",
      code: "LAW101.1",
      title: "Legal Environment of Business",
      credits: 3,
      faculty: "N/A",
      schedule: "-",
    },
    {
      id: "sum3",
      code: "ENG102.2",
      title: "Intermediate English Skills",
      credits: 3,
      faculty: "N/A",
      schedule: "-",
    },
    {
      id: "sum4",
      code: "ACT101.1",
      title: "Principles of Accounting",
      credits: 3,
      faculty: "N/A",
      schedule: "-",
    },
  ],
  "Fall 2025": [
    {
      id: "fal1",
      code: "CSC301",
      title: "Operating Systems",
      credits: 3,
      faculty: "Dr. Linus Torvalds",
      schedule: "Mon 10:00 AM # Room 301",
    },
    {
      id: "fal2",
      code: "CSC305",
      title: "Database Management Systems",
      credits: 4,
      faculty: "Edgar Codd",
      schedule: "Tue 02:00 PM # Room 405",
    },
    {
      id: "fal3",
      code: "MTH301",
      title: "Discrete Mathematics",
      credits: 3,
      faculty: "Dr. Sarah Smith",
      schedule: "Wed 09:00 AM # Room 202",
    },
    {
      id: "fal4",
      code: "PHY101",
      title: "Physics for Computer Science",
      credits: 3,
      faculty: "Prof. Albert",
      schedule: "Thu 11:00 AM # Lab 1",
    },
  ],
  "Spring 2025": [
    {
      id: "spr1",
      code: "CSC401",
      title: "Artificial Intelligence",
      credits: 3,
      faculty: "Dr. Marvin Minsky",
      schedule: "Mon 08:00 AM # Room 501",
    },
    {
      id: "spr2",
      code: "CSC405",
      title: "Software Engineering",
      credits: 3,
      faculty: "Margaret Hamilton",
      schedule: "Wed 10:00 AM # Room 302",
    },
    {
      id: "spr3",
      code: "BUS201",
      title: "Introduction to Business",
      credits: 3,
      faculty: "John Doe",
      schedule: "Fri 02:00 PM # Room 101",
    },
    {
      id: "spr4",
      code: "MTH401",
      title: "Probability and Statistics",
      credits: 3,
      faculty: "Dr. Sarah Smith",
      schedule: "Tue 09:00 AM # Room 205",
    },
  ],
};
