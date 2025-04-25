import { useState } from "react"
import ArchiveCard from "./ArchiveCard"
import { motion } from "framer-motion";

const Archive = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="px-4 py-24 mx-auto max-w-contentContainer">
            <div className="flex flex-col items-center w-full ">
                <h2 className="text-3xl font-semibold font-titleFont">Other Noteworthy Projects</h2>
                <p className="text-sm font-titleFont text-textGreen">view the archive</p>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3 lgl:px-10">
                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />
                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />
                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />
                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />
                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />
                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />

                {
                    showMore && (
                        <>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <ArchiveCard title="Educare Engligh Learning Academy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit labore doloremque aliquid voluptas fugiat reprehenderit saepe quod repellat iure!" listItem={["Reactjs", "Tailwindcss", "Nextjs"]} link="#" />
                            </motion.div>
                        </>
                    )
                }
            </div>
            <div className="flex items-center justify-center mt-12">
                {
                    showMore ? <button onClick={() => setShowMore(false)} className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Show Less</button> : <button onClick={() => setShowMore(true)} className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Show More</button>
                }
            </div>
        </div>
    )
}

export default Archive