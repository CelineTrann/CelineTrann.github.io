import React from "react";
import { useRef } from "react";
import emailjs from 'emailjs-com';
import process from "process";

import NavBar from '../components/NavBar'

export default function Contact () {
    const form = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_w3tl89g', 'template_urx83qo', e.target, 'f_bGvJmev2jEccZdv')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });

        e.target.reset()
    };

    return (
        <div className="container flex flex-col items-center">
            <NavBar></NavBar>
            <main className="w-11/12 md:w-3/5">
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
            </main>
        </div>
    );
}