import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    }
}


export default function Applitrack() {
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
                h-1/2
                overflow-hidden 
                rounded-2xl 
                border 
                border-transparent
                bg-transparent 
                md:w-3/5 
                lg:w-1/2
                "
            >
                <div className="w-full justify-center flex flex-col px-4 pb-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        Applitrack.no
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
                        {t("applitrack.description")}
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                        {t("applitrack.date")}
                    </p>
                </div>

                <Image
                    src={"/images/projects/applitrack/applitrack-dashboard.png"}
                    alt={"applitrack"}
                    width={1000}
                    height={800}
                    className="w-full"
                />

            </motion.div>
            {/* content, story about the app */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("applitrack.story")}
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <h2 className="text-xl ">Tech stack:</h2>
                    <ul className="">
                        <li>NextJS {t("applitrack.techStack.nextjs")}</li>
                        <li>TailwindCSS {t("applitrack.techStack.tailwind")} </li>
                        <li>Supabase {t("applitrack.techStack.supabase")}</li>
                        <li>Vercel {t("applitrack.techStack.vercel")}</li>
                    </ul>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("applitrack.nextJsExperience")}
                    </p>
                </section>
                <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                    <p>
                        {t("applitrack.supabase")}
                    </p>
                </section>
            </motion.div>
        </section>
    );
}