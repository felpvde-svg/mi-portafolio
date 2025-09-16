# trabajo de Quipux  Creatividad y construccion del futuro  - Portafolio con Vibras modernas y elementos dinamicos 

Este proyecto es una página web desarrollada con **Next.js y React**, desplegada en **Netlify** gracias a una conexion con Gihub como lo indico el profesor en la clase.  
Mi  objetivo principal fue crear un portafolio que no solo muestre mis habilidades técnicas, sino también mi **creatividad, identidad visual y capacidad para innovar** en la experiencia del usuario.En el proyecto utilice tanto la web REACT VITE Y UNA plantilla para aprender y ejecutar mis ideas de la mejor manera .Anunque en el proeycto no incorpore mi idea mas creativa sobre un  diseño tecnologico /natural  los avances realizados para estructurar las bases de mi portafolio me gustaron y tuvieron grandes resultados como lo pude observar en el siguiente enlace 

##  Versión en la Nube  

Mi portafolio también está desplegado en Netlify, puedes verlo en el siguiente enlace:  

👉 **[Ver Proyecto en Vivo](https://portafoliofelip.netlify.app/#about)**  

---

##  Video Demo  

Aquí puedes ver una demostración en video de cómo funciona el portafolio:  

<video src="https://github.com/felpvde-svg/mi-portafolio/raw/main/demo.mp4" controls width="600"></video>




# Mi portafolio

Los dos íconos más importantes que incorpore fueron basicamente dos ya que estos expresan mucho para mi como ser humano   
-  **El dragón 3D /tambien incorporado en el incio**, como representación de poder y creatividad.  
-  **El cursor de fuego**, que simboliza energía y dinamismo conectado directamente con la tematica.  
---

## 📖 Introducción

Este portafolio fue diseñado con la idea de ser diferente a los convencionales: no solo presentar información, sino transmitir una **historia visual y emocional**.  
Cada apartado tiene un propósito, y todos los elementos (dragón, fuego, animaciones, colores) se unen para reflejar **quién soy y cómo pienso mis proyectos**.  

---

## mis  Objetivos principales al comenzar mi proyecto fueron:

- Crear un portafolio moderno, atractivo y responsivo.  
- Integrar **elementos 3D e interactivos** para una experiencia única.  
- Usar **animaciones y estilos personalizados** para diferenciarlo de lo común(por eso modifique el cursor y varios apartados).  
- Documentar cada apartado para mostrar la lógica detrás del diseño.  
- Desplegarlo en la nube con **Netlify** y hacerlo accesible en línea como lo indicaban las instrucciones de Quipux.  
- cumplir con todos lo criterios de Quipux 
---

##  Apartados del Proyecto (y lo que hice en cada uno)

### 1.  Inicio / Presentación
- Implementé una introducción clara con mi nombre y rol con mi foto editada a blanco y negro para que se acoplara mas a la tematica moderna.  
- Añadí un diseño atractivo que conecta al usuario con mi personalidad  desde el primer momento.  
- Usé animaciones suaves con **Framer Motion** para dar dinamismo.  

### 2.  mis habilidades
- introduccion de mi filosofia de vida ,donde se expresa que todo en la vida aunque no tengas "taleto"  se puede trabajar y lograr(La disciplina la llave maestra del verdadero potencial humano)
- Cambié íconos y títulos para reflejar mejor mis habilidades.  
- Este apartado muestra de forma directa **cómo puedo aportar valor**.  

### 3.  Hobbies (con Dragón 3D-)
- Desarrollé una sección donde muestro mis aficiones: *Gym, Gaming, Música, Coding, Naturaleza*.  
- Coloqué un **dragón 3D interactivo** que se puede rotar con el mouse.  
- Este dragón no es solo un adorno: representa **mi fuerza, creatividad y disciplina**.  
- Fue cargado con **@react-three/fiber y drei** para optimizar el renderizado.  

``jsx
const DragonModel = () => {
  const { scene } = useGLTF("/models/dragon_with_pearl.glb");
  return primitive object={scene} scale={8} position={[0, -1.5, 0]} />;
};

## Experiencia y Educación (Timeline)**

Este apartado fue creado con **react-vertical-timeline-component**, mostrando de forma visual mi **camino de aprendizaje **.  
La línea de tiempo simboliza un recorrido: cada paso es un **avance constante** y un **logro alcanzado**.me siento orgulloso de haber empezado a formar mi camino de desarrollador se que el progreso es corto pero 100 porciento con gratitud  y motivacion   



###  Características principales
- **Título** → Representa el rol o estudio realizado.  
- **Institución** → aca esta toda la parte de estudio realizada  .  
- **Fecha** → Indica el período en el que se realizó.  
- **Ícono distintivo** → Refuerza visualmente cada experiencia.(es un dragon )  
- **Último nodo** → Incluye un botón interactivo para descargar mi certificado(cuando me gradue de Quipux).  

###  Idea creativa
La línea de tiempo es una **metáfora visual de mi progreso**:  
- Cada entrada es un paso firme en mi camino.  
- El recorrido no es estático, refleja **crecimiento y evolución constante**.  
- El botón final con el certificado muestra cómo todo aprendizaje deja una **huella tangible y verificable**.  

###  Ejemplo de implementación
``jsx
<VerticalTimelineElement
  contentStyle={{
    background: '#eaeaec',
    color: '#292929',
  }}
  date={<h3 className="text-dim font-bold">{experience.date}</h3>}
  iconStyle={{ background: experience.iconBg }}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  }
>
  <h3 className="text-jetLight text-[24px] font-bold">{experience.title}</h3>
  <p className="text-taupe text-[22px] font-semibold">{experience.company_name}</p>
</VerticalTimelineElement>

##  Contacto

Este apartado fue creado con **React** y **EmailJS**, permitiendo que cualquier persona pueda escribirme fácilmente.  
Los mensajes enviados desde el formulario llegan **directo a mi correo personal**, sin necesidad de programar un backend complejo.  

###  Características principales
- **Formulario de contacto** → Nombre, correo y mensaje.  
- **Conexión con EmailJS** → Maneja el envío de correos de forma segura y rápida.  
- **Confirmación al usuario** → Notifica cuando el mensaje se ha enviado correctamente.  
- **Datos personales visibles** → Incluye nombre, email, WhatsApp y ubicación.  
- **Mapa integrado de Google Maps** → Muestra mi ubicación (La Ceja, Antioquia).  
- **Botón directo a WhatsApp** → Para mensajes instantáneos con un solo clic.  

###  Idea creativa
La sección de contacto busca ser **clara, accesible y sin barreras técnicas**:  
- Mantiene un **canal directo conmigo**.  
- Evita la complejidad de levantar un servidor propio.  
- Combina **formalidad (correo)** y **rapidez (WhatsApp)** en un solo lugar.  

###  Ejemplo de implementación
jsx
<form ref={formRef} onSubmit={handleSubmit}>
  <label>
    <span>Your Name</span>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="What's your name?"
    />
  </label>

  <label>
    <span>Your Email</span>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="What's your email?"
    />
  </label>

  <label>
    <span>Your Message</span>
    <textarea
      rows="7"
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="What's your message?"
    />
  </label>

  <button type="submit">
    {loading ? 'Sending...' : 'Send'}
  </button>
</form>

# Cursor personalizado  
   - Implementé un cursor especial que reemplaza el clásico del navegador.  
   - El cursor tiene un **efecto de fuego brillante** (con sombra luminosa blanca) que le da un aspecto mágico.  
   - Se mueve suavemente siguiendo al mouse, dando la sensación de que el usuario controla una llama.   

   Código base del cursor:
   ``jsx
   <img
     ref={cursorRef}
     src="/cursor.png"
     alt="Cursor fuego"
     className="fixed top-0 left-0 pointer-events-none z-[9999]"
     style={{
       width: "40px",
       height: "40px",
       filter: "drop-shadow(0 0 25px white)",
       transform: "translate3d(0,0,0) translate(-50%, -50%)",
     }}

   ## Ideas creativas aplicadas
- **Modelo 3D:** Uso de un **dragón** como elemento distintivo y central del diseño.  
- **Animaciones modernas:** Gracias a **Framer Motion**, cada apartado tiene movimiento fluido.  
- **Diseño responsivo:** Adaptado a **móvil, tablet y desktop**.  
- **Secciones dinámicas:** No solo texto estático, sino componentes interactivos.  
- **Equilibrio entre lo profesional y lo personal:** Reflejo tanto mi experiencia como mis hobbies.  

---

