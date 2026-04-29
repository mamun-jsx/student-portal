import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";


export const dynamic = "force-dynamic";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
