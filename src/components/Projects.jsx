import { FaKey, FaMailBulk, FaShoppingBasket } from 'react-icons/fa';
import React from 'react';

const Projects = () => {
    return (
        <section className='bg-white py-16' id="services">
            <div class="flex-row justify-center items-center px-4 gap-8 max-w-screen-xl py-4 mx-auto ">
                <div className="text-start mb-20">
                    <p className="text-3xl font-bold">WHAT SERVICES I PROVIDE ?</p>
                </div>
                <div className="md:flex gap-10 mt-10">
                    <div className="border-left-red">
                        <FaKey className="w-12 h-12 mb-5"/>
                        <p className="text-3xl font-bold p-1 mb-5">Turnkey Websites for Agencies</p>
                        <p className="p-1">I create comprehensive websites for agencies, addressing all client needs. This includes both front-end and back-end development to ensure functionality and an appealing design.</p>
                    </div>
                    <div className="border-left-red">
                        <FaMailBulk className="w-12 h-12 mb-5" />
                        <p className="text-3xl font-bold p-1 mb-5">Subscription-Based Websites</p>
                        <p className="p-1">I develop subscription-based websites where clients can hire me to create their site with a lower initial payment. They pay a recurring subscription fee for ongoing support, maintenance, and updates.</p>
                    </div>
                    <div className="border-left-red">
                        <FaShoppingBasket className="w-12 h-12 mb-5"/>
                        <p className="text-start text-3xl font-bold p-1 mb-5">Product-Based E-commerce Solutions</p>
                        <p className="text-start p-1">I build online stores where clients pay a fixed price for the development. In addition, I can earn a percentage of sales, creating a mutually beneficial partnership.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects