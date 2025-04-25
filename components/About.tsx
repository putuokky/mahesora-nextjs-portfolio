import Image from "next/image";
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai";
import { profileImg } from "@/public/assets";

const About = () => {
    return (
        <section id="about" className="flex flex-col gap-8 py-10 mx-auto max-w-containerSmall lgl:py-32">
            <SectionTitle title="About Me" titleNo="01" />
            <div className="flex flex-col gap-16 lgl:flex-row">
                <div className="flex flex-col w-full gap-4 text-base font-medium lgl:w-2/3 text-textDark">
                    <p>
                        Hello! My name is Okky Maheswara and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes - turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p>
                        Fast-forward to today, and I had the privilege of working at an advertising agency, a start-up,{" "}
                        <span className="text-textGreen">
                            a huge corporation, and a student-led design studio.
                        </span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam reprehenderit reiciendis, veniam pariatur aspernatur doloremque voluptate nostrum sit quas qui?
                        <span className="text-textGreen">
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id, doloremque nam deserunt sed deleniti ipsam culpa a illo quia earum sequi voluptas expedita numquam. Molestias maiores nulla quo sint.
                    </p>
                    <p>Here are a few technologies I have been working with recently:</p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            JavaScript (ES6+)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Nextjs
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Reactjs
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Nodejs
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            TypeScript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Express.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            MongoDB
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Tailwind CSS
                        </li>
                    </ul>
                </div>
                <div className="relative w-full lgl:w-1/3 h-80 group">
                    <div className="absolute w-full rounded-lg h-80 -left-6 -top-6">
                        <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0">
                            <Image className="object-cover h-full rounded-lg" src={profileImg} alt="profileImg" />
                            <div className="absolute top-0 left-0 hidden w-full duration-300 rounded-md lgl:inline-block h-80 bg-textGreen/20 group-hover:bg-transparent"></div>
                        </div>
                    </div>
                    <div className="hidden w-full transition-transform duration-300 border-2 rounded-md lgl:inline-flex h-80 border-textGreen group-hover:-translate-x-2 group-hover:-translate-y-2 "></div>
                </div>
            </div>
        </section>
    )
}

export default About