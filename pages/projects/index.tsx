import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'
import ApplitrackSVG from '@/components/projectSVG/applitrackSVG';
import PartnersosSVG from '@/components/projectSVG/partnersosSVG';
import SanplanSVG from '@/components/projectSVG/sanplanSVG';
import SaraSVG from '@/components/projectSVG/saraSVG';
import InsultifierSVG from '@/components/projectSVG/insultifierSVG';
import GreentalkSVG from '@/components/projectSVG/greentalkSVG';
import MoviematchSVG from '@/components/projectSVG/moviematchSVG';
export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    }
}

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            title: 'Applitrack',
            description: t('projectsIndex.descriptions.applitrack'),
            image: <ApplitrackSVG height={600} width={600} viewBox={"0 0 600 500"}/>,
            url: '/projects/applitrack'
        },
        {
            title: 'PartnerSOS',
            description: t('projectsIndex.descriptions.partnersos'),
            image: <PartnersosSVG height={600} width={600} viewBox={"0 0 600 500"}/>,
            url: '/projects/partnersos'
        },
        {
            title: 'SanPlan',
            description: t('projectsIndex.descriptions.sanplan'),
            image: <SanplanSVG height={600} width={600} viewBox={"0 0 600 500"}/>,
            url: '/projects/sanplan'
        },
        {
            title: 'Sarazamecznik.com',
            description: t('projectsIndex.descriptions.sara'),
            image: <SaraSVG height={600} width={600} viewBox={"0 0 600 500"}/>,
            url: '/projects/sara'
        },
        {
            title: 'Insultifier',
            description: t('projectsIndex.descriptions.insultifier'),
            image: <InsultifierSVG height={600} width={600} viewBox={"0 0 600 500"}/>,
            url: '/projects/insultifier'
        },
        {
            title: 'Greentalk',
            description: t('projectsIndex.descriptions.greentalk'),
            image: <GreentalkSVG height={600} width={600} viewBox={"0 0 600 500"}/>,
            url: '/projects/greentalk'
        },
        {
            title: 'MovieMatch',
            description: t('projectsIndex.descriptions.moviematch'),
            image: <MoviematchSVG height={600} width={600} viewBox={"0 0 600 500"}/>,
            url: '/projects/moviematch'
        },
    ];

    return (
        <section className=''>
            {/* projects grid */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="
                    w-4/5
                    lg:w-3/4 
                    py-6 
                    mx-auto 
                    grid 
                    grid-cols-1 
                    gap-x-5 
                    gap-y-4 
                    md:grid-cols-3 
                    lg:gap-x-4 
                    lg:gap-y-4
                    ">
                {/* projects cards. programatically created by mapping over them */}
                {projects.map((project, index) => (
                    <Link key={index} href={project.url}>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.1 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            variants={itemVariants}
                            transition={{ duration: 0.4 }}
                            className='
                                gap-1 
                                flex 
                                h-72 
                                bg-white
                                text-black
                                pb-3 
                                w-full 
                                mx-auto 
                                flex-col 
                                md:w-full
                                rounded-lg 
                                overflow-clip 
                                border
                                border-white 
                                '>
                                <div className='w-full h-3/4 content-center overflow-clip flex items-center lg:pt-20'>
                                    {project.image}
                                </div>
                            <div className='h-1/4 px-4'>
                                <h2 className='text-xl font-semibold'>{project.title}</h2>
                                <p className='text-md'>{project.description}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.section>
        </section>
    );
}