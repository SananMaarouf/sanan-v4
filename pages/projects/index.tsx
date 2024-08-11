import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'
import { t } from 'i18next';

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
            title: 'PartnerSOS',
            description: t('projectsIndex.descriptions.partnersos'),
            image: '/images/projects/partnersos/logo.png',
            url: '/projects/partnersos'
        },
        {
            title: 'SanPlan',
            description: t('projectsIndex.descriptions.sanplan'),
            image: '/images/projects/sanplan/index.png',
            url: '/projects/sanplan'
        },
        {
            title: 'Sarazamecznik.com',
            description: t('projectsIndex.descriptions.sara'),
            image: '/images/projects/sara/sara1.png',
            url: '/projects/sara'
        },
        {
            title: 'Insultifier',
            description: t('projectsIndex.descriptions.insultifier'),
            image: '/images/projects/insultifier/index.png',
            url: '/projects/insultifier'
        },
        {
            title: 'Greentalk',
            description: t('projectsIndex.descriptions.greentalk'),
            image: '/images/projects/greentalk/greentalk.jpg',
            url: '/projects/greentalk'
        },
        {
            title: 'MovieMatch',
            description: t('projectsIndex.descriptions.moviematch'),
            image: '/images/projects/moviematch/moviematch.png',
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
                                px-4 
                                py-2 
                                w-full 
                                mx-auto 
                                flex-col 
                                md:w-full
                                rounded-lg 
                                overflow-clip 
                                border
                                border-white 
                                '>
                            <div className='w-full h-3/4 content-center overflow-clip'>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className='rounded-lg mx-auto'
                                />
                            </div>
                            <div className='h-1/4'>
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