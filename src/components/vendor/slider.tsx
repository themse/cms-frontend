import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { vendors } from '../../common/images';
import { VendorItem } from './item';

type VendorSliderProps = {};

export const VendorSlider: React.FC<VendorSliderProps> = () => {
    return (
        <CarouselProvider
            visibleSlides={6}
            totalSlides={Object.keys(vendors).length}
            step={3}
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            infinite
            isPlaying
            lockOnWindowScroll
        >
            <Slider>
                {Object.entries(vendors).map(([key, value], idx) => (
                    <Slide key={key} index={idx}>
                        <VendorItem name={key} image={value} slug="#" />
                    </Slide>
                ))}
            </Slider>

            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
};
