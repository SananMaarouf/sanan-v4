import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
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
        <nav className='border-red-500 border-4 px-5'>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 17 }} // Adjust transition properties
                className='flex flex-row items-center place-content-between py-2'
            >
                {/* home btn */}
                <section className=''>
                    <Link href={"/"}>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                        <FontAwesomeIcon icon={faHome} size='2xl' className='' />
                        </motion.button>
                    </Link>
                </section>
                {/* nav menu mobile */}
                <section className='z-50'>
                    {/* if menu is open (true) render the X icon */}
                    {menuOpen ?
                        <AnimatePresence>
                            <motion.button 
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9 }
                                }
                                onClick={toggleMenu} 
                                className='btn w-10 h-10 z-50'>
                                <FontAwesomeIcon icon={faTimes} size='2xl' />
                            </motion.button>
                        </AnimatePresence>
                        :
                        /* if menu is not open, render the 3 bars icon */
                        <AnimatePresence>
                            <motion.button 
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.9}
                                }
                                onClick={toggleMenu} 
                                className='btn w-10 h-10 z-50'>
                                <FontAwesomeIcon icon={faBars} size='2xl' />
                            </motion.button>
                        </AnimatePresence>
                    }

                </section>
            </motion.div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.section
                        
                        variants={menuVariants}
                        className='absolute z-30 top-0 right-0 w-3/4 h-full bg-gray-900'
                    >
                        <div className='flex flex-col space-y-10 p-10 mt-10 text-3xl'>
                            <motion.div variants={itemVariants}>
                                <Link onClick={toggleMenu} href={"/projects"} className='hover:underline underline-offset-2'>
                                    Projects
                                </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Link onClick={toggleMenu} href={"#contact"} className='hover:underline underline-offset-2'>
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
