import { preRegSummer2025 } from "@/actions/studentsApi/Preregistration";

interface IPreg {
  code: string;
  title: string;
  credits: number;
  Faculty: string;
  day: string;
}

const Preregistration = async () => {
  const data: IPreg[] = preRegSummer2025;

  console.log(data);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Preregistration</h1>
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
        <p className="text-gray-400">
          Complete your course preregistration for the upcoming semester.
        </p>
        <div>
          {data?.map((re) => (
            <p key={re.code}>{re.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preregistration;
