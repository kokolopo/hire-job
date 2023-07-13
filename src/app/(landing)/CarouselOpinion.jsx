'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import OpinionCard from './OpinionCard';
import '@splidejs/react-splide/css';

const CarouselOpinion = () => {
    return (
        <Splide aria-label="My Favorite Images ">
            <SplideSlide className='flex p-3 justify-evenly'>
                <div className="flex items-center justify-center">
                    <OpinionCard avatar={"images/opinion1.png"} />
                </div>
                <div className="items-center justify-center hidden sm:block">
                    <OpinionCard avatar={"images/opinion2.png"} />
                </div>
                <div className="items-center justify-center hidden sm:block">
                    <OpinionCard avatar={"images/opinion3.png"} />
                </div>
            </SplideSlide>
            <SplideSlide className='flex p-3 justify-evenly'>
                <div className="flex items-center justify-center">
                    <OpinionCard avatar={"images/opinion3.png"} />
                </div>
                <div className="items-center justify-center hidden sm:block">
                    <OpinionCard avatar={"images/opinion1.png"} />
                </div>
                <div className="items-center justify-center hidden sm:block">
                    <OpinionCard avatar={"images/opinion2.png"} />
                </div>
            </SplideSlide>
            <SplideSlide className='flex p-3 justify-evenly'>
                <div className="flex items-center justify-center">
                    <OpinionCard avatar={"images/opinion2.png"} />
                </div>
                <div className="items-center justify-center hidden sm:block">
                    <OpinionCard avatar={"images/opinion3.png"} />
                </div>
                <div className="items-center justify-center hidden sm:block">
                    <OpinionCard avatar={"images/opinion1.png"} />
                </div>
            </SplideSlide>
        </Splide>
    )
}

export default CarouselOpinion