import React from "react";
import ContentAndstaticImage from "../components/content-staticimage";
import chemicals from "../assets/chemicals.webp";

const discover = () => {
  let details = {
    tag: "The Athenaeum",
    title: "Aesop on Vitamins",
    content: `Among those we often return to in our formulations are a range of ingredients known to benefit the skin—vitamins C, B3, E and Provitamin B5. `,
    btnText: "Discover Vitamins",
    color: "[#333]",
  };
  return (
    <>
      <ContentAndstaticImage
        image={chemicals}
        tag={details["tag"]}
        order="21"
        title={details["title"]}
        content={details["content"]}
        btnText={details["btnText"]}
        color={details["color"]}
      ></ContentAndstaticImage>
    </>
  );
};

export default discover;
