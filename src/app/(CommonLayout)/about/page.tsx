import { getUser } from "@/utils/getUser";

const About = async () => {
  const user = await getUser();
  console.log("this is from serveer", user);
  return (
    <section>
      <h2 className="bg-blue-700 text-center text-2xl text-white py-4">
        About page
      </h2>
      <h1 className="text-center text-2xl text-white py-4">{user?.name}</h1>
    </section>
  );
};

export default About;
