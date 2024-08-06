import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
    {
        title: 'PartnerSOS',
        image: '/images/projects/partnersos/logo.png',
        url: '/projects/partnersos'
    },
    {
        title: 'SanPlan',
        image: '/images/projects/sanplan/index.png',
        url: '/projects/sanplan'
    },
    {
        title: 'Artist portfolio',
        image: '/images/projects/sara/sara1.png',
        url: '/projects/sara'
    },
    {
        title: 'Insultifier',
        image: '/images/projects/insultifier/index.png',
        url: '/projects/insultifier'
    },
];

export default function Projects() {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

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
            className='flex flex-col justify-center md:mx-auto md:w-3/4 lg:my-10'
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
            {/* carousel */}
            <div className='px-14'>
                <Carousel opts={{ align: "start" }}>
                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="md:h-52 md:basis-1/2 lg:basis-1/3 lg:h-72">
                                <Link href={project.url}>
                                    <Card className='bg-transparent h-full overflow-clip border border-white'>
                                        <CardContent className="flex flex-col aspect-square items-center ">
                                            <div className='h-2/3 md:h-1/2 overflow-clip'>
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={400}
                                                    height={400}
                                                    className='object-contain h-full'
                                                />
                                            </div>
                                            <h3 className='bg-gray-800 text-2xl content-center text-center h-1/3 w-full rounded-t-md md:content-start md:pt-3 lg:pt-6 '>{project.title}</h3>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </motion.div>
    );
}