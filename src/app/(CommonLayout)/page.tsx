export default function Home() {
  return (
    <section className="">
      <h2 className="bg-blue-700 text-center text-2xl text-white py-4">
        Home page
      </h2>
      {/*  */}
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        <p>
          Look at the button into home page, which class is attached in this
          button. You do not need to write tailwindCss for every time into
          button
        </p>
        <button className="btn btn-primary">Click me 1</button>
        <button className="btn btn-secondary">Click me 2</button>
      </div>
    </section>
  );
}
