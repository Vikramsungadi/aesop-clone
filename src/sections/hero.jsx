import { motion } from "framer-motion";
import React from "react";
import logo from "../assets/logo.svg";

import Content from "../components/content";
import Nav from "./nav";
const hero = () => {
  let tag = "Home fragrance",
    title = "Introducing Aromatique Incense",
    content = `Discover a trio of transportive aromas for wandering minds—Murasaki,
    Kagerou and Sarashina Aromatique Incense—and the Bronze Incense
    Holder that elevates their unassuming form.`,
    btnText = "Explore the collection",
    color = "primary";
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Nav className="max-sm:hidden"></Nav>

      <div className=" h-[40rem] w-full  bg-hero-pattern bg-cover bg-center px-11 pt-[6rem] max-sm:relative  max-sm:h-[35rem] max-sm:items-end max-sm:bg-bg-small max-sm:bg-cover max-sm:px-0 ">
        <Nav className="absolute top-0 w-full sm:hidden"></Nav>
        <div className="content-wrapper flex items-start justify-between sm:max-w-xl">
          <img src={logo} className="h-fit w-[8rem] max-sm:hidden" alt="logo" />
          <Content
            className="max-sm:hidden max-sm:px-0"
            tag={tag}
            btnText={btnText}
            btn
            content={content}
            title={title}
            color={color}
            font="bold"
          ></Content>
        </div>
      </div>
      <Content
        className="max-sm:bg-dark2 max-sm:py-12 sm:hidden "
        tag={tag}
        btnText={btnText}
        btn
        content={content}
        title={title}
        color={color}
        font="bold"
      ></Content>
    </motion.section>
  );
};

export default hero;
