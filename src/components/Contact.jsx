import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mzd65da",
        "template_kjzr8jq",
        form.current,
        "nXQoXC5w3C5NPZdLA"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          alert("No se envio el mensaje");
        }
      );
  };

  return (
    <article>
      <section
        id="contact"
        className="mt-32 bg-gradient-to-b from-[#393E46] to-[#454e59] py-6 px-2 rounded-xl border-[2px] border-[#892CDC] mb-7"
      >
        <h1 className="mb-7 p-3 text-center text-2xl text-[#BC6FF1]">
          Contactame
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center"
        >
          <label className="text-[#BC6FF1]">Nombre</label>
          <input type="text" name="user_name" />
          <label className="text-[#BC6FF1]">Email</label>
          <input type="email" name="user_email" />
          <label className="text-[#BC6FF1]">Mensaje</label>
          <textarea name="message" />
          <input
            className="bg-[#BC6FF1] p-3 rounded-3xl cursor-pointer mt-5 mb-10"
            type="submit"
            value="Enviar"
          />
        </form>
        <div className="text-center">
          <a
            className="mr-4 bg-[#BC6FF1] p-3 rounded-3xl cursor-pointer"
            href="https://wa.me/+3022763742/"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            className="mr-4 bg-[#BC6FF1] p-3 rounded-3xl cursor-pointer"
            href="https://www.linkedin.com/in/juan-camilo-gordillo-hernandez-581829268/"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            className="bg-[#BC6FF1] p-3 rounded-3xl cursor-pointer"
            href="https://github.com/JuanCG711"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </section>
      <section className="text-center bg-[#892CDC] p-3">
        <h2>© Todos los derechos reservados por Juan Camilo Gordillo</h2>
        <h3>CopyRights © 2023 | All Rights Reserved</h3>
      </section>
    </article>
  );
};
export default Contact;
