import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import portrait from '../public/sanan.png';
import { useTranslation } from 'next-i18next';

export default function Landing() {
    const { t } = useTranslation();
    return (
        /* parent section */
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="
            mx-auto
            my-5 
            flex 
            flex-col 
            w-full
            overflow-hidden 
            rounded-2xl 
            border 
            border-transparent
            bg-transparent 
            md:w-3/5 
            md:py-4
            md:flex-row
            lg:w-1/2
            "
        >
            <div className="xl:pl-12 relative my-auto flex flex-1 basis-1/2 flex-col px-4 py-6 lg:py-12 ">
                <div className='flex flex-row mx-auto md:mx-0 md:flex-col'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl">
                    {t('landing.greeting')}
                    <motion.div
                        className="w-fit inline-block" animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
                        👋🏽
                    </motion.div>
                </h1>
                <h2 className="text-3xl ml-2 md:ml-0 md:mt-4 md:text-4xl lg:text-5xl">
                {t('landing.im')} Sanan
                </h2>
                            </div>
                <div className="flex grow flex-col justify-between">
                    <div className='flex flex-row md:flex-col w-full place-content-between'>
                        <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                        {t('landing.jobtitle')}
                        </p>
                        <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                            📍 {t('landing.location')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mx-auto max-w-72 bg-transparent md:max-w-lg lg:max-w-xl">
                <Image
                    src={portrait}
                    width={300}
                    height={400}
                    alt={t('landing.imageAlt')}
                    className='rounded-full'
                />
            </div>
        </motion.div>
    );
}