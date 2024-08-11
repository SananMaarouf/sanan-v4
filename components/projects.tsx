import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Projects() {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    const projects = [
        {
            title: 'PartnerSOS',
            description: t('projectsIndex.descriptions.partnersos'),
            image: '/images/projects/partnersos/logo.png',
            url: '/projects/partnersos'
        },
        {
            title: 'Artist portfolio',
            description: t('projectsIndex.descriptions.sara'),
            image: '/images/projects/sara/sara1.png',
            url: '/projects/sara'
        },
        {
            title: 'SanPlan',
            description: t('projectsIndex.descriptions.sanplan'),
            image: '/images/projects/sanplan/index.png',
            url: '/projects/sanplan'
        },
        {
            title: 'Insultifier',
            description: t('projectsIndex.descriptions.insultifier'),
            image: '/images/projects/insultifier/index.png',
            url: '/projects/insultifier'
        },
    ];

    const slideProps = {
        initial: { opacity: 0, x: +100 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0 },
        whileTap: { scale: 0.95 },
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className='flex flex-col justify-center md:mx-auto md:w-3/4 lg:w-1/2'
        >
            {/* heading and nav */}
            <div className='flex flex-row place-content-between items-center'>
                <h2 className='text-3xl font-semibold'>
                    {t('projects.title')}
                </h2>
                <motion.div
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    {...slideProps}
                >
                    <Link href={'/projects'}>
                        <div className="flex flex-row rounded-md border-2 my-2 border-transparent hover:border-white">
                            <h3 className="w-20 py-1 text-center text-2xl underline"> {t('projects.seeAll')} </h3>
                            <motion.div animate={{ x: isHovered ? 5 : 0 }} className='place-content-center'>
                                <span className="mr-2 flex w-6 ">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </motion.div>
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* accordion */}
            <Accordion type="single" collapsible>
                {projects.map((project, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-2xl">{project.title}</AccordionTrigger>
                        <AccordionContent>
                            <Link href={project.url}>
                                <div className='grid grid-cols-2 max-h-60 border overflow-clip border-white'>
                                    <div className='flex items-center justify-center'>
                                        <h3 className='text-2xl'>
                                            {project.description}
                                        </h3>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={400}
                                            height={400}
                                            className='object-contain h-full'
                                        />
                                    </div>
                                </div>
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>


        </motion.div>
    );
}