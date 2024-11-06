import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
    const form = useRef();

    const [statusMessage, setStatusMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(null);
    
    const sendEmail = (e) => {
        e.preventDefault();

        setStatusMessage("");
        setIsSuccess(null);

        emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_APP_PUBLIC_ID,
            })
            .then(
            () => {
                setStatusMessage("Your message has been sent successfully!");
                setIsSuccess(true);
            },
            () => {
                setStatusMessage("Failed to send your message. Please try again later.");
                setIsSuccess(false);
            },
            );
    };

    return (
        <div className='bg-white' id="form">
            <div className="flex max-w-screen-xl py-8 mx-auto justify-between items-center px-4 font-light gap-48">
                <form ref={form} onSubmit={sendEmail} className="mx-auto px-4 max-w-[1240px]">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        Get Your Project Started Today
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Ready to bring your vision to life? Contact me for a personalized quote and consultation.
                    </p>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" name="user_name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5  " placeholder="Jonson" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 " placeholder="Jonson@mail.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                        <textarea type="textarea" name="message" id="message" className="shadow-sm bg-gray-50 border text-gray-900 text-sm block w-full p-2.5 " placeholder="I want a website..." required />
                    </div>
                    <button type="submit" className="form-button cursor-pointer hover:bg-black">Submit</button>
                
                    {statusMessage && (
                        <div className="fixed top-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-black bg-white rounded-lg shadow" role="alert">
                            <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white ${isSuccess ? 'bg-green-500' : 'bg-red-500'} rounded-lg`}>
                            {isSuccess ? (
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                                </svg>
                            )}
                            </div>
                            <div className="ms-3 text-sm font-normal text-black">{statusMessage}</div>
                            <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-white text-black hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            aria-label="Close"
                            onClick={() => setStatusMessage("")}>
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            </button>
                        </div>
                    )}
                </form>

                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='h-3/4' src="src/images/ocean.jpeg" alt="portfolio_image" />
                </div>  
            </div>
        </div>
    )
}

export default Form