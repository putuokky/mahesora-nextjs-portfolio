import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { amazonImg, cyberImg, noorShop } from "@/public/assets"
import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"
import { AiOutlineYoutube } from "react-icons/ai"

const Projects = () => {
    return (
        <section id="project" className="py-24 mx-auto max-w-container lgl:px-20">
            <SectionTitle title="Some Things I have Build" titleNo="03" />
            <div className="flex flex-col items-center justify-between w-full mt-10 gap-28">
                {/* Project one */}
                <div className="flex flex-col items-center justify-center w-full mt-10 gap-28">
                    <div className="flex flex-col gap-6 xl:flex-row">
                        <a className="relative w-full h-auto xl:w-1/2 group" href="#" target="_blank">
                            <div>
                                <Image className="object-contain w-full h-full" src={amazonImg} alt="amazonImg" />
                            </div>
                        </a>
                        <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
                            <p className="text-sm tracking-wide font-titleFont text-textGreen">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                Amazon Clone 2.0
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga, expedita quasi facere exercitationem sed nulla quibusdam itaque? Voluptatibus, et.
                                <span className="text-textGreen">O-auth</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, <span className="text-textGreen">voluptatibus?</span>
                            </p>
                            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
                                <li>Nextjs</li>
                                <li>TypeScript</li>
                                <li>Stripe</li>
                                <li>Vercel</li>
                            </ul>
                            <div className="flex gap-4 text-2xl">
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <TbBrandGithub />
                                </a>
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <AiOutlineYoutube />
                                </a>
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project two */}
                <div className="flex flex-col items-center justify-center w-full mt-10 gap-28">
                    <div className="flex flex-col gap-6 xl:flex-row-reverse">
                        <a className="relative w-full h-auto xl:w-1/2 group" href="#" target="_blank">
                            <div>
                                <Image className="object-contain w-full h-full" src={cyberImg} alt="cyberImg" />
                            </div>
                        </a>
                        <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between ">
                            <p className="text-sm tracking-wide font-titleFont text-textGreen">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                Amazon Clone 2.0
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga, expedita quasi facere exercitationem sed nulla quibusdam itaque? Voluptatibus, et.
                                <span className="text-textGreen">O-auth</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, <span className="text-textGreen">voluptatibus?</span>
                            </p>
                            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
                                <li>Nextjs</li>
                                <li>TypeScript</li>
                                <li>Stripe</li>
                                <li>Vercel</li>
                            </ul>
                            <div className="flex gap-4 text-2xl">
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <TbBrandGithub />
                                </a>
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <AiOutlineYoutube />
                                </a>
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project three */}
                <div className="flex flex-col items-center justify-center w-full mt-10 gap-28">
                    <div className="flex flex-col gap-6 xl:flex-row">
                        <a className="relative w-full h-auto xl:w-1/2 group" href="#" target="_blank">
                            <div>
                                <Image className="object-contain w-full h-full" src={noorShop} alt="noorShop" />
                            </div>
                        </a>
                        <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
                            <p className="text-sm tracking-wide font-titleFont text-textGreen">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                Amazon Clone 2.0
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga, expedita quasi facere exercitationem sed nulla quibusdam itaque? Voluptatibus, et.
                                <span className="text-textGreen">O-auth</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, <span className="text-textGreen">voluptatibus?</span>
                            </p>
                            <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
                                <li>Nextjs</li>
                                <li>TypeScript</li>
                                <li>Stripe</li>
                                <li>Vercel</li>
                            </ul>
                            <div className="flex gap-4 text-2xl">
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <TbBrandGithub />
                                </a>
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <AiOutlineYoutube />
                                </a>
                                <a className="duration-300 hover:text-textGreen" href="#" target="_blank">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects