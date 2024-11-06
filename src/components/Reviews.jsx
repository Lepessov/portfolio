import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const settings = {
        lazyLoad: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: true,
        swipeToSlide: true,
      };

    return (
        <section className="m-auto z-0" id='reviews'>
            <div className='py-20'>
                <Slider {...settings}>
                    {data.map((review, index) => (
                    <div key={index} className="gray-color lg:min-h-14 py-10 px-20 ">
                        <div className="flex justify-center pb-5">
                            <FaQuoteRight className="w-10 h-10 black-color " />
                        </div>
                        <div className="flex justify-center">
                            {[...Array(5)].map((_, starIndex) => (
                                <FaStar key={starIndex} className="lg:w-5 lg:h-5 text-yellow-400" />
                            ))}
                        </div>
                        <p className="black-color text-center p-4 text-2xl">
                            "{review.review}"
                        </p>
                        <footer className="justify-center flex items-center gap-3">
                            <img className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10" src={review.image} alt={review.name} loading="lazy" />
                            <div className='text-start'>
                                <p className="text-base text-white font-bold">{review.name}</p>
                                <p className="text-base black-color font-light">{review.position}</p>
                            </div>
                        </footer>
                    </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const data = [
    {
        name: "Ramiz Ahmedov",
        review: "The project was executed at a high level and fully met our expectations.",
        position: "Dean, SDU University",
        image: "src/images/Ramiz.png",
    },
    {
        name: "Daulet Lepessov",
        review: "The service exceeded my expectations and transformed my business.",
        position: "CEO, Tech Innovations",
        image: "src/images/Ramiz.png",
    },
]

export default Reviews;