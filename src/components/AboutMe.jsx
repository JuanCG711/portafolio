const AboutMe = () => {
  return (
    <article id="aboutMe" className="mt-32">
      <section className="bg-gradient-to-b from-[#393E46] to-[#454e59] py-6 rounded-xl border-[2px] border-[#892CDC] mb-7">
        <h1 className="mb-7 p-3 rounded-2xl text-center text-3xl text-[#BC6FF1]">
          Sobre mi
        </h1>
        <p className="text-center text-base m-2">
          Soy un apasionado desarrollador web Junior con un amor profundo por la
          creación de experiencias digitales impactantes. En mi trayecto he
          tenido la oportunidad de trabajar en distintos proyectos de sitios web
          interactivos, mi enfoque se basa en la combinación de diseño estético
          y funcionalidad sólida, siempre enfocado en proporcionar la mejor
          experiencia posible para los usuarios.
        </p>
      </section>
      <section className="bg-gradient-to-b from-[#393E46] to-[#454e59] py-6 rounded-xl border-[2px] border-[#892CDC]">
        <h1 className="mb-7 p-3 rounded-2xl text-center text-3xl text-[#BC6FF1]">
          Habilidades
        </h1>
        <ul className="text-center grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 text-2xl">
          <li className="border-[2px] border-[#892CDC] flex flex-col gap-2 m-6 p-3">
            <i className="bx bxl-react text-[#22d3ee]"></i>
            React
          </li>
          <li className="border-[2px] border-[#892CDC] flex flex-col gap-2 m-6 p-3">
            <i className="bx bxl-html5 text-[#ef4444]"></i>
            HTML
          </li>
          <li className="border-[2px] border-[#892CDC] flex flex-col gap-2 m-6 p-3">
            <i className="bx bxl-css3 text-[#0284c7]"></i>
            CSS
          </li>
          <li className="border-[2px] border-[#892CDC] flex flex-col gap-2 m-6 p-3">
            <i className="bx bxl-javascript text-[#facc15]"></i>
            JavaScript
          </li>
          <li className="border-[2px] border-[#892CDC] flex flex-col gap-2 m-6 p-3">
            <i className="bx bxl-github text-[#262626]"></i>
            GitHub
          </li>
          <li className="border-[2px] border-[#892CDC] flex flex-col gap-2 m-6 p-3">
            <i className="bx bxl-tailwind-css text-[#0ea5e9]"></i>
            Tailwind
          </li>
        </ul>
      </section>
    </article>
  );
};
export default AboutMe;
