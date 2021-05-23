export const navItemsData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
    pathDisable: true,
    subMenu: [
      {
        title: "Web Application",
        path: "/web-development",
      },
      {
        title: "Mobile Developments",
        path: "/mobile-development",
      },
      {
        title: "Predictable Artifical Intellignece",
        path: "/ai",
      },
      {
        title: "Windows Application",
        path: "/windows-application",
      },
    ],
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Consultancy",
    path: "/consultancy",
    pathDisable: true,
    subMenu: [
      {
        title: "Start Up",
        path: "/consultancy/start-Up",
      },
      {
        title: "Scale Up",
        path: "/consultancy/scale-Up",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    button: true,
  },
];
