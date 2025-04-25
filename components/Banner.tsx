import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section id='home' className='flex flex-col gap-4 py-10 mx-auto max-w-contentContainer mdl:py-24 lgl:gap-8 mdl:px-10 xl:px-4'>
            <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className='text-lg tracking-wide font-titleFont text-textGreen'>
                Hi, my name is
            </motion.h3>
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex flex-col text-4xl font-semibold lgl:text-6xl font-titleFont">
                Okky Maheswara. <span className="mt-2 text-textDark lgl:mt-4">I build things for the web.</span>
            </motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="text-base md:max-w-[650px] text-textDark font-medium">
                I am a web developer with 4+ years of experience in React. I have a strong foundation in front-end & back-end development and am  skilled in creating user-friendly and responsive web applications using React and its ecosystem.{" "}
                <a href="#" target="_blank">
                    <span className="relative inline-flex overflow-x-hidden cursor-pointer text-textGreen h-7 group">
                        Learn More
                        <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </span>
                </a>
            </motion.p>
            <motion.button initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="text-sm tracking-wide duration-300 border rounded-md w-52 h-14 font-titleFont border-textGreen text-textGreen hover:bg-hoverColor">
                Check out my project
            </motion.button>
        </section>
    )
}

export default Banner