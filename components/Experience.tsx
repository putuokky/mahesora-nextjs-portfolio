import { useState } from "react"
import SectionTitle from "./SectionTitle"
import ReactBD from "./works/ReactBD"
import Apple from "./works/Apple";
import Google from "./works/Google";
import Splash from "./works/Splash";
import Amazon from "./works/Amazon";

const Experience = () => {
    const [workReactbd, setWorkReactbd] = useState(true);
    const [workGoogle, setWorkGoogle] = useState(false);
    const [workApple, setWorkApple] = useState(false);
    const [workSplash, setWorkSplash] = useState(false);
    const [workAmazon, setWorkAmazon] = useState(false);

    const handleReactbd = () => {
        setWorkReactbd(true);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(false);
    };
    const handleGoogle = () => {
        setWorkReactbd(false);
        setWorkGoogle(true);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(false);
    };
    const handleApple = () => {
        setWorkReactbd(false);
        setWorkGoogle(false);
        setWorkApple(true);
        setWorkSplash(false);
        setWorkAmazon(false);
    };
    const handleSplash = () => {
        setWorkReactbd(false);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(true);
        setWorkAmazon(false);
    };
    const handleAmazon = () => {
        setWorkReactbd(false);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(true);
    };
    return (
        <section id="experience" className="px-4 py-10 mx-auto max-w-containerxs lgl:py-24">
            <SectionTitle title="Where I have Worked" titleNo="02" />
            <div className="flex flex-col w-full gap-16 mt-10 md:flex-row">
                <ul className="flex flex-col md:w-32">
                    <li onClick={handleReactbd} className={`${workReactbd ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>ReactBD</li>
                    <li onClick={handleGoogle} className={`${workGoogle ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Google</li>
                    <li onClick={handleApple} className={`${workApple ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Apple</li>
                    <li onClick={handleSplash} className={`${workSplash ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Splash</li>
                    <li onClick={handleAmazon} className={`${workAmazon ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Amazon</li>
                </ul>
                {workReactbd && <ReactBD />}
                {workGoogle && <Google />}
                {workApple && <Apple />}
                {workSplash && <Splash />}
                {workAmazon && <Amazon />}
            </div>
        </section>
    )
}

export default Experience