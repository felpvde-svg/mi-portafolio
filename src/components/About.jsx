import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// 🔹 Tarjeta individual
const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex-shrink-0 w-[250px] sm:w-auto card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-jetLight rounded-[20px] py-6 px-6 min-h-[240px] flex justify-evenly items-center flex-col hover:scale-105 transition-transform duration-300"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

// 🔹 Sección completa
const About = () => {
  return (
    <div className="relative mt-10 px-4 sm:px-6">
      {/* Títulos */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.sectionSubText}>Un poco sobre mí</p>
        <h2 className={styles.sectionHeadText}>Mis Habilidades</h2>
      </motion.div>

      {/* Descripción */}
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-4 text-taupe text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
      >
        Desde muy pequeño he cultivado diferentes actitudes importantes en mi vida,
        que me han ayudado a abordar situaciones complejas y a ver la realidad de
        forma distinta. Entre las habilidades más destacadas que tengo se encuentran
        las siguientes:
      </motion.p>

      {/* Cards Responsivas */}
      <div className="mt-10">
        {/* Carrusel en móvil */}
        <div className="flex sm:hidden gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pb-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* Grid en pantallas grandes */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');


