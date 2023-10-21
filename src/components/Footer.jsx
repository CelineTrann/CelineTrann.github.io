import React from "react";

export default function Footer() {
    return (
        <footer className="container flex justify-center items-center py-6">
            <div className="w-11/12 md:w-3/5">
                <p className="text-center md:text-left">This website was made using <a href="https://react.dev/" className="text-blue-600">React</a> and <a href="https://tailwindcss.com/" className="text-blue-600">Tailwind CSS</a>.</p>
            </div>
        </footer>
    );
}