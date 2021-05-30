import React from "react";
import Banner from "../../components/Service_banner/Banner.components";
import Body from "../../components/Services_DescriptionBody/Description.components";
import Methodology from "../../components/Methodology/Methodology.component";
import { Data, WebData } from "../../assets/Data/MyData";
import ServicesBanner from "../../components/ServicesBanner/ServicesBanner.component";
import WebAppContent from "../../components/WebAppContent/WebAppContent.component";
import WebAppWhyUs from "../../components/WebAppWhyUs/WebAppWhyUs.component";
import TechnologyStack from "../../components/TechnologyStack/TechnologyStack.component";

export default function WebApplication() {
  return (
    <>
      <ServicesBanner />
      <WebAppContent />
      <Methodology />
      <TechnologyStack />
      <WebAppWhyUs />
      {/* <Banner dbName={WebData} />
      <Body dbName={WebData} />
      <Methodology dbName={WebData} /> */}
    </>
  );
}
