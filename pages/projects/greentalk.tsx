import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Greentalk() {
    return (
        <section>
            {/* heading and image gallery */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                mx-auto
                my-5 
                flex 
                flex-col 
                border-white
                w-full
                overflow-hidden 
                rounded-2xl 
                border 
                border-transparent
                bg-transparent 
                md:w-3/5 
                md:py-4
                md:flex-row
                lg:w-1/2
                "
            >
                <div className="xl:pl-12 relative my-auto flex flex-1 basis-1/2 flex-col px-4 py-6 lg:py-12 ">
                    <div className='flex flex-row mx-auto md:mx-0 md:flex-col'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl">
                           Greentalk 
                        </h1>
                    </div>
                    <div className="flex grow flex-col justify-between">
                        <div className='flex flex-row md:flex-col w-full place-content-between'>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                                If you love our planet, you will love Greentalk
                            </p>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                               January 14, 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mx-auto max-w-72 bg-transparent md:max-w-lg lg:max-w-xl">
                </div>
            </motion.div>
            {/* content, story about the app */}
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                In our second year of university, we were tasked with creating a CRUD application for our semester assignment. 
                After some time debating what kind of site and what it should be about, we landed on a forum for environmentalists 
                since global warming, climate change, and pollution are becoming bigger problems, 
                we wanted to create a space where like minded people could communicate and start events to meet up.
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                My group that consisted of:
                </p>
                <ul>
                    <li>Me</li>
                    <li>Stian Flatset</li>
                    <li>Sigve Eilertsen</li>
                    <li>Erlend Hollund</li>
                    <li>Hanna Singueo</li>
                    <li>Mikkel Mohaugen</li>
                </ul>
            </section>
            
        </section>
    );
}