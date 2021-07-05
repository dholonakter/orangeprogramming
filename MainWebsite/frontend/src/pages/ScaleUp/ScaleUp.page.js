import React from "react";
import bannerImg from "../../assets/images/ScaleUp/scale-up-banner.png";
import ScaleUpApproach from "../../components/ScaleUpApproach/ScaleUpApproach.component";
import ScaleupImportance from "../../components/ScaleupImportance/ScaleupImportance.component";
import Label from "../../components/Windows_Components/FullLabel/Label.components";
import ServicesBanner from "./../../components/ServicesBanner/ServicesBanner.component";

const bannerData = {
  bgImg: bannerImg,
  title: {
    bold: "Scale up",
    normal: "Consultancy",
  },
  description:
    "Ous expert consultents helps you scaling up your business strategically  to grow your business faster , to achieve more and  go funther.",
};

function ScaleUp() {
  return (
    <>
      <ServicesBanner data={bannerData} />
      <ScaleupImportance />
      <ScaleUpApproach />
      <Label serviceName="Scale up" />
    </>
  );
}

export default ScaleUp;
