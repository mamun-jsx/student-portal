

interface PageProps {
  params: Promise<{ id: string }>;
}

const CourseDetails = async ({ params }: PageProps) => {
  const { id } = await params;
  const courseId = id as string;

  return (
    <>
      <section>
        <h2 className="bg-blue-700 text-center text-2xl text-white py-4">
          Course details page..show{" "}
          <span className="text-red-600">
            {courseId} this id related course
          </span>
        </h2>
      </section>
    </>
  );
};

export default CourseDetails;
