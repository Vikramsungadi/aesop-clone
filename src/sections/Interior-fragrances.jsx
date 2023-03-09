import React from "react";
import ContentAndstaticImage from "../components/content-staticimage";

import image0 from "../assets/Fragrances.avif";
const contentAndImage = () => {
  let details = {
    title: "Interior fragrances to lift the mood",
    content: `Ideal for home or office spaces in need of refreshment, our Home range comprises a number of fragrant preparations, from incense to room sprays.`,
    btnText: "Browse Scented Home",
    color: "[#333]",
  };
  return (
    <section>
      <ContentAndstaticImage
        image={image0}
        order="12"
        title={details["title"]}
        content={details["content"]}
        btnText={details["btnText"]}
        color={details["color"]}
      ></ContentAndstaticImage>
    </section>
  );
};

export default contentAndImage;
