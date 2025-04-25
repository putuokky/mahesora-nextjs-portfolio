import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Splash = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 text-xl font-medium font-titleFont">
                Engineer
                <span className="tracking-wide text-textGreen">@Splash</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-textDark">
                Jan 2023 - Present
            </p>
            <ul className="flex flex-col gap-3 mt-6">
                <li className="flex gap-2 text-base text-textDark">
                    <span className="mt-1 text-textGreen"><TiArrowForward /></span>
                    Write modern, performant, maintainable code for a diverse array of client and internal projects
                </li>
                <li className="flex gap-2 text-base text-textDark">
                    <span className="mt-1 text-textGreen"><TiArrowForward /></span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque officia fugiat inventore minus assumenda, deleniti architecto quasi deserunt sit.
                </li>
                <li className="flex gap-2 text-base text-textDark">
                    <span className="mt-1 text-textGreen"><TiArrowForward /></span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est dolore libero rerum perspiciatis, eaque amet accusamus quos incidunt enim blanditiis provident, sunt asperiores non soluta reprehenderit dolorem commodi sint.
                </li>
            </ul>
        </motion.div>
    )
}

export default Splash