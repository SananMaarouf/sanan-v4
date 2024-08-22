import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Contact } from './contact';
import { useTranslation } from 'next-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const motionProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5, delay: 0.5 },
    };
    return (
        <footer
            id="contact"
            className="bg-opacity-90 bg-clip-padding backdrop-blur-sm backdrop-filter"
        >
            <motion.div {...motionProps}>
                <div className="pt-10 md:gap-x-28 flex flex-col justify-center border-b pb-5 md:flex-row">
                    <div>
                        <h2 className="text-center text-3xl">{t("footer.socials")}</h2>
                        <div className="flex md:gap-x-4 flex-row place-content-evenly w-full mt-2 md:mt-5 md:w-44">
                            <a
                                className="flex text-2xl flex-row border border-transparent text-black items-center p-4 rounded-lg bg-white hover:bg-black hover:text-white hover:border hover:border-white"
                                href="https://www.linkedin.com/in/sanan-maarouf//"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Linked
                                <FontAwesomeIcon 
                                    icon={faLinkedin} 
                                    className='ml-0.5 mr-2 ' 
                                />
                            </a>
                            <a
                                className="flex text-2xl flex-row border border-transparent text-black items-center p-4 rounded-lg bg-white hover:bg-black hover:text-white hover:border hover:border-white"
                                href="https://github.com/SananMaarouf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                                <FontAwesomeIcon 
                                    icon={faGithub} 
                                    className='ml-0.5 mr-2 ' 
                                />
                            </a>
                        </div>
                    </div>
                    <Contact />
                </div>
                <div className="text-center my-5">
                    <a
                        href="https://streamlinehq.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline"
                    >
                        Illustrations from Streamline
                    </a>
                </div>
            </motion.div>
        </footer>
    );
}