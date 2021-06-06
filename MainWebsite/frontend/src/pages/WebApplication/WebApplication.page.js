import React from "react";
import Banner from "../../components/Service_banner/Banner.components";
import Body from "../../components/Services_DescriptionBody/Description.components";
import Methodology from "../../components/Methodology/Methodology.component";
import { Data, WebData } from "../../assets/Data/MyData";
import ServicesBanner from "../../components/ServicesBanner/ServicesBanner.component";
import ServiceContent from "../../components/ServiceContent/ServiceContent.component";
import WebAppWhyUs from "../../components/WebAppWhyUs/WebAppWhyUs.component";
import TechnologyStack from "../../components/TechnologyStack/TechnologyStack.component";
import bannerImg from "../../assets/images/services-banner-imgs/web-app-banner.png";
import img from "../../assets/images/web-app-img.png";
import reactIcon from "../../assets/images/icons/react.png";
import nodeIcon from "../../assets/images/icons/node-js.png";
import laravelIcon from "../../assets/images/icons/laravel.png";
import pythonIcon from "../../assets/images/icons/python.png";
import aspIcon from "../../assets/images/icons/asp.net-logo.png";

const webApplicationBannerData = {
  bgImg: bannerImg,
  title: {
    bold: "Web Applictaion",
    normal: "Development",
  },
  description:
    "Expert FullStack Development Services that shield your enterprise from modern technical and business challenges.",
};

const webApplicationContent = {
  img: img,
  title: ["Turn your ideas into", "outstanding digital products"],
  description:
    "Want to create a web or mobile application, but you’re not sure where to start? We’ve got you covered. We specialize in building end-to-end solutions, with our experts ready to help you in every step of the way, from product ideation all the way to maintanance and support. Front-end or back-end, native app or cross-platform—we help you specify your needs and code your ideas by turning them into successful, market-ready jewels.",
};

const webAppMethodologyData = [
  {
    id: 1,
    title: "Workshop",
    description:
      "Each project at OrangeProgramming, whether it’s a web application, mobile application, or any form of software development, begins with an in-person or online workshop. In this workshop, you and your key stakeholders meet with a dedicated product design team, which includes business analysts, UX/UI designers, solution architects and other key members specific to the needs of your project.",
  },
  {
    id: 2,
    title: "Documentation",
    description:
      "The expectation of all parties involved must line up before the beginning of the development phase. This not only ensures that we can build an intuitive, user-friendly web app but that it meets your commercial goals and expectations, and that together we can create the foundation of a long-term business relationship.The documentation gathered in the workshop helps our business analysts finalise the User Stories documentation. Each story defines a function inside the app and is assigned a different priority which is crucial to shaping each iteration during the app’s development. This documentation also contains a DoD (Definition of Done), which forms the ‘acceptance criteria’ for every feature of the app.By the end of this phase, our product design team will have created all the documentation necessary for other teams to use later throughout the development process, along with any other relevant information. At this point, the design team can use their findings from the workshop and the User Stories documentation to begin building a prototype of your app.",
  },
  {
    id: 3,
    title: "UI / UX Design",
    description:
      "With a complete understanding of your business goals and target audience, we start the UX or User Experience design phase. Here, we create your web app’s flow and the general experience your user will have within your app. The ‘live sketches’ or rapid wireframing created during the workshop allows our designers to establish the best way to present your end users with the information they want and what each view should contain.UI, or user interface, is essentially what the user will see when interacting with your web app. Our designers use the wireframes from the UX design stage and turn them into mockups of the views the end user may see inside your web application.UI and UX work closely to ensure that the user can get the relevant information with ease.",
  },
  {
    id: 4,
    title: "Coding Phase",
    description:
      "Your web app’s frontend is the part that users see, use, and interact with. Our experienced team of frontend developers creates the most aesthetically pleasing, easy to use and process-orientated front end for your application, based on user testing, industry-standard best practices, and their years of experience.The back end of your app provides data to your app from a database. If your app requires user accounts, data to be shared between users and devices, to store data online or you need the app to show your user data from an external source, then you will need a dedicated backend developer.",
  },
  {
    id: 5,
    title: "Testing",
    description:
      "QA testing is an integral part of the development of any digital product. This team is involved from the very beginning of the development phase, creating different test cases and scenarios to test your specific digital product. The main goal of testing is to ensure that all features work and that it displays properly on different devices and chosen browsers. This process is reiterated time and time again, and any problems are noted and resolved.Consistent code quality, and a smooth user experience are key factors to the success of your web app development and the more testing you apply, the greater the outcome of your final product.",
  },
  {
    id: 6,
    title: "Deployment",
    description:
      "During both the development and QA testing phases, your app will be hosted live on a staging environment. Here, the code can only be accessed by the development team. It’s here where everything is given a final check and primed for release. It’s in this phase where your web app can be opened for a select few individuals to test your program. Often called a ‘soft launch’ or ‘beta,’ trusted customers have exclusive access to your product to give feedback. Our analysts also gather data from their behaviour and use it to fine-tune any elements before release to the general public.",
  },
  {
    id: 7,
    title: "Support & Maintenance",
    description:
      "Your web-based software is only as strong as the team that maintains it. To guarantee that your new software functions flawlessly, our experts help find and solve any bugs or problems you or your users may have. This team monitors performance, provides consultancy, and manages the process of making any changes you need once your app is live and running.We will ensure that all documentation is updated accordingly so that you can grow and scale the digital marketing around your web app. This dedicated team of app developers also gathers real data from users of your app as well as their feedback. This information helps shape future updates and ensures that your users get the best problem-solving app, therefore maximizing your business’s returns.",
  },
];

const webAppTechStackData = {
  title: "Check out our web technology stack",
  description:
    "In delivering scalable, flawlessly working apps, top-notch technology stack is a must. Here are the web development solutions we rely on to deliver high quality applications.",
  imgs: [reactIcon, nodeIcon, laravelIcon, aspIcon, pythonIcon],
  numOfTechs: 6,
};

export default function WebApplication() {
  return (
    <>
      <ServicesBanner data={webApplicationBannerData} />
      <ServiceContent data={webApplicationContent} />
      <Methodology data={webAppMethodologyData} />
      <TechnologyStack data={webAppTechStackData} />
      <WebAppWhyUs />
      {/* <Banner dbName={WebData} />
      <Body dbName={WebData} />
      <Methodology dbName={WebData} /> */}
    </>
  );
}
