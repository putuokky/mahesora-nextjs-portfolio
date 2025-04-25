import { logo } from "@/public/assets"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { MdOutlineClose } from "react-icons/md"
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl"

const Navbar = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [showMenu, setShowMenu] = useState(false)

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
        // Update the class name of the clicked link
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                links.forEach((l) => l.classList.remove("active-link"));
                (e.currentTarget as HTMLElement).classList.add("active-link");
            });
        });
    }

    function handlClick(e: React.MouseEvent<HTMLDivElement>) {
        if (ref.current && e.target instanceof Node && ref.current.contains(e.target)) {
            // do something with myRef .current
            setShowMenu(false)
        }
    }

    return (
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
            <div className="flex items-center justify-between h-full py-1 mx-auto max-w-container font-titleFont">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Image className="w-14" src={logo} alt="logo" />
                </motion.div>
                <div className="items-center hidden mdl:inline-flex gap-7">
                    <ul className="flex text-[13px] gap-7">
                        <Link href="#home" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }}>Home</motion.li>
                        </Link>
                        <Link href="#about" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }}>
                                <span className="text-textGreen">01.</span> About
                            </motion.li>
                        </Link>
                        <Link href="#experience" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                                <span className="text-textGreen">02.</span> Experience
                            </motion.li>
                        </Link>
                        <Link href="#project" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.3 }}>
                                <span className="text-textGreen">03.</span> Project
                            </motion.li>
                        </Link>
                        <Link href="#contact" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.4 }}>
                                <span className="text-textGreen">04.</span> Contact
                            </motion.li>
                        </Link>
                    </ul>
                    <a href="/assets/mahesora-cv.pdf" target="_blank">
                        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Resume</motion.button>
                    </a>
                </div>
                {/* Small Icon Section */}
                <div onClick={() => setShowMenu(true)} className="flex flex-col items-center justify-between w-6 h-5 overflow-hidden text-4xl cursor-pointer mdl:hidden text-textGreen group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
                </div>
                {
                    showMenu && (
                        <div ref={ref} onClick={handlClick} className="absolute top-0 right-0 flex flex-col items-end w-full h-screen bg-black bg-opacity-50 mdl:hidden">
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.1 }} className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative">
                                <MdOutlineClose onClick={() => setShowMenu(false)} className="absolute text-3xl cursor-pointer text-textGreen hover:text-textDark top-4 right-4" />
                                <div className="flex flex-col items-center gap-7">
                                    <ul className="flex flex-col text-base gap-7">
                                        <Link href="#home" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}>Home</motion.li>
                                        </Link>
                                        <Link href="#about" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}>
                                                <span className="text-textGreen">01.</span> About
                                            </motion.li>
                                        </Link>
                                        <Link href="#experience" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}>
                                                <span className="text-textGreen">02.</span> Experience
                                            </motion.li>
                                        </Link>
                                        <Link href="#project" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}>
                                                <span className="text-textGreen">03.</span> Project
                                            </motion.li>
                                        </Link>
                                        <Link href="#contact" onClick={handleScroll} className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link">
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}>
                                                <span className="text-textGreen">04.</span> Contact
                                            </motion.li>
                                        </Link>
                                    </ul>
                                    <a href="/assets/mahesora-cv.pdf" target="_blank">
                                        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, ease: "easeIn" }} className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Resume</motion.button>
                                    </a>
                                    <div className="flex gap-4 ">
                                        <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, ease: "easeIn" }} href="https://github.com/putuokky" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <TbBrandGithub />
                                            </span>
                                        </motion.a>
                                        <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, ease: "easeIn" }} href="https://www.tiktok.com/@vannemplo" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialYoutube />
                                            </span>
                                        </motion.a>
                                        <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, ease: "easeIn" }} href="https://www.linkedin.com/in/okkymahesora/" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialLinkedin />
                                            </span>
                                        </motion.a>
                                        <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, ease: "easeIn" }} href="https://www.facebook.com/okkymahesora" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialFacebook />
                                            </span>
                                        </motion.a>
                                        <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, ease: "easeIn" }} href="https://instagram.com/okkymahesora" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialInstagram />
                                            </span>
                                        </motion.a>
                                    </div>
                                </div>
                                <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, ease: "easeIn" }} className="mt-4 text-sm tracking-widest text-center w-72 text-textGreen" href="mailto:okkymahes@gmail.com">
                                    <p>okkymahes@gmail.com</p>
                                </motion.a>
                            </motion.div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar