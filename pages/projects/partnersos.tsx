import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PartnerSOS() {
    return (
        <section>
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
                            PartnerSOS
                        </h1>
                    </div>
                    <div className="flex grow flex-col justify-between">
                        <div className='flex flex-row md:flex-col w-full place-content-between'>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                                Violence alarm / location sharing app
                            </p>
                            <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
                                Juli, 8th 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mx-auto max-w-72 bg-transparent md:max-w-lg lg:max-w-xl">
                </div>
            </motion.div>
            {/* content, story about the app */}
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                    PartnerSOS empowers users to share their location with their partners instantly when they feel unsafe.
                    Unlike apps like Messenger or Snapchat, PartnerSOS requires only a single tap, ensuring a quick and
                    efficient notification process. Upon activation, the partner receives an SMS containing a link to view
                    the user's location via a web app. The location updates in real-time and can be accessed directly in
                    Google Maps for precise navigation. This streamlined approach ensures that users can seek assistance
                    quickly and effortlessly, especially in stressful situations.
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                    Inspiration The idea for PartnerSOS stemmed from a personal experience involving a friend.
                    This friend was walking home after work when they noticed a customer following them.
                    While not feeling threatened enough to call the police, they wanted their partner to be aware of their
                    situation immediately. This incident highlighted the need for a simple yet effective way to share one's
                    location, even if cellular data is turned off.
                </p>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                    Development As a developer, I recognized the potential to create a fast and reliable solution.
                    PartnerSOS is built using Expo Go and Firebase:
                </p>
                <ul>
                    <li>
                        Expo Go:
                        <p>
                            A React Native framework that accelerates app development by providing robust developer tools.
                        </p>
                    </li>
                    <li>
                        Firebase:
                        <p>
                            A suite of cloud-based development tools that aid in building, deploying, and scaling mobile apps.
                            I utilized Firebase Authentication, Firestore DB, and Cloud Functions.
                        </p>
                    </li>
                </ul>
            </section>
            <section className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2">
                <p>
                    Experience Developing PartnerSOS was a rewarding endeavor, especially since my background is primarily in web development.
                    Leveraging React Native allowed me to apply my web development skills (JSX, TSX) to create a mobile app.
                    Regardless of its popularity, this project provided invaluable experience in mobile app development.
                </p>
            </section>
            <motion.section>

            </motion.section>
        </section>

    );
}