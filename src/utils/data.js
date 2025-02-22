import {
  FaCodeBranch,
  FaCss3,
  FaDashcube,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaWind,
} from 'react-icons/fa';

// import tailwind from '../assets/tailwind-css.svg';

export const items = [
   {
    id: 1,
    name: 'Bar and Lounge',
    category: 'Vanilla Js',
    field: 'E-commerce',
    description:
      "A sleek and modern bar & lounge website designed for an immersive customer experience. Built with a responsive UI, smooth navigation, and engaging visuals to showcase the ambience, menu, and events effortlessly",
    imgUrl:
      'https:https://res.cloudinary.com/gentlegiant/image/upload/v1740245537/barlounge_pv64wb.png',
    link: 'https://godrichelounge.netlify.app/',
  },
  {
    id: 2,
    name: 'Lorine',
    category: 'ReactJs',
    field: 'E-commerce',
    description:
      'This e-commerce project is a user-facing web application that provides a seamless shopping experience. It allows customers to browse and search for products, view product details, add items to their shopping cart, and proceed to checkout. The project includes interactive features such as user authentication, product filtering, and sorting. It employs responsive design to ensure compatibility across various devices. The application integrates with a backend server to fetch product data and process orders securely. The intuitive user interface, along with smooth navigation and quick loading times and enhances user experience and satisfaction.',
    imgUrl:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1681177403/Screenshot_from_2023-04-11_02-35-28_jrtduw.png',
    link: 'https://lorinecakes.netlify.app',
  },
  

 
  {
    id: 3,
    name: 'My Reads',
    category: 'ReactJs',
    field: 'Productivity',
    description:
      'This project is a web application developed as part of the Udacity React Nanodegree program. It is a bookshelf app that allows users to organize their books into different shelves: "Currently Reading," "Want to Read," and "Read." Users can search for new books and add them to their shelves. The project demonstrates the use of React components, state management, and controlled forms. It also showcases the integration with an external API to retrieve book data. ',
    imgUrl:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1691251706/myreads_g5jcjm.png',
    link: 'https://myreadspro.web.app/',
  },

  {
    id: 4,
    name: '19Empire',
    category: 'ReactJs',
    field: 'Productivity',
    description:
      "A clean and dynamic landing page crafted for a startup agency, designed to captivate and convert. Featuring a modern layout, intuitive navigation, and compelling CTAs to highlight services, showcase expertise, and drive engagement. Built for a seamless user experience and strong brand presence.",
    imgUrl:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1740247577/Screenshot_from_2025-02-22_18-57-16_x4t1yr.png',
    link: 'https://empire19.netlify.app/',
  },
];

export const interests = [
  {
    id: 4,
    name: 'React',
    Icon: FaReact,
    color: 'blue',
  },

  {
    id: 5,
    name: 'Tailwind CSS',
    Icon: FaWind,
    color: 'blue',
  },
  {
    id: 1,
    name: 'html',
    Icon: FaHtml5,
    color: 'red',
  },
  {
    id: 2,
    name: 'CSS',
    Icon: FaCss3,
  },
  {
    id: 3,
    name: 'JavaScript',
    Icon: FaJs,
    color: 'magenta',
  },

  {
    id: 4,
    name: 'React',
    Icon: FaReact,
    color: 'blue',
  },

  // {
  //   id: 5,
  //   name: 'Python',
  //   Icon: FaPython,
  //   color: 'yellow',
  // },

  // {
  //   id: 7,
  //   name: 'DB Management',
  //   Icon: FaDatabase,
  //   color: 'purple',
  // },
  // {
  //   id: 8,
  //   name: 'UI/UX',
  //   Icon: FaDashcube,
  //   color: 'brown',
  // },
  {
    id: 9,
    name: 'Version Control',
    Icon: FaCodeBranch,
    color: 'orange',
  },
];

export const links = [
  {
    id: 1,
    name: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'about',
    path: '/about',
  },
  {
    id: 4,
    name: 'portfolio',
    path: '/projects',
  },
  {
    id: 5,
    name: 'contact',
    path: '/contact',
  },
];
