import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'lucide-react';
import { Contact } from './contact';

export default function Footer() {
    const motionProps = {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.5, delay: 2 },
    };
    return (
        <footer
            id="contact"
            className="mt-10 bg-opacity-90 bg-clip-padding backdrop-blur-sm backdrop-filter dark:bg-gray-100 dark:bg-opacity-80 dark:backdrop-blur-md"
        >
            <motion.div {...motionProps}>
                <div className="border-b-color border-gray200 mt-10 flex flex-col justify-center border-b pb-5 md:flex-row">
                    <div>
                        <h2 className="text-center">Socials</h2>
                        <div className="mt-1 w-[22rem] md:mt-5 md:w-44">
                            <a
                                className="flex flex-row justify-center rounded-lg bg-blue-600 hover:bg-blue-900"
                                href="https://www.linkedin.com/in/sanan-maarouf//"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="ml-2 py-2 text-lg font-semibold text-white">Linked</p>
                                <button className="ml-0.5 mr-2 block w-6 self-center">
                                    <FontAwesomeIcon icon={faLinkedin} style={{ color: '#ffffff' }} />
                                </button>
                            </a>
                            <a
                                className="mt-2 flex flex-row justify-center rounded-lg bg-blue-600 hover:bg-blue-900"
                                href="https://github.com/SananMaarouf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="ml-2 py-2 text-lg font-semibold text-white">Github</p>
                                <button className="ml-0.5 mr-2 block w-6 self-center">
                                    <FontAwesomeIcon icon={faGithub} style={{ color: '#ffffff' }} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <Contact />
                </div>
            </motion.div>
        </footer>
    );
}