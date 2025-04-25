'use client'

import About from "@/components/About";
import Archive from "@/components/Archive";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="w-full h-screen overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20s scrollbar-thumb-textDark/60 font-bodyFont bg-bodyColor text-textLight">
            <Navbar />
            <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="fixed bottom-0 left-0 hidden w-32 h-full xl:inline-flex">
                    <LeftSide />
                </motion.div>
                <div className="h-[88vh] w-full mx-auto p-4">
                    <Banner />
                    <About />
                    <Experience />
                    <Projects />
                    <Archive />
                    <Contact />
                    <Footer />
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="fixed bottom-0 right-0 hidden w-32 h-full xl:inline-flex">
                    <RightSide />
                </motion.div>
            </div>
        </main>
    );
}
