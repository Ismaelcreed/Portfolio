"use client"
import React from 'react';
import NavBar from "../NavBar/NavBar";
import { FaGithub, FaFacebook, FaPhone, FaGoogle} from "react-icons/fa";
import {LuGithub , LuFacebook , LuPhone , LuMail } from "react-icons/lu";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Fadeup = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut"
            }
        }
    }
}

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-white overflow-hidden relative">
            <NavBar />
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px] items-start">
                <div className='flex flex-col justify-center py-6 md:py-0 relative z-20'>
                    <motion.div
                        variants={Fadeup(0.6)}
                        initial="hidden"
                        whileInView="show"
                        animate="animate"
                        className='text-center md:text-left space-y-8 lg:max-w-[400px]'>
                        <span className="text-2xl justify-center ml-auto w-8 h-20 font-bold italic" >
                            "{t(`Hero.span`)}"
                        </span>
                        <div className="flex justify-center">
                            <img
                                src="/images/coding.png"
                                alt="Coding"
                                className="w-24 h-24 sm:w-32 sm:h-32 mb-4 l-[8px] rounded-full object-cover"
                            />
                        </div>
                        <h1
                            className='text-lg lg:text-2xl font-bold !leading-snug'
                        >
                            {t(`Hero.span1`)} <span className='text-primary'>RAZAFINDRATSIMBA Bruno Ismael </span>{t(`Hero.span2`)}
                        </h1>
                    </motion.div>
                    <div className='flex flex-1 justify-center md:justify-start mt-10 gap-8 flex-wrap'>

                        <motion.a
                            variants={Fadeup(0.4)}
                            initial="hidden"
                            whileInView="show"
                            animate="animate"
                            href="https://www.facebook.com/xan.travis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark hover:text-primary transition-colors"
                        >
                            <LuFacebook className="w-6 h-6" />
                        </motion.a>

                        <motion.a
                            variants={Fadeup(0.6)}
                            initial="hidden"
                            whileInView="show"
                            animate="animate"
                            href="https://github.com/search?q=IsmaelCreed&type=users"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark hover:text-primary transition-colors"
                        >
                            <LuGithub className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            variants={Fadeup(0.2)}
                            initial="hidden"
                            whileInView="show"
                            animate="animate"
                            href="mailto:razafindratsimbabrunoismael@gmail.com"
                            className="text-dark hover:text-primary transition-colors"
                        >
                            <LuMail className="w-6 h-6" />
                        </motion.a>

                        <motion.div
                            variants={Fadeup(0.04)}
                            initial="hidden"
                            whileInView="show"
                            animate="animate"
                            className="flex items-center text-dark hover:text-primary transition-colors"
                        >
                            <LuPhone className="w-5 h-5" />
                            <span className="ml-2">+261 34 58 997 43 / 032 95 729 93</span>
                        </motion.div>

                    </div>
                </div>
                <div className='flex justify-center items-center relative'>
                    <div className="absolute w-[500px] h-[500px] top-[-50px] left-[-50px]">
                        {/* Image 1 */}
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView="show"
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            src="/images/Robot.gif"
                            alt="Image 1"
                            className="absolute w-24 h-24 rounded-full object-cover floating"
                            style={{
                                top: "0%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                animationDelay: "0s",
                            }}
                        />
                        {/* Image 2 */}
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView="show"
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            src="/images/cat.gif"
                            alt="Image 2"
                            className="absolute w-20 h-20 rounded-full object-cover floating"
                            style={{
                                top: "50%",
                                left: "100%",
                                transform: "translateY(-50%) translateX(-50%)",
                                animationDelay: "3.33s", 
                            }}
                        />
                     
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView="show"
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            src="/images/npm.gif"
                            alt="Image 3"
                            className="absolute w-20 h-20 object-cover floating"
                            style={{
                                top: "50%",
                                left  :"10%",
                                transform: "translateX(-50%) translateY(-50%)",
                                animationDelay: "6.66s", 
                            }}
                        />
                    </div>

                    <motion.img
                        initial={{ x: 50, opacity: 0 }}
                        whileInView="show"
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                        src="/images/profil.png"
                        alt="Profile"
                        className='w-[250px] xl:w-[300px] mt-5 h-auto justify-center object-cover relative z-10 drop-shadow hover:cursor-pointer'
                    />
                </div>


            </div>
        </section>
    );
};

export default Hero;
