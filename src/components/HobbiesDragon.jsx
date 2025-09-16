import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const DragonModel = () => {
  const { scene } = useGLTF("/models/dragon_with_pearl.glb");
  return <primitive object={scene} scale={18} position={[0, -7, 0]} />;
};

const HobbiesDragon = () => {
  const hobbies = [
    { name: "Gym" },
    { name: "Gaming" },
    { name: "Música" },
    { name: "Coding" },
    { name: "Naturaleza" },
  ];

  return (
    <div className="w-full -mt-[4rem]" id="hobbies">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8">
        {/* Encabezado */}
        <motion.div variants={textVariant()} className="text-left">
          <p className={styles.sectionSubText}>
            Mi tiempo lo aprovecho no solo en el ámbito laboral sino también en:
          </p>
          <h2
            className={`${styles.sectionHeadText} text-white`}
          >
            Mis Aficiones
          </h2>
        </motion.div>

        {/* Texto descriptivo */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-taupe text-[17px] max-w-2xl leading-[28px] text-left"
        >
          En mis ratos libres me gusta mantener un equilibrio entre lo físico,
          lo creativo y lo mental. Estas aficiones representan mi forma de crecer
          y disfrutar de la vida, desde entrenar hasta conectar con la naturaleza.
        </motion.p>

        {/* Cuadros grises con hobbies */}
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              variants={fadeIn("up", "spring", index * 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              className="bg-jetLight text-taupe px-6 py-4 rounded-[14px] 
                         shadow-card font-beckman font-bold text-[16px] 
                         tracking-[1px] hover:scale-105 transition-transform 
                         duration-300 cursor-default"
            >
              {hobby.name}
            </motion.div>
          ))}
        </div>

        {/* Dragón más compacto */}
        <div className="mt-12 w-full h-[320px] sm:h-[380px] flex justify-center items-center">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <ambientLight intensity={1.1} />
            <directionalLight position={[10, 10, 5]} intensity={1.3} />
            <Suspense fallback={null}>
              <DragonModel />
            </Suspense>
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(HobbiesDragon, "hobbies");

















