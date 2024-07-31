import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome } from '@fortawesome/free-solid-svg-icons';

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
                type: "tween",
            },
        },
        exit: {
            opacity: 0,
            x: 100,
            transition: {
                type: "tween",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <nav className='px-5 bg-black'>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 17 }} // Adjust transition properties
                className='hidden md:flex flex-row items-center place-content-between py-2 mx-auto w-3/4'
            >
                {/* home btn */}
                <section className=''>
                    <Link href={"/"}>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                            <h2 className='font-bold text-3xl'>SM</h2>
                        </motion.button>
                    </Link>
                </section>
                {/* nav menu */}
                <section className='z-50 flex flex-row w-3/4 place-content-evenly'>
                    <Link href={"/projects"}>
                        <motion.button
                            className='hover:underline underline-offset-2'
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                            Projects
                        </motion.button>
                    </Link>
                    <Link href={"#contact"}>
                        <motion.button
                            className='hover:underline underline-offset-2'
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                            Resume
                        </motion.button>
                    </Link>
                    <Link href={"#contact"}>
                        <motion.button
                            className='hover:underline underline-offset-2'
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                            Github
                        </motion.button>
                    </Link>
                    <Link href={"#contact"}>
                        <motion.button
                            className='hover:underline underline-offset-2'
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                            Contact
                        </motion.button>
                    </Link>
                </section>
            </motion.div>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 17 }} // Adjust transition properties
                className='flex flex-row items-center place-content-between py-2 md:hidden'
            >
                {/* home btn */}
                <section className=''>
                    <Link href={"/"}>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                        <FontAwesomeIcon icon={faHome} size='2x' className='' />
                        </motion.button>
                    </Link>
                </section>
                {/* nav menu mobile */}
                <section className='z-50'>
                    {/* if menu is open (true) render the X icon */}
                    {menuOpen ?
                        <AnimatePresence initial={false} mode='wait'>
                            <motion.button 
                                key={"close"}
                                exit={{ opacity: 0, }}
                                transition={{ duration: 0.3 }}
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 1.2, transition: { duration: 0.2 }}
                                }
                                onClick={toggleMenu} 
                                className='btn w-10 h-10 z-50'>
                                <FontAwesomeIcon icon={faTimes} size='2x' />
                            </motion.button>
                        </AnimatePresence>
                        :
                        /* if menu is not open, render the 3 bars icon */
                        <AnimatePresence initial={false} mode='wait'>
                            <motion.button
                                key={"open"} 
                                exit={{ opacity: 0, }}
                                transition={{ duration: 0.3 }}

                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.1 },
                                }}
                                whileTap={{ 
                                    scale: 1.2,
                                    transition: { duration: 0.1 },
                                }}
                                onClick={toggleMenu} 
                                className='btn w-10 h-10 z-50'>
                                <FontAwesomeIcon icon={faBars} size='2x' />
                            </motion.button>
                        </AnimatePresence>
                    }

                </section>
            </motion.div>
            <AnimatePresence>
                {menuOpen && (
                    <section>
                        <div onClick={toggleMenu} className='fixed z-30 top-0 left-0 w-1/4 h-full'></div>
                        <motion.section
                            key={"menu"}
                            initial='hidden'
                            animate='visible'
                            exit={{ display:"hidden", opacity: 0, x: 100 }}
                            variants={menuVariants}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className='rounded-l-3xl fixed z-30 top-0 right-0 w-3/4 h-full bg-black border border-white'
                        >
                            <section className='flex flex-col space-y-10 p-10 mt-10 text-3xl'>
                                <motion.div variants={itemVariants}>
                                    <Link onClick={toggleMenu} href={"/projects"} className='hover:underline underline-offset-2'>
                                        Projects
                                    </Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link onClick={toggleMenu} href={"#contact"} className='hover:underline underline-offset-2'>
                                        Resume
                                    </Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link onClick={toggleMenu} href={"#contact"} className='hover:underline underline-offset-2'>
                                        Github
                                    </Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link onClick={toggleMenu} href={"#contact"} className='hover:underline underline-offset-2'>
                                        Contact
                                    </Link>
                                </motion.div>
                            </section>
                        </motion.section>
                    </section>
                )}
            </AnimatePresence>
        </nav>
    );
}
