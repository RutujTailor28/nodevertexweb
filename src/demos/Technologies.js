import React from "react";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import ReactNativeImage from '../assets/images/react-native.png'
import Angular from '../assets/images/anguler.png'
import Veu from '../assets/images/veu.jpeg'
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
                    quote: "React and React Native"
                },{
                    imageSrc: Angular,
                    quote: "All Angular versions"
                },{
                    imageSrc: Veu,
                    quote: "Veu"
                }
            ]}
            textOnLeft={false}
        />
    </div>)
}
export default Technologies;
