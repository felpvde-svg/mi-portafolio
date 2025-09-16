import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  
  
  kelhel,
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Habilidades',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
   {
    id: 'work',
    title: 'Experiencia',
  },
  {
  id: 'hobbies',
  title: 'Hobbies',
},
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
    {
    title: 'desarrollo web ',
    icon: ux,
  },
  {
    title: 'Logica matematica',
    icon: frontend,
  },
  {
    title: 'Creatividad',
    icon: backend,
  },
  {
    title: 'resolucion de problematicas',
    icon: ux,
  },
  {
    title: 'Comunicacion',
    icon: prototyping,
  },
   {
    title: 'liderazgo',
    icon: ux,
  },
   {
    title: 'Disciplina y Enfoque',
    icon: ux,
  },
   {
    title: 'Paciencia y constancia',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
 
  {
    name: 'React JS',
    icon: reactjs,
  },
 
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
 
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Descubrimiento  de habilidades y gustos ',
    company_name: 'Direccionalidad proyecto de vida',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2023 - Feb 2024',
  },
  {
    title: ' media tecnica de sistemas',
    company_name: 'principios de la programacion ',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Feb 2024 - Octubre 2024',
  },
  {
    title: ' Expadiendo mis conocimientos de programacion  ',
    company_name: 'Lenguajes de programacion y practica',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Octubre 2024 - Present',
  },
  {
    title: 'Inicio de mi proyecto de grado ',
    company_name: ' Php ,html ,css,Mysql',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2025 - actualidad',
  },
  {
    title: 'curso Quipux',
    company_name: 'Desarrollo de Software',
    icon: kelhel,
    iconBg: '#333333',
    date: 'agosto 10 - Present',
  },
];

const projects = [
  {
    id: 'project-1 ',
    name: 'Calculadora clasica web',
    description: 'este es un ejemplo de como se van a ver mis proyectos futuros  ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '',//aca va ir el link de mi proyecto del repositorio
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',//aca la pagina web del proyecto
  },
  {
    id: 'project-2S',
    name: 'Proyecto nuevo',
    description:
      'Mis proyectos con Quipux los estare implementando en mi portafolio ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '',
    demo: "",
  },
  
  
  
];

export { services, technologies, experiences, projects };
