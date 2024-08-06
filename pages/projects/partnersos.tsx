import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}

const images = [
    {
        title: 'Index',
        image: '/images/projects/partnersos/index.png',
    },
    {
        title: 'Login page',
        image: '/images/projects/partnersos/login.png',
    },
    {
        title: 'Partners page',
        image: '/images/projects/partnersos/partners.png',
    },
    {
        title: 'Profile page',
        image: '/images/projects/partnersos/profile.png',
    },
    {
        title: 'Settings page',
        image: '/images/projects/partnersos/settings.png',
    },
    {
        title: 'Webapp map',
        image: '/images/projects/partnersos/webmap.jpg',
    },
];

export default function PartnerSOS() {
    const { t } = useTranslation();
    return (
        <section className="px-5 md:px-0">
            {/* heading and image gallery */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                mx-auto
                my-5 
                flex 
                flex-col 
                border-white
                w-full
                overflow-clip
                rounded-2xl 
                border 
                border-transparent
                bg-transparent 
                md:w-3/5 
                md:flex-row
                lg:w-1/2
                "
            >
                <div className="xl:pl-12 justify-center w-full flex flex-col md:w-1/2 px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        PartnerSOS
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                        {t("partnersos.description")}
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                        {t("partnersos.date")}
                    </p>

                </div>
                <div className="flex justify-center py-2 mx-auto w-1/2 md:w-2/5 lg:w-1/5">
                    {/* outside of carousel */}
                    <Carousel opts={{ align: "center" }}>
                        <CarouselContent>
                            {/* map over images array of objects and display them in the carousel */}
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="">
                                    <Image
                                        src={image.image}
                                        alt={image.title}
                                        width={400}
                                        height={400}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </motion.div>
            {/* content, story about the app */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p className="">
                        {t("partnersos.intro")}
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <h3 className="font-bold text-lg">{t("partnersos.inspirationHeader")}</h3>
                    <p>
                        {t("partnersos.inspiration")}
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <h3 className="font-bold text-lg">{t("partnersos.developmentHeader")}</h3>
                    <p>
                        {t("partnersos.development")}
                    </p>
                    <ul>
                        <li>
                            Expo Go:
                            <p>
                                {t("partnersos.expoGoDetails")}
                            </p>
                        </li>
                        <li>
                            Firebase:
                            <p>
                                {t("partnersos.firebaseDetails")}
                            </p>
                        </li>
                    </ul>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <h3 className="font-bold text-lg">{t("partnersos.experienceHeader")}</h3>
                    <p>
                        {t("partnersos.experience")}
                    </p>
                </section>
            </motion.div>
        </section>

    );
}