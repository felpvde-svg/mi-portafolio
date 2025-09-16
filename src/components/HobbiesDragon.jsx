import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const DragonModel = () => {
  const { scene } = useGLTF("/models/dragon_with_pearl.glb");
  return <primitive object={scene} scale={8} position={[0, -1.5, 0]} />;
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
        {/* Título */}
        <motion.div variants={textVariant()} className="text-left">
          <p className={styles.sectionSubText}>
            Mi tiempo lo aprovecho no solo en el ámbito laboral sino también en:
          </p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            Mis Aficiones
          </h2>
        </motion.div>

        {/* Texto */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-taupe text-[15px] sm:text-[17px] max-w-2xl leading-[26px] sm:leading-[28px] text-left"
        >
          En mis ratos libres me gusta mantener un equilibrio entre lo físico,
          lo creativo y lo mental.
        </motion.p>

        {/* Hobbies responsivos */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              variants={fadeIn("up", "spring", index * 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              className="bg-jetLight text-taupe px-4 py-3 rounded-[14px] 
                         shadow-card font-bold text-[14px] sm:text-[16px] 
                         hover:scale-105 transition-transform duration-300 text-center"
            >
              {hobby.name}
            </motion.div>
          ))}
        </div>

        {/* Dragón más liviano */}
        <div className="mt-12 w-full h-[300px] sm:h-[360px] flex justify-center items-center">
          <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} />
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



















