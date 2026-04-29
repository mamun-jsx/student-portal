> **Repository:** [https://github.com/mamun-jsx/student-portal](https://github.com/mamun-jsx/student-portal)

## ✅ Prerequisites

Before cloning and running the project, you need to have the following installed on your computer:

1. **Node.js** (v18 or later)
2. **Git**
3. **pnpm** (package manager — we use this instead of npm or yarn)

---

## 🚀 Setup — Step by Step

Follow these steps **in order**. Each step must complete before the next one.

---

### Step 1 — Install Node.js

If you don't have Node.js yet, download and install it from the official website:

👉 [https://nodejs.org](https://nodejs.org) — download the **LTS** version.

After installing, verify it works. Open your terminal and run:

```bash
node --version
```

You should see something like `v20.x.x`. If you do, Node.js is installed ✅

---

### Step 2 — Install pnpm Globally

This project uses **pnpm** as its package manager. You only need to do this **once** on your machine.

Open your terminal and run:

```bash
npm install -g pnpm
```

After it installs, verify it works:

```bash
pnpm --version
```

You should see a version number like `9.x.x` ✅

> **What is pnpm?** It's a faster and more efficient alternative to npm. Think of it as the same thing — just faster and it saves disk space.

---


### Step 3 — Clone the Repository

Navigate to the folder where you want to keep the project (for example, your Desktop or a `projects` folder), then run:

```bash
git clone https://github.com/mamun-jsx/student-portal.git
```

This will create a new folder called `student-portal` with all the project files.

---

### Step 5 — Go Into the Project Folder

```bash
cd student-portal
```

You are now inside the project directory. All the following commands must be run from here.

---

### Step 6 — Install Dependencies

This downloads all the libraries the project needs (Next.js, React, Tailwind, etc.):

```bash
pnpm install
```

This might take a minute. When it's done, you'll see a `node_modules` folder appear in the project.

---

### Step 7 — Start the Development Server

```bash
pnpm dev
```

Once it starts, open your browser and go to:

👉 [http://localhost:3000](http://localhost:3000)


---

### Step 8 — You're Ready to Contribute! 🎉

The project is now running locally on your machine. You can open the project folder in your code editor (we recommend [VS Code](https://code.visualstudio.com)) and start making changes.

To open in VS Code directly from the terminal:

```bash
code .
```

---

## 📜 Available Scripts

Run these commands from inside the `student-portal` folder:

| Command | What it does |
|---|---|
| `pnpm dev` | Start the local development server at `http://localhost:3000` |
| `pnpm build` | Build the production-ready version of the app |
| `pnpm start` | Start the production server (run `pnpm build` first) |
| `pnpm lint` | Check for code style errors |

---

## ⚠️ Common Issues & Fixes

### ❌ `command not found: pnpm`

You haven't installed pnpm yet. Go back to **Step 2** and run:

```bash
npm install -g pnpm
```

---

### ❌ `command not found: node`

Node.js is not installed. Go back to **Step 1** and download it from [nodejs.org](https://nodejs.org).

---

### ❌ Port 3000 already in use

Another app is using that port. Run the dev server on a different port:

```bash
pnpm dev -- --port 3001
```

Then open [http://localhost:3001](http://localhost:3001).

---

### ❌ TypeScript errors after pulling new changes

Clear the build cache and restart:

```bash
rm -rf .next
pnpm dev
```

---

### ❌ `pnpm install` fails with a lock file error

Delete the lock file and reinstall:

```bash
rm pnpm-lock.yaml
pnpm install
```

---

## 🤝 Contributing

1. Always **pull the latest changes** before starting work:

   ```bash
   git pull origin main
   ```

2. Create a new branch for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes, then commit:

   ```bash
   git add .
   git commit -m "feat: describe what you did"
   ```

4. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a **Pull Request** on GitHub and request a review.

---

## 📄 License

This project is private. All rights reserved © [mamun-jsx](https://github.com/mamun-jsx).
