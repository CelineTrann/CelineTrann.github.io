import React from "react";

export default function Footer() {
    return (
        <footer className="container flex justify-center items-center py-6">
            <div className="w-11/12 md:w-3/5">
                <p className="text-center md:text-left">This website was made using 
                    <a href="https://react.dev/" className="text-accent hover:underline"> React</a>,
                    <a href="https://tailwindcss.com/" className="text-accent hover:underline"> Tailwind CSS</a>, and
                    <a href="https://www.realtimecolors.com" className="text-accent hover:underline"> Real Time Colors</a>.</p>
            </div>
        </footer>
    );
}