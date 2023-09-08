import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Studies from "./components/Studies";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  return (
    <main className="bg-[#222831] py-4 text-white font-fira-code min-h-screen">
      <Menu isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
      <button
        className="fixed bg-[#454e59] left-[5px] p-1 border border-[#892CDC]"
        onClick={handleOpenModal}
      >
        <i className="bx bx-menu "></i>
      </button>
      <div className="flex justify-between gap-1 sm:mr-7 xl:mr-24">
        <div className="w-[1px] max-h-full bg-[#454e59] p-[1px] ml-10 sm:ml-[120px] xl:ml-[170px]"></div>
        <article className="w-[70%] mx-5">
          <section className="bg-gradient-to-b from-[#393E46] to-[#454e59] py-6 px-3 rounded-xl border-[2px] border-[#892CDC] mb-7">
            <h1
              id="home"
              className="mb-7 p-3 text-center text-2xl text-[#BC6FF1]"
            >
              "HOLA SOY JUAN CAMILO GORDILLO"
            </h1>
            <p className="text-center text-base m-2">
              Desarrollador Front-End, te invito a explorar algunos de los
              proyectos en los que he trabajado y a conocer más sobre mi enfoque
              en el desarrollo web. No dudes en ponerte en contacto conmigo,
              estoy emocionado de colaborar contigo y transformar tus ideas en
              realidad en la web.
            </p>
          </section>
          <a
            href="#contact"
            className="bg-[#BC6FF1] p-4 rounded-2xl border border-white text-center"
          >
            <span>
              <i className="bx bx-chevrons-right"></i>
            </span>{" "}
            Contactame
          </a>
          <AboutMe />
          <Studies />
          <Projects />
          <Contact />
        </article>
      </div>
    </main>
  );
}

export default App;
