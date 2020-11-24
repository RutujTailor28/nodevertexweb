import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import SEO from '../../assets/images/top-view-cloud-with-word-seo.jpg'
import Advertising from '../../assets/images/advertising.jpg'
import Social from '../../assets/images/social.jpg'
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Blog",
  heading = <>We Love <span tw="text-primary-500">Writing.</span></>,
  description = "Some amazing blog posts that are written by even more amazing people.",

}) => {
  const blogPosts = [
    {
      imageSrc: SEO,
      author: "Adam Wathan",
      category: "SEO",
      title: "Optimizing your website for your main keyword",
      description: "SEO refers to the process of making a website more visible on a search engine’s results page.According to Andy Betts -" +
          "SEO has a real opportunity to redefine its role as a pivot point in the modern-day marketing stack." +
          " There is a very real opportunity for search marketers to align and integrate themselves across content, digital, and marketing communication channels.",
      url: "#"
    },
    {
      imageSrc: Advertising,
      author: "Owais Khan",
      category: "Advertising",
      title: "Creating The perfect advertisement campaign",
      description: "Advertising is the engine of growth of media world. It can be defined as a paid version of\n" +
          "information through a variety of mass media. According the ‘concise oxford dictionary’ the verb, ‘to advertise’ means: to make generally or publicly known.",
      url: "#"
    },
    {
      imageSrc: Social,
      author: "Steve Schoger",
      category: "Social Media",
      title: "Efficient management of your social media assets",
      description: "The use of social media platforms is used to connect with audience to build  brand, increase sales, and drive website traffic. This includes publishing attractive content on social media profiles, listening to and engagingwith followers, analyzing results, and running social media advertisements.",
      url: "#"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    {/*<Meta>*/}
                    {/*  <UserIcon />*/}
                    {/*  <div>{post.author}</div>*/}
                    {/*</Meta>*/}
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read Post</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
