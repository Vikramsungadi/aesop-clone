import React, { useEffect, useRef, useState } from "react";
import Image from "../components/carousel-image";
import Wrapper from "../components/wrapper";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { motion } from "framer-motion";

const superlative = () => {
  let images = [
    {
      id: 1,
      image:
        "src/assets/superlatives/Aesop_Fragrance_Marrakech_Eau_de_Parfum_50mL_Web_Large_1000x977px.webp",
      name: "Rōzu Eau de Parfum",
      desc: "Both brazen and delicate",
    },
    {
      id: 2,
      image:
        "src/assets/superlatives/Aesop_Fragrance_Miraceti_Eau_de_Parfum_50mL_Web_Large_684x668px.webp",
      name: "Aesop & Rick Owens Travel Kit",
      desc: "Fragrant essentials for journeys near or far ",
    },
    {
      id: 3,
      image:
        "src/assets/superlatives/Aesop_Fragrance_Rozu_Eau_de_Parfum_50mL_Web_Large_1000x977px.webp",
      name: "Miraceti Eau de Parfum",
      desc: "Resinous, woody, spicy fragrance",
    },
    {
      id: 4,
      image:
        "src/assets/superlatives/Aesop_Kits_Rick_Owens_Web_Large_1584x962px.webp",
      name: "Marrakech Intense Eau de Parfum",
      desc: "Woody, opulent, floral fragrance",
    },
    {
      id: 5,
      image:
        "src/assets/superlatives/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px.png",
      name: "Geranium Leaf Body Cleanser",
      desc: "A gentle, invigorating gel cleanser",
    },
    {
      id: 6,
      image:
        "src/assets/superlatives/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.webp",
      name: "Sublime Replenishing Night Masque",
      desc: "Balances the appearance of skin",
    },
  ];

  let [curr, setCurr] = useState(0);
  let [width, setWidth] = useState(0);
  let imageref = useRef();
  let imagesCont = useRef();
  let [sizes, setSizes] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr == 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr == images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    setWidth(imagesCont.current.scrollWidth);

    imagesCont.current.scrollTo(sizes * curr, 0);
  }, [width, curr]);

  useEffect(() => {
    setSizes(imageref.current.size());
  }, [window]);

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Wrapper className="relative flex-col">
        <h2 className=" font-unna text-3xl max-md:mx-6">
          A superlative section
        </h2>
        <div
          ref={imagesCont}
          className="scroller relative mt-[3rem] flex h-full flex-shrink-0 overflow-x-scroll scroll-smooth max-md:mt-[5rem]"
        >
          {images.map((image) => (
            <Image
              key={image.id}
              ref={imageref}
              image={image.image}
              name={image.name}
              desc={image.desc}
            ></Image>
          ))}
        </div>
        <button onClick={prev} className="btn-left ">
          <BsChevronLeft />
        </button>
        <button onClick={next} className="btn-right  ">
          <BsChevronRight />
        </button>
      </Wrapper>
    </motion.section>
  );
};

export default superlative;
