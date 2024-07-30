import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Landing() {
    return (
        <motion.section initial={{y:+100, opacity:0}} animate={{opacity:100,y:0}} 
        className="flex flex-row place-items-center border-4 border-blue-700 mx-11">
            <section className="flex flex-col border-4 border-green-700">
                <h1 className="text-4xl font-semibold underline">Sanan Maarouf</h1>
                <p className="text-lg font-semibold">Fullstack Developer</p>
                <p className="text-lg font-semibold">
                Based in Oslo, Norway. <br></br> 
                I've been interested in computers for as long as I can remember. 
                I really enjoy learning new technologies 
                and use them to create practical solutions.
                </p>
            </section>
            <section className="flex flex-col mx-auto border-4 border-red-700">
                <Image 
                    src="/sanan.png" alt="Portrait of Sanan" 
                    width={200} height={200}
                />
            </section>                
      </motion.section>
    );
}