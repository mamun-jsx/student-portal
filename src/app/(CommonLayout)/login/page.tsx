import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] relative overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-ec-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-ec-accent/20 blur-[120px] rounded-full" />
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="mb-8 text-center">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/5 border border-white/10 text-ec-accent text-sm font-medium tracking-wider uppercase">
            Student Management System
          </div>
        </div>
        <LoginForm />
      </div>

      <footer className="absolute bottom-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Student Portal. All rights reserved.
      </footer>
    </section>
  );
}
