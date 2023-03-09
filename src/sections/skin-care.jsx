import React from "react";
import ContentAndCarousel from "../components/content-carousel";
import bottle from "../assets/bottle.png";

import image0 from "../assets/skincare/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.webp";
import image1 from "../assets/skincare/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.webp";
import image2 from "../assets/skincare/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png";
import image3 from "../assets/skincare/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png";
import image4 from "../assets/skincare/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px.png";

const skinCare = () => {
  let details = {
    tag: "Skin Care+",
    title: "Intensive formulations for complex skin",
    content: `Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.
    `,
    btnText: "Browse formulations",
    color: "[#333]",
  };
  let images = [
    {
      id: 1,
      image: image0,
      name: "Lucent Facial Concentrate",
      desc: "A Vitamin C-rich layering serum",
    },
    {
      id: 2,
      image: image1,
      name: "B Triple C Facial Balancing Gel",
      desc: "Embracing, vitamin-rich hydration",
    },
    {
      id: 354,
      image: image2,
      name: "Exalted Eye Serum ",
      desc: "Lightweight, vitamin-rich serum ",
    },
    {
      id: 4,
      image: image3,
      name: "Sublime Replenishing Night Masque",
      desc: "Richly nourishing hydration for overnight use",
    },
    {
      id: 5,
      image: image4,
      name: "Damascan Rose Facial Treatment",
      desc: "A blend of vitamin-rich botanical extracts",
    },
  ];

  return (
    <ContentAndCarousel
      key={details["image"]}
      images={images}
      tag={details["tag"]}
      btnText={details["btnText"]}
      btn2
      color={details["color"]}
      content={details["content"]}
      title={details["title"]}
    ></ContentAndCarousel>
  );
};

export default skinCare;
