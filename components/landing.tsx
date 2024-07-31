import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import portrait from '../public/sanan.png';
export default function Landing() {
    return (
        /* parent section */
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="
            mx-auto
            mt-4 
            flex 
            flex-col 
            overflow-hidden 
            rounded-2xl 
            border 
            border-white
            bg-transparent 
            bg-opacity-5
            bg-clip-padding 
            backdrop-blur-sm 
            backdrop-filter 
            md:my-5
            md:w-1/2 
            md:flex-row
            "
        >
            <div className="xl:pl-12 relative my-auto flex flex-1 basis-1/2 flex-col px-4 py-6 lg:py-12 ">
                <div className='flex flex-row mx-auto md:mx-0 md:flex-col'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl">
                    Hi
                    <motion.div
                        className="w-fit inline-block" animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
                        👋🏽
                    </motion.div>
                </h1>
                <h2 className="text-3xl ml-2 md:ml-0 md:mt-4 md:text-4xl lg:text-5xl">
                    I'm Sanan
                </h2>
                            </div>
                <div className="flex grow flex-col justify-between">
                    <div className='flex flex-row md:flex-col w-full place-content-between'>
                        <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                            Full Stack Developer
                        </p>
                        <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                            📍 Oslo, Norway
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-transparent md:max-w-lg lg:max-w-xl">
                <Image
                    src={portrait}
                    width={300}
                    height={400}
                    alt="Portrait of Sanan"
                />
            </div>
        </motion.div>
    );
}