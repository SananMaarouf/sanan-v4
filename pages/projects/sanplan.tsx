import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
    {
        title: 'Screenshot of the app',
        image: '/images/projects/sanplan/index.png',
    },
    
];
export default function Sanplan() {
    return (
        <section className="px-5 md:px-0">
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
                md:flex-row
                lg:w-1/2
                "
            >
                <div className="xl:pl-12 relative my-auto w-full flex flex-1 basis-1/2 flex-col px-4 py-6 ">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        SanPlan
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                        Simple todo app create with Expo Go
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                        March 5th, 2024
                    </p>
                </div>
                <div className="flex max-h-96 md:justify-end md:w-2/5 lg:w-1/2">
                    <Image
                        src={images[0].image}
                        alt={images[0].title}
                        width={600}
                        height={800}
                        className="w-full "
                    />
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