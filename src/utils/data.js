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
    name: 'Lorine',
    category: 'ReactJs',
    field: 'E-commerce',
    description:
      'This frontend e-commerce project is a user-facing web application that provides a seamless shopping experience. It allows customers to browse and search for products, view product details, add items to their shopping cart, and proceed to checkout. The project includes interactive features such as user authentication, product filtering, and sorting. It employs responsive design to ensure compatibility across various devices. The application integrates with a backend server to fetch product data and process orders securely. The intuitive user interface, along with smooth navigation and quick loading times and enhances user experience and satisfaction.',
    imgUrl:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1681177403/Screenshot_from_2023-04-11_02-35-28_jrtduw.png',
    link: 'https://lorinecakes.netlify.app',
  },
  {
    id: 2,
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
    id: 3,
    name: 'Smash It',
    category: 'Vanilla Js',
    field: 'Productivity',
    description:
      "This a beginner weather app project that allows users to check the current weather conditions of a specific location. Users can input a city or location, and the app fetches real-time weather data using a weather API. The project uses HTML, CSS, and JavaScript to build the user interface, and makes asynchronous API requests to retrieve weather information such as temperature, humidity, and weather description. The app dynamically updates the displayed data based on the user's input. ",
    imgUrl:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1609892996/samples/landscapes/beach-boat.jpg',
    link: 'https://smash-it-8a898.firebaseapp.com/',
  },

  {
    id: 4,
    name: 'Targets',
    category: 'ReactJs',
    field: 'Productivity',
    description:
      "This is a simple beginner task management application created with ReactJs. It allows users to create, update, and delete tasks. The project employs React's component-based architecture, state management, and event handling to keep track of tasks and render them dynamically. Users can add new tasks, mark them as completed, and remove completed tasks. The user interface is straightforward, featuring an input field for adding tasks and a list to display them.",
    imgUrl:
      'https://res.cloudinary.com/gentlegiant/image/upload/v1675536347/samples/screenshots/targets_ocw431.png',
    link: 'https://targets.netlify.app',
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
