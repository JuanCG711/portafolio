const Studies = () => {
  return (
    <article
      id="studies"
      className="mt-32 bg-gradient-to-b from-[#393E46] to-[#454e59] py-6 px-3 rounded-xl border-[2px] border-[#892CDC] mb-7"
    >
      <h1 className="mb-7 p-3 text-center text-2xl text-[#BC6FF1]">Estudios</h1>
      <section className="border-[2px] border-[#892CDC] flex flex-col m-6 text-center">
        <div>
          <img className="w-full" src="/images/universidad.png" />
        </div>
        <div className="p-5">
          <h2 className="mt-7 font-bold sm:text-3xl">
            Universidad del Quindio
          </h2>
          <h3 className="mt-7">"Ingenieria de Sistemas"</h3>
          <p className="mt-7 text-[#BC6FF1]">En proceso</p>
        </div>
      </section>
      <section className="border-[2px] border-[#892CDC] flex flex-col  m-6 p-5 text-center">
        <div>
          <img className="w-min" src="/images/academlo.png" />
        </div>
        <div className="px-2 py-5">
          <h2 className="font-bold sm:text-3xl">Academlo</h2>
          <h3 className="mt-7">"Bootcamp desarrollo full-stack"</h3>
          <p className="mt-7 text-[#BC6FF1]">En proceso</p>
        </div>
      </section>
    </article>
  );
};
export default Studies;
