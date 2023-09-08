const Menu = ({ isShowModal, setIsShowModal }) => {
  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <section
      className={`fixed bg-[#393E46]/[0.9] top-0 bottom-0 right-0 
    left-0 flex justify-center items-center transition-transform duration-200 sm:bg-[#393E46]/[0] sm:flex sm:justify-start sm:right-[1000px] ${
      isShowModal
        ? "visible scale-100"
        : "invisible scale-0 sm:visible sm:scale-100"
    }`}
    >
      <div>
        <button
          type="button"
          onClick={handleCloseModal}
          className="absolute right-2 m-4 top-0 sm:top-[530px] sm:invisible"
        >
          <i className="bx bx-x bg-[#BC6FF1] text-white p-4 rounded-3xl cursor-pointer text-center border-[2px] border-[#fdf6fd] sm:p-3"></i>
        </button>
      </div>
      <div className="flex flex-col gap-10 sm:text-xs sm:ml-3">
        <a
          href="#home"
          onClick={handleCloseModal}
          className="bg-[#BC6FF1] text-white p-4 rounded-3xl cursor-pointer text-center border-[2px] border-[#fdf6fd] sm:p-2"
        >
          <i className="bx bxs-home mr-2"></i>
          Inicio
        </a>
        <a
          href="#aboutMe"
          onClick={handleCloseModal}
          className="bg-[#BC6FF1] text-white p-4 rounded-3xl cursor-pointer text-center  border-[2px] border-[#fdf6fd] sm:p-2"
        >
          <i className="bx bx-male mr-2"></i>
          Sobre mi
        </a>
        <a
          href="#studies"
          onClick={handleCloseModal}
          className="bg-[#BC6FF1] text-white p-4 rounded-3xl cursor-pointer text-center  border-[2px] border-[#fdf6fd] sm:p-2"
        >
          <i className="bx bxs-graduation mr-2"></i>
          Estudios
        </a>
        <a
          href="#projects"
          onClick={handleCloseModal}
          className="bg-[#BC6FF1] text-white p-4 rounded-3xl cursor-pointer text-center  border-[2px] border-[#fdf6fd] sm:p-2"
        >
          <i className="bx bxs-collection mr-2"></i>
          Proyectos
        </a>
        <a
          href="#contact"
          onClick={handleCloseModal}
          className="bg-[#BC6FF1] text-white p-4 rounded-3xl cursor-pointer text-center  border-[2px] border-[#fdf6fd] sm:p-2"
        >
          <i className="bx bxl-gmail mr-2"></i>
          Contacto
        </a>
      </div>
    </section>
  );
};
export default Menu;
