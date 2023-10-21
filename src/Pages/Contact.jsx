import React, { useState } from "react";
import { useRef } from "react";
import emailjs from 'emailjs-com';

import NavBar from '../components/NavBar'

export default function Contact() {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w3tl89g', 'template_urx83qo', e.target, 'f_bGvJmev2jEccZdv')
            .then((result) => {
                console.log(result.text);
                setIsSuccessful(true);
                setShowModal(true)
            }, (error) => {
                console.log(error.text);
                setIsSuccessful(false);
                setShowModal(true)
            });

        e.target.reset()
    };

    return (
        <>
            {showModal &&
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-white  focus:outline-none">
                            <div className="flex flex-col gap-4 p-5 border-b border-solid border-gray-300 rounded-t ">
                                <h3>{isSuccessful ? "Email sent" : "An error has occurred"}</h3>
                                <button className="bg-sky-500 hover:bg-sky-700 rounded-md text-white p-1" onClick={() => setShowModal(false)}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <section className="container flex flex-col items-center space-y-4 my-4">
                <div className="w-10/12 md:w-full">
                    <h1 className="text-2xl md:self-start uppercase">Contact</h1>
                    <form ref={form} onSubmit={handleOnSubmit} className="space-y-4 my-4">
                        <div>
                            <label htmlFor="user_name" className="block mb-2 text-gray-900">Your name:</label>
                            <input type="text" id="user_name" name="user_name" className="block w-full rounded-lg  p-3 shadow-sm border border-gray-300" placeholder="John Doe" required />
                        </div>
                        <div>
                            <label htmlFor="user_email" className="block mb-2 text-gray-900">Your email:</label>
                            <input type="email" id="user_email" name="user_email" className="block w-full rounded-lg  p-3 shadow-sm border border-gray-300" placeholder="email@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-gray-900">Subject:</label>
                            <input type="text" id="subject" name="subject" className="block w-full rounded-lg p-3 shadow-sm border border-gray-300" placeholder="Subject" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-gray-900">Your message:</label>
                            <textarea id="message" name="message" rows="6" className="block w-full rounded-lg p-3 shadow-sm border border-gray-300" placeholder="Leave a message..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-center text-white rounded-lg sm:w-fit bg-sky-500 hover:bg-sky-700">Send message</button>
                    </form>
                </div>
            </section>
        </>
    );
}