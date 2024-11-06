import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
    const [typewriter] = useTypewriter({
        words: ['DEVELOPER'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 150
    })
    
    return (
        <section className="black-color black">
            <div className=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="text-center lg:text-start lg:mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        WEB <span className="red-color">{typewriter}</span>
                    </h1>
                    <div>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
                        Hi, I’m Daulet, a web developer passionate about creating <br />
                        engaging and user-friendly web experiences.
                    </p>
                    </div>
                    <a href="#form"><button className='gradient-button cursor-pointer'>CONTACT</button></a>
                </div>

                <div className=" hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center " >
                    <img className="rounded-full w-full max-w-[300px] lg:max-w-[500px]" src="/images/forward.jpeg" alt="portfolio_image" />
                </div>
            </div>
        </section>
    )
}

export default Hero