import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Landing() {
    return (
        <motion.section 
            initial={{y: 100, opacity: 0}} 
            animate={{opacity: 100, y: 0}} 
            transition={{duration: 0.4}}
            className="flex flex-row place-items-center border-4 border-blue-700 max-w-screen-lg mx-auto">
            <section className="flex flex-col border-4 border-green-700 mx-auto text-center">
                <h1 className="text-4xl font-semibold underline">Sanan Maarouf</h1>
                <Image 
                    src="/sanan.png" alt="Portrait of Sanan" 
                    width={200} height={200} className='mx-auto'
                />
                <section className='flex flex-row mx-auto place-content-evenly md:place-content-around w-full'>
                    <p className="text-md md:text-lg font-semibold">Fullstack Developer</p>
                    <p className="text-md md:text-lg font-semibold">Based in Oslo, Norway. </p>                    
                </section>
                <p> 
                I've been interested in computers for as long as I can remember. 
                I really enjoy learning new technologies 
                and use them to create practical solutions.
                </p>
            </section>
      </motion.section>
    );
}