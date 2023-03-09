import Nav from "./nav";

import React from "react";
import Hero from "./hero";
import Domestic from "./domestic-section";
import FragranceSection from "./Interior-fragrances";
import Superlative from "./superlative";
import Vitamins from "./discover-vitamins";
import SkinCare from "./skin-care";
import TokenOfAppreciation from "./token-of-appreciation";
import Locator from "./store-locator";
import Footer from "./footer";
const index = () => {
  return (
    <>
      <Hero></Hero>
      <Domestic></Domestic>
      <FragranceSection></FragranceSection>
      <Superlative></Superlative>
      <Vitamins></Vitamins>
      <SkinCare></SkinCare>
      <TokenOfAppreciation></TokenOfAppreciation>
      <Locator></Locator>
      <Footer></Footer>
    </>
  );
};

export default index;
