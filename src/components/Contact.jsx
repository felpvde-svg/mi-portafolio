import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_xddp7q9',
        'template_rahdc7h',
        {
          from_name: form.name,
          to_name: 'Felipe Jaramillo Arboleda',
          from_email: form.email,
          to_email: 'felpvde@gmail.com',
          message: form.message,
        },
        '-ssz6i9k9AHxFMuW5'
      )
      .then(
        () => {
          setLoading(false);
          alert('Gracias por tu mensaje. Te responderé lo antes posible.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Ocurrió un error. Inténtalo de nuevo.');
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      {/* 📌 Sección de información personal */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] bg-eerieBlack p-8 rounded-2xl text-timberWolf"
      >
        <h3 className="text-2xl font-bold mb-4">Mi Información de Contacto</h3>
        <p><strong>Nombre:</strong> Felipe Jaramillo Arboleda</p>
        <p><strong>Documento:</strong> 1040034555</p>
        <p><strong>Correo:</strong> <a href="mailto:felpvde@gmail.com" className="text-blue-400">felpvde@gmail.com</a></p>
        <p><strong>Teléfono:</strong> <a href="https://wa.me/573015438545" target="_blank" rel="noopener noreferrer" className="text-green-400">+57 301 543 8545 (WhatsApp)</a></p>
        <p><strong>Ubicación:</strong> La Ceja, Antioquia, Colombia</p>

      {/* Botón de WhatsApp */}
<div className="mt-4">
  <a
    href="https://wa.me/573015438545"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-white hover:bg-green-600 text-black hover:text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-200"
  >
    💬 Escríbeme por WhatsApp
  </a>
</div>



        {/* Mapa con ubicación */}
        <div className="mt-6">
          <iframe
            title="Ubicación en mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.074063728725!2d-75.428!3d6.0303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4688a8b6a2e2ff%3A0x123456789abcdef!2sLa%20Ceja%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1694532487912!5m2!1ses!2sco"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </motion.div>

      {/* 📌 Sección del formulario */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Comunícate conmigo</p>
        <h3 className={styles.sectionHeadTextLight}>Envíame un mensaje</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document.querySelector('.contact-btn').setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}
          >
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');


