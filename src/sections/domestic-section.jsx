import React from "react";
import Content from "../components/content";
import Img1 from "../assets/img1.webp";

import ContentAndCarousel from "../components/content-carousel";

const Domestic = () => {
  let details = {
    tag: "For the home",
    title: "Domestic pleasures",
    content:
      "Our range of aromatic formulations for the home are practical and pleasing in equal measure",
    btnText: "See all Home",
    color: "[#333]",
  };

  let images = [
    {
      id: 1,
      image:
        "src/assets/Domestic/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.webp",
      name: "Murasaki Aromatique Incense",
      desc: "For those who favour aromas of warm spice",
    },
    {
      id: 2,
      image:
        "src/assets/Domestic/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.webp",
      name: "Kagerou Aromatique Incense",
      desc: "For those particularly partial to Vetiver",
    },
    {
      id: 3,
      image:
        "src/assets/Domestic/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.webp",
      name: "Sarashina Aromatique Incense",
      desc: "For those particularly partial to Sandalwood",
    },
    {
      id: 4,
      image:
        "src/assets/Domestic/Aesop_Home_Cythera_Aromatique_Room_Spray_100mL_Web_Large_835x962px.webp",
      name: "Bronze Incense Holder",
      desc: "Suited to any interior",
    },
    {
      id: 5,
      image:
        "src/assets/Domestic/Aesop_Home_Kagerou_Aromatique_Incense_Web_Large_1584x1384px.webp",
      name: "Aganice Aromatique Candle",
      desc: "Cardamom, Mimosa, Tobacco",
    },
    {
      id: 6,
      image:
        "src/assets/Domestic/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.webp",
      name: "Callippus Aromatique Candle",
      desc: "A marriage of deep greens and earthy spices",
    },
    {
      id: 7,
      image:
        "src/assets/Domestic/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.webp",
      name: "Ptolemy Aromatique Candle",
      desc: "A sensuous blend of leather, smoke and wood",
    },
    {
      id: 8,
      image: "src/assets/Domestic/Aesop_Home_Room_Spray_Olous_100mL_large.webp",
      name: "Istros Aromatique Room Spray",
      desc: "Imbue spaces with evocative scent",
    },
    {
      id: 9,
      image:
        "src/assets/Domestic/Aesop_Home_Sarashina_Aromatique_Incense_Web_Large_1584x1384px.webp",
      name: "Cythera Aromatique Room Spray",
      desc: "Veil of Geranium, warmth of Myrrh",
    },
    {
      id: 10,
      image:
        "src/assets/Domestic/Aesop-Home-Room-Spray-Istros-100mL-large.webp",
      name: "Olous Aromatique Room Spray",
      desc: "Refreshes the home",
    },
    {
      id: 11,
      image:
        "src/assets/Domestic/Aesop-Other-Aesop-Book-1-Large-835x962px.webp",
      name: "Aesop: the book",
      desc: "For design aficionados; curious readers; aesthetes",
    },
  ];
  return (
    <ContentAndCarousel
      tag={details["tag"]}
      btnText={details["btnText"]}
      key={details["id"]}
      btn2
      color={details["color"]}
      content={details["content"]}
      title={details["title"]}
      images={images}
    ></ContentAndCarousel>
  );
};

export default Domestic;
