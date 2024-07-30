import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Burger from "@/components/burger";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.2,
                type: "spring",
                stiffness: 100, // Increase stiffness to reduce springiness
                damping: 20, // Increase damping to reduce oscillation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <nav className='border-red-500 border-4 px-10'>
            <motion.div 
                initial={{ y: -100 }} 
                animate={{ y: 0 }} 
                transition={{ type: "spring", stiffness: 100, damping: 20 }} // Adjust transition properties
            >
                <section className='flex flex-row place-content-between px-3 py-4'>
                    <Link href={"/"}>
                        <h2 className='text-2xl font-semibold'>Sanan</h2>
                    </Link>
                    <button onClick={toggleMenu} className='btn w-10 h-10 bg-black z-50'>
                        <Burger />
                    </button>
                </section>
            </motion.div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className='absolute top-0 right-0 w-3/4 h-full bg-yellow-300'
                    >
                        <div className='flex flex-col space-y-10 p-10 mt-10 text-3xl'>
                            <motion.div variants={itemVariants}>
                                <Link href={"/projects"} className='hover:underline underline-offset-2'>
                                    Projects
                                </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Link href={"#contact"} className='hover:underline underline-offset-2'>
                                    Contact
                                </Link>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </nav>
    );
}
