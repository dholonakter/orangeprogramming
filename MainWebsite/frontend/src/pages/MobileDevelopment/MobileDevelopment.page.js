import React from "react";
import Banner from "../../components/Service_banner/Banner.components";
import Body from "../../components/Services_DescriptionBody/Description.components";
import { MobileData } from "../../assets/Data/MyData";
import bannerImg from "../../assets/images/services-banner-imgs/mobile-development-banner.png";
import ServicesBanner from "../../components/ServicesBanner/ServicesBanner.component";
import ServiceContent from "../../components/ServiceContent/ServiceContent.component";
import img from "../../assets/images/mobile-development-img.png";
import MobileDevelopmentSolutions from "../../components/MobileDevelopmentSolutions/MobileDevelopmentSolutions.component";
import WebAppWhyUs from "../../components/WebAppWhyUs/WebAppWhyUs.component";
import Methodology from "../../components/Methodology/Methodology.component";
import TechnologyStack from "../../components/TechnologyStack/TechnologyStack.component";
import reactNativeIcon from "../../assets/images/icons/react-native.png";
import javaIcon from "../../assets/images/icons/Java-Logo.png";
import pythonIcon from "../../assets/images/icons/python.png";

const mobileDevelopmentData = {
  bgImg: bannerImg,
  title: {
    bold: "Mobile Applictaion",
    normal: "Development",
  },
  description:
    "We develop smart mobile apps with best performing technologies, saving your money and precious time.",
};

const mobileDevelopmentContent = {
  img: img,
  title: ["Mobile App Development Solutions", "to Suit Your Purpose"],
  description: `Mobile application development services market is growing at an incessant pace. To be able to keep your business and product relevant to the market expectations you need to go with something that adds to the power of mobility to your users, keeping your underlying functional purpose and intent of communication served well. At Orange Programming , we aim at delivering just that – with highly resourceful, cost efffective World-Class Mobile experiences Innovation Expert Committed To App Development Excellence! and authentic mobile app development solutions that know the pulse of your user.`,
};

const mobileDevelopmentMethodologyData = [
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
      "The expectation of all parties involved must line up before the beginning of the development phase. This not only ensures that we can build an intuitive, user-friendly web app but that it meets your commercial goals and expectations, and that together we can create the foundation of a long-term business relationship.The documentation gathered in the workshop helps our business analysts finalise the User Stories documentation. Each story defines a function inside the app and is assigned a different priority which is crucial to shaping each iteration during the app’s development.",
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
      "Your web-based software is only as strong as the team that maintains it. To guarantee that your new software functions flawlessly, our experts help find and solve any bugs or problems you or your users may have. This team monitors performance, provides consultancy, and manages the process of making any changes you need once your app is live and running.We will ensure that all documentation is updated accordingly so that you can grow and scale the digital marketing around your web app. This dedicated team of app developers also gathers real data from users of your app as well as their feedback.",
  },
];

const webAppTechStackData = {
  title: "Mobile Technologies - What do we Use to Build Apps?",
  description:
    "Mobile application development involves skill and expertise in iOS and Android technical nuts and bolts. That’s exactly what we deliver when we work on your product. Our team uses up-to-date, reliable solutions tailored to your needs.",
  imgs: [reactNativeIcon, javaIcon, pythonIcon],
  numOfTechs: 3,
};

export default function MobileDevelopment() {
  return (
    <>
      <ServicesBanner data={mobileDevelopmentData} />
      <ServiceContent data={mobileDevelopmentContent} />
      <MobileDevelopmentSolutions />
      <Methodology
        header="How we build your custom mobile application"
        data={mobileDevelopmentMethodologyData}
      />
      <TechnologyStack data={webAppTechStackData} />
      <WebAppWhyUs />
      {/* <Banner dbName={MobileData}/>
            <Body dbName={MobileData}/>
            <Methodology dbName={MobileData}/> */}
    </>
  );
}
