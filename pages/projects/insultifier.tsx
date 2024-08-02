import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Insultifier() {
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
                            Insultifier
                        </h1>
                    </div>
                    <div className="flex grow flex-col justify-between">
                        <div className='flex flex-row md:flex-col w-full place-content-between'>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                                Clap back quickly
                            </p>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                               May 6th, 2024
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
                    Are you immature? or very sarcastic? Then insult.sanan.no is the perfect tool for you!
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                The insultifier is a tool i made to quickly clap back at my friends when they say 
                something stupid in the group chat, but it works great in a corporate environment....i think.
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                You write in a sentence such as 
                "noooo sanan, you cannot just drop the database because you were trying to free up space". 
                and it returns "nOoOo sAnAn, YoU CaNnOt jUsT DrOp tHe dAtAbAsE BeCaUsE YoU WeRe tRyInG To fReE Up sPaCe" 
                </p>
                
            </section>
        </section>
    );
}