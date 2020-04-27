import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { SlideItem } from './item';
import { slide } from '../../common/images';

// TODO get from db
const slides = [
    { uid: 1, name: 'Apple iPad Pro', slug: '#', image: slide },
    { uid: 2, name: 'Apple iPhone 6S', slug: '#', image: slide },
    { uid: 3, name: 'Logitech K360', slug: '#', image: slide },
];

export const SlideShow = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={slides.length}
            isPlaying
            infinite
            lockOnWindowScroll
        >
            <Slider>
                {slides.map((slide) => (
                    <Slide key={slide.uid} index={slide.uid}>
                        <SlideItem name={slide.name} slug={slide.slug} image={slide.image} />
                    </Slide>
                ))}
            </Slider>
            <DotGroup dotNumbers showAsSelectedForCurrentSlideOnly />

            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
};
