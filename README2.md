# 🎓 Student Portal

A modern student management platform built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. It supports role-based layouts for **Admin** and **Student** users, a shared public layout, and a clean component structure.

> **Repository:** [https://github.com/mamun-jsx/student-portal](https://github.com/mamun-jsx/student-portal)

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Routes](#-routes)
- [Prerequisites](#-prerequisites)
- [Setup — Step by Step](#-setup--step-by-step)
- [Available Scripts](#-available-scripts)
- [Common Issues & Fixes](#-common-issues--fixes)

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.4 | React framework (App Router) |
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [Lucide React](https://lucide.dev) | 1.14.0 | Icons |
| [pnpm](https://pnpm.io) | Latest | Package manager |

---

## 📁 Project Structure

```
student-portal/
├── src/
│   ├── Components/              # Shared UI components (Nav, Footer)
│   │   ├── Nav.tsx              # Top navbar with 3 dropdown sections
│   │   └── Footer.tsx           # Site footer
│   └── app/
│       ├── layout.tsx           # Root layout (html/body, fonts, metadata)
│       ├── globals.css          # Global styles & CSS variables
│       ├── not-found.tsx        # 404 page
│       │
│       ├── (CommonLayout)/      # Public-facing pages (uses Nav + Footer)
│       │   ├── layout.tsx
│       │   ├── page.tsx         # Home  →  /
│       │   ├── about/           # About →  /about
│       │   ├── contact/         # Contact → /contact
│       │   ├── course/          # Courses → /course
│       │   │   └── [id]/        # Single course → /course/:id
│       │   ├── login/           # Login  → /login
│       │   └── register/        # Register → /register
│       │
│       └── (DashboardLayout)/   # Role-based dashboard (uses Nav + Footer)
│           ├── layout.tsx
│           ├── @admin/          # Admin parallel route slot
│           │   ├── default.tsx
│           │   └── dashboard/
│           │       ├── page.tsx          # /dashboard (admin view)
│           │       ├── add-course/       # /dashboard/add-course
│           │       ├── all-course/       # /dashboard/all-course
│           │       └── all-students/     # /dashboard/all-students
│           └── @student/        # Student parallel route slot
│               ├── default.tsx
│               └── dashboard/
│                   ├── page.tsx          # /dashboard (student view)
│                   ├── my-courses/       # /dashboard/my-courses
│                   └── my-reviews/       # /dashboard/my-reviews
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── pnpm-lock.yaml
```

---

## 🗺 Routes

### Public Routes (CommonLayout)

| URL | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/course` | All Courses |
| `/course/:id` | Single Course Detail |
| `/login` | Login |
| `/register` | Register |

### Dashboard Routes (DashboardLayout)

| URL | View |
|---|---|
| `/dashboard` | Admin or Student Dashboard |
| `/dashboard/add-course` | Admin — Add a new course |
| `/dashboard/all-course` | Admin — View all courses |
| `/dashboard/all-students` | Admin — View all students |
| `/dashboard/my-courses` | Student — Enrolled courses |
| `/dashboard/my-reviews` | Student — My reviews |

---
