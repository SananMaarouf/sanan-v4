import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function Projects() {
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
            className='flex flex-col justify-center md:mx-auto md:w-1/2lg:my-10'
        >
            <div className='flex flex-row place-content-between items-center'>
                <h2 className='text-3xl font-semibold'>
                    Projects
                </h2>
                <motion.div
                    onHoverStart={() => setIsHovered(true)} 
                    onHoverEnd={() => setIsHovered(false)}
                    {...slideProps}
                >
                    <Link href={'/projects'}>
                        <div className="flex flex-row rounded-md border-2 my-2 border-transparent hover:border-white">
                            <h3 className="w-20 py-1 text-center text-2xl">See all</h3>
                            <motion.div animate={{ x: isHovered ? 5 : 0 }} className='place-content-center'>
                                <span className="mr-2 flex w-6 ">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </motion.div>
                        </div>
                    </Link>
                </motion.div>
            </div>
            <div className='px-14'>
                <Carousel opts={{ align: "start" }} className=''>
                    <CarouselContent className=''>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
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