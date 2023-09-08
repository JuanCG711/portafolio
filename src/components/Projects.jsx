const Projects = () => {
  return (
    <article
      id="projects"
      className="mt-32 bg-gradient-to-b from-[#393E46] to-[#454e59] py-6 px-3 rounded-xl border-[2px] border-[#892CDC] mb-7"
    >
      <h1 className="mb-7 p-3 text-center text-2xl text-[#BC6FF1]">
        Proyectos
      </h1>
      <ul>
        <li className="border-[2px] border-[#892CDC] flex flex-col gap-3 m-6  text-center">
          <img
            className="border-[1px] border-[#892CDC]"
            src="/images/proyecto1.png"
            alt=""
          />
          <div className="px-3 py-7">
            <p className="mb-6 text-xl">Galletas de la fortuna</p>
            <a
              className="mr-6 bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://fortunecookies-jcgh.netlify.app/"
            >
              <i className="bx bx-link-alt"></i>
            </a>
            <a
              className="bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://github.com/JuanCG711/fortuneCookies"
            >
              <i className="bx bxl-github"></i>
            </a>
            <p className="mt-6 text-[#BC6FF1]">
              <span>
                <i className="bx bx-up-arrow-circle"></i>
              </span>{" "}
              Visitame
            </p>
          </div>
        </li>
        <li className="border-[2px] border-[#892CDC] flex flex-col gap-3 m-6 text-center">
          <img
            className="border-[1px] border-[#892CDC]"
            src="/images/proyecto2.png"
            alt=""
          />
          <div className="px-3 py-7">
            <p className="mb-6 text-xl">Rick and morty App</p>
            <a
              className="mr-6 bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://ricnandmortywiki.netlify.app/"
            >
              <i className="bx bx-link-alt"></i>
            </a>
            <a
              className="bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://github.com/JuanCG711/rickandmorty"
            >
              <i className="bx bxl-github"></i>
            </a>
            <p className="mt-6 text-[#BC6FF1]">
              <span>
                <i className="bx bx-up-arrow-circle"></i>
              </span>{" "}
              Visitame
            </p>
          </div>
        </li>
        <li className="border-[2px] border-[#892CDC] flex flex-col gap-3 m-6 text-center">
          <img
            className="border-[1px] border-[#892CDC]"
            src="/images/proyecto3.png"
            alt=""
          />
          <div className="px-3 py-7">
            <p className="mb-6 text-xl">Crear Usuarios App</p>
            <a
              className="mr-6 bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://createuserts.netlify.app"
            >
              <i className="bx bx-link-alt"></i>
            </a>
            <a
              className="bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://github.com/JuanCG711/createUsers"
            >
              <i className="bx bxl-github"></i>
            </a>
            <p className="mt-6 text-[#BC6FF1]">
              <span>
                <i className="bx bx-up-arrow-circle"></i>
              </span>{" "}
              Visitame
            </p>
          </div>
        </li>
        <li className="border-[2px] border-[#892CDC] flex flex-col gap-3 m-6 text-center">
          <img
            className="border-[1px] border-[#892CDC]"
            src="/images/proyecto4.png"
            alt=""
          />
          <div className="px-3 py-7">
            <p className="mb-6 text-xl">Pokemon App</p>
            <a
              className="mr-6 bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://pokemonstypes.netlify.app/"
            >
              <i className="bx bx-link-alt"></i>
            </a>
            <a
              className="bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://github.com/JuanCG711/pokedex"
            >
              <i className="bx bxl-github"></i>
            </a>
            <p className="mt-6 text-[#BC6FF1]">
              <span>
                <i className="bx bx-up-arrow-circle"></i>
              </span>{" "}
              Visitame
            </p>
          </div>
        </li>
        <li className="border-[2px] border-[#892CDC] flex flex-col gap-3 m-6 text-center">
          <img
            className="border-[1px] border-[#892CDC]"
            src="/images/ecommerce.png"
            alt=""
          />
          <div className="px-3 py-7">
            <p className="mb-6 text-xl">Ecommerce</p>
            <a
              className="mr-6 bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://academoproject.netlify.app/"
            >
              <i className="bx bx-link-alt"></i>
            </a>
            <a
              className="bg-[#892CDC] p-3 rounded-2xl cursor-pointer"
              href="https://github.com/JuanCG711/e-commerce"
            >
              <i className="bx bxl-github"></i>
            </a>
            <p className="mt-6 text-[#BC6FF1]">
              <span>
                <i className="bx bx-up-arrow-circle"></i>
              </span>{" "}
              Visitame
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
};
export default Projects;
