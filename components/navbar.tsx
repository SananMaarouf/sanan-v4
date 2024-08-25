import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faEarthEurope, faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


export default function Navbar() {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        router.push(router.pathname, router.asPath, { locale: lang });
        setDropdownOpen(false);
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
        <nav className='px-5 '>
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
                            {t('nav.projects')}
                        </motion.button>
                    </Link>
                    <Link href={"/resume"}>
                        <motion.button
                            className='hover:underline underline-offset-2'
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                            {t('nav.resume')}
                        </motion.button>
                    </Link>
                    <Link href={"https://github.com/SananMaarouf"} target='_blank' rel="noopener noreferrer">
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
                            {t('nav.contact')}
                        </motion.button>
                    </Link>
                    {/* Language Switcher */}
                    <motion.div variants={itemVariants} className='content-center w-14 rounded-md'>
                        <div className='flex flex-row w-full py-1 border-2 border-transparent hover:border-2 hover:border-white rounded-md' onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faEarthEurope} className='ml-2' />
                            <FontAwesomeIcon icon={faCaretDown}
                                className={`mx-2 my-auto transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {dropdownOpen && (
                            <div className='mt-2 w-32 rounded-md border-2 absolute bg-background z-50 border-red-500'>
                                <button onClick={() => switchLanguage('nb')} className='text-left w-full py-2 px-2 flex justify-between items-center hover:bg-white hover:text-black'>
                                    Norsk 🇳🇴
                                    {i18n.language === 'nb' && <FontAwesomeIcon icon={faCheck} size='xs' />}
                                </button>
                                <button onClick={() => switchLanguage('en')} className='text-left w-full py-2 px-2 flex justify-between items-center hover:bg-white hover:text-black'>
                                    English 🇬🇧
                                    {i18n.language === 'en' && <FontAwesomeIcon icon={faCheck} size='xs' />}
                                </button>
                            </div>
                        )}
                    </motion.div>
                </section>
            </motion.div>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 17 }} // Adjust transition properties
                className='flex flex-row items-center place-content-between py-2 md:hidden'
            >
                {/* home btn */}
                {router.pathname !== '/' ? (
                    <section>
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
                ) : (
                    <section>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                            <h2 className='font-bold text-3xl'>SM</h2>
                        </motion.button>
                    </section>
                )}
                {/* nav menu mobile */}
                <section className='z-50 ml-auto'>
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
                                whileTap={{ scale: 1.2, transition: { duration: 0.2 } }
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
                            exit={{ display: "hidden", opacity: 0, x: 100 }}
                            variants={menuVariants}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className='rounded-l-3xl fixed z-30 top-0 right-0 w-3/4 h-full bg-background border border-white'
                        >
                            <section className='flex flex-col space-y-10 p-10 mt-10 text-3xl'>
                                <motion.div variants={itemVariants}>
                                    <Link onClick={toggleMenu} href={"/projects"} className='hover:underline underline-offset-2'>
                                        {t('nav.projects')}
                                    </Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link onClick={toggleMenu} href={"/resume"} className='hover:underline underline-offset-2'>
                                        {t('nav.resume')}
                                    </Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link onClick={toggleMenu} href={"https://github.com/SananMaarouf"} className='hover:underline underline-offset-2'>
                                        Github
                                    </Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link onClick={toggleMenu} href={"#contact"} className='hover:underline underline-offset-2'>
                                        {t('nav.contact')}
                                    </Link>
                                </motion.div>
                                {/* Language Switcher */}
                                <motion.div variants={itemVariants} className='px-0.5 rounded-md border border-transparent'>
                                    <div className='flex flex-row w-full border-2 border-transparent justify-between hover:border-2 hover:border-white rounded-md' onClick={toggleDropdown}>
                                        <div className='flex flex-row items-center w-full'>
                                            <FontAwesomeIcon icon={faEarthEurope} size='sm' />
                                            <p className='ml-2'>
                                                {i18n.language === 'nb' ? 'Norsk' : 'English'}
                                            </p>
                                        </div>
                                        <FontAwesomeIcon icon={faCaretDown} className={`mr-2 my-auto transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                    {dropdownOpen && (
                                        <div className='mt-2 rounded-md border-2 border-white'>
                                            <button onClick={() => switchLanguage('nb')} className='text-left w-full py-2 px-2 flex justify-between items-center hover:bg-white hover:text-black'>
                                                Norsk 🇳🇴
                                                {i18n.language === 'nb' && <FontAwesomeIcon icon={faCheck} style={{ fontSize: '1em' }} />}
                                            </button>
                                            <button onClick={() => switchLanguage('en')} className='text-left w-full py-2 px-2 flex justify-between items-center hover:bg-white hover:text-black'>
                                                English 🇬🇧
                                                {i18n.language === 'en' && <FontAwesomeIcon icon={faCheck} style={{ fontSize: '1em' }} />}
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            </section>
                        </motion.section>
                    </section>
                )}
            </AnimatePresence>
        </nav>
    );
}