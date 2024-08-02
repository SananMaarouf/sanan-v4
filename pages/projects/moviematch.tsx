import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MovieMatch() {
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
                            MovieMatch
                        </h1>
                    </div>
                    <div className="flex grow flex-col justify-between">
                        <div className='flex flex-row md:flex-col w-full place-content-between'>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                            Do you and your partner constantly argue about what movies to watch? 
                            Movie Match could be the solution to your troubles 
                            </p>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                              January 13, 2024 
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
                In our second year of university, we were tasked with creating a practical Android app 
                for our semester assignment. 
                My group spent some time talking about our trials and tribulations and how an app could solve them. 
                Turns out that therapy is the solution to most of them, but what could be solved was the issue of 
                finding a movie that everybody likes on movie nights and thus the idea was born.
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                    The group consisted of:
                </p>
                <ul>
                    <li>Me</li>
                    <li>Stian Flatset</li>
                    <li>Sigve Eilertsen</li>
                    <li>Erlend Hollund</li>
                </ul>
            </section>
            
        </section>
    );
}