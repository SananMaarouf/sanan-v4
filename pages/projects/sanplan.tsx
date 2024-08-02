import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Sanplan() {
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
                            SanPlan
                        </h1>
                    </div>
                    <div className="flex grow flex-col justify-between">
                        <div className='flex flex-row md:flex-col w-full place-content-between'>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                                Simple todo app that that saves locally to your phone and not in the cloud
                            </p>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                               March 5th, 2024
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
                This is my todo app made with React Native, Expo Go and Expo Router.
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                It is my starting point for creating universal mobile apps using JSX, 
                a syntax extension for JavaScript that allows developers to write 
                HTML-like code inside a JavaScript file.
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                In the beginning, my goal with this app is to create a 
                functional and nice looking todo app that runs on Android/iOS. 
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                If you are interested in the code, you can find it on my GitHub page.
            </section>
            <motion.section>

            </motion.section>
        </section>
    );
}