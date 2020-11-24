import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import WebApp from "../../images/ProfessionalServices/001-web-site.svg";
import MobileApp from "../../images/ProfessionalServices/003-smartphone.svg";
import SEO from "../../images/ProfessionalServices/004-startup.svg";
import DigitalMarketing from "../../images/ProfessionalServices/005-digital-marketing.svg";
import UI from "../../images/ProfessionalServices/006-vector.svg";
import CMS from "../../images/ProfessionalServices/007-smartphone-1.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: WebApp,
      title: "Web Application Development",
      description: "It is basically the tasks related with developing websites and can be  hosted via intranet or internet. It is designed for a wide variety of uses and can be used by anyone.It can be operated through various platforms such as a desktop, laptop, or mobile."
    },
    {
      imageSrc: MobileApp,
      title: "Mobile App Development",
      description: "Mobile app development is the creation of software intended to run on mobile devices."
    },
    {
      imageSrc: SEO,
      title: "Search Engine Optimization",
      description: "It means the process of improving your site to increase its visibility for relevant searches . It is a fundamental part of digital marketing."
    },
    {
      imageSrc: DigitalMarketing,
      title: "Digital Marketing",
      description: "It  is a form of marketing the products and services that includes electronic devices.It  aims to put a marketing message directly in front of  people in the online space."
    },
    {
      imageSrc: UI,
      title: "UI/UX Design",
      description: "It brings a design-centric approach to user interface and user experience design, and offers practical,visual communication perspective, rather than focusing on marketing or programming alone."
    },
    {
      imageSrc: CMS,
      title: "CMS & E-COMMERCE Development",
      description: "We have expertise in developing an affordable CMS and E-commerce website for you which will definitely help you in developing a business and provide an outstanding experience to the users."
    }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
