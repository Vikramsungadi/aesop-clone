import React from "react";
import Fragrances from "../assets/Fragrances.avif";
import Content from "../components/content";
import ContentAndstaticImage from "../components/content-staticimage";
import Wrapper from "../components/wrapper";

const contentAndImage = () => {
  let details = {
    title: "Interior fragrances to lift the mood",
    content: `Ideal for home or office spaces in need of refreshment, our Home range comprises a number of fragrant preparations, from incense to room sprays.`,
    btnText: "Browse Scented Home",
    color: "[#333]",
  };
  return (
    <section>
      {/* <Wrapper className="relative grid h-auto grid-cols-[1fr_auto] justify-between gap-[4rem] !px-0">
        <div className="image-wrapper h-[90%]">
          <img src={Fragrances} className=" h-full  object-cover" alt="" />
        </div>

        <Content
          title={details["title"]}
          content={details["content"]}
          btnText={details["btnText"]}
          color={details["color"]}
          btn
        ></Content>
      </Wrapper> */}
      <ContentAndstaticImage
        image={"src/assets/Fragrances.avif"}
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
