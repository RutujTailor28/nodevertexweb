import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
// import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import Technologies from "./Technologies";
export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    {/*<Portfolio />*/}
    <Technologies/>
    {/*<FAQ*/}
    {/*  imageSrc={customerSupportIllustrationSrc}*/}
    {/*  imageContain={true}*/}
    {/*  imageShadow={false}*/}
    {/*  subheading="FAQs"*/}
    {/*  heading={*/}
    {/*    <>*/}
    {/*      Do you have <span tw="text-primary-500">Questions ?</span>*/}
    {/*    </>*/}
    {/*  }*/}
    {/*/>*/}
    <Blog />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
