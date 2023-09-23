import React from "react";

export default function NavBar () {
    return (
        <div className="container bg-slate-400">
            <div className="flex flex-row justify-end items-center gap-8 px-16 py-4 h-16">
                <a href="" className="py-4 px-4 hover:underline">HOME</a>
                <a href="" className="py-4 px-4 hover:underline">PROJECTS</a>
                <a href="" className="py-4 px-4 hover:underline">CONTACT</a>
            </div>
        </div>
    );
}