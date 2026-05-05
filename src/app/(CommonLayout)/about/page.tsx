import { getUser } from "@/utils/getUser";
import AboutHero from "@/components/AboutUs/AboutHero";
import OurMission from "@/components/AboutUs/OurMission";
import Stats from "@/components/AboutUs/Stats";
import AboutHistory from "@/components/AboutUs/AboutHistory";

const About = async () => {
  const user = await getUser();
  
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      
      {user && (
        <div className="bg-ec-primary/5 py-4 border-b">
          <div className="container mx-auto px-4">
            <p className="text-ec-primary font-medium">
              Welcome back, <span className="font-bold">{user.name}</span>! It's great to see you on the portal.
            </p>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <Stats />
        <OurMission />
        <AboutHistory />
      </main>
    </div>
  );
};

export default About;
