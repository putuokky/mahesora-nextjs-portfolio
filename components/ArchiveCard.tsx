import { FaRegFolder } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"

interface Props {
    title: string;
    des: string;
    listItem: string[];
    link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
    return (
        <a href={link} target="_blank">
            <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="flex items-center justify-between">
                    <FaRegFolder className="text-4xl text-textGreen" />
                    <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold tracking-wide font-titleFont group-hover:text-textGreen">{title}</h2>
                    <p className="mt-3 text-sm">{des}</p>
                </div>
                <ul className="flex flex-wrap items-center justify-between gap-2 text-xs mdl:text-sm text-textDark">
                    {
                        listItem.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </a>
    )
}

export default ArchiveCard