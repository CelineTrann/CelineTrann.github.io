import React from "react";

import NavBar from '../components/NavBar'

export default function Contact () {
    return (
        <div className="container flex flex-col items-center">
            <NavBar></NavBar>
            <main className="w-11/12 md:w-3/5">
                <section className="container flex flex-col items-center space-y-4 my-4">
                    <div className="w-10/12 md:w-full">
                        <h1 className="text-2xl md:self-start uppercase">Contact</h1>
                        <form action="POST" className="space-y-4 my-4">
                            <div>
                                <label for="email" class="block mb-2 text-gray-900">Your email:</label>
                                <input type="email" id="email" class="block w-full rounded-lg  p-3 shadow-sm border border-gray-300" placeholder="email@gmail.com" required />
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-gray-900">Subject:</label>
                                <input type="text" id="subject" class="block w-full rounded-lg p-3 shadow-sm border border-gray-300" placeholder="Subject" required />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-gray-900">Your message:</label>
                                <textarea id="message" rows="6" class="block w-full rounded-lg p-3 shadow-sm border border-gray-300" placeholder="Leave a message..."></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-center text-white rounded-lg sm:w-fit bg-sky-500">Send message</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}