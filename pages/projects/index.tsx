import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
    return (
        <motion.div  initial={{ y: -100 }} animate={{ y: 0 }}>
            <div className='flex flex-col mx-2 text-center'>
                <h1 className='text-4xl font-semibold'>Projects</h1>
            </div>
        </motion.div>
    );
}