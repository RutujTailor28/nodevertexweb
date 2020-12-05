import React from "react";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import ReactNativeImage from '../assets/images/react-native.jpg'
import Angular from '../assets/images/anguler.jpg'
import Veu from '../assets/images/veu.jpg'
import Node from '../assets/images/nodejs.jpg'
import TS from '../assets/images/ts.jpg'
import Git from '../assets/images/git.jpg'
import Aws from '../assets/images/aws.jpg'
import Doceker from '../assets/images/docker.jpg'
const Technologies = () => {
    return(<div>
        <Testimonial
            subheading="Technologies"
            heading={
                <>
                    Trending <span tw="text-primary-500">Technologies.</span>
                </>
            }
            description="We are working on some world leading Technologies, Framework and libraries "
            testimonials={[
                {
                    imageSrc: ReactNativeImage,
                    quote: "React and React Native are component based library which help to create interactive UI to develop " +
                        "Web application and Mobile application (Android and IOS)"
                },{
                    imageSrc: Angular,
                    quote: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript"
                },{
                    imageSrc: Veu,
                    quote: "Veu is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable"
                },
                {
                    imageSrc: Node,
                    quote: "Node.js is designed to build scalable network applications. Mostly, Node.js is used to implement back-end services"
                },
                {
                    imageSrc: TS,
                    quote: "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions"
                },
                {
                    imageSrc: Git,
                    quote: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency"
                },{
                    imageSrc: Aws,
                    quote: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services."
                },{
                    imageSrc: Doceker,
                    quote: "Docker enables developers to easily pack, ship, and run any application as a lightweight, portable, self-sufficient container, which can run virtually."
                },
            ]}
            textOnLeft={false}
        />
    </div>)
}
export default Technologies;
