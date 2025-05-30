import Link from "next/link";
import { useEffect, useState } from "react";

const RightSide = () => {
    const [mails, setMails] = useState([]);

    useEffect(() => {
        fetch('/api/mails')
            .then(res => res.json())
            .then(data => setMails(data))
    }, []);

    return (
        <div className="flex flex-col items-center justify-end w-full h-full gap-6 text-textLight">
            {mails.map(({ id, email }) => {
                return (
                    <Link key={id} href={"mailto:" + email}>
                        <p className="text-sm tracking-wide rotate-90 w-72 text-textGreen">{email}</p>
                    </Link>
                );
            })}
            {/* <a href="mailto:okkymahes@gmail.com">
                <p className="text-sm tracking-wide rotate-90 w-72 text-textGreen">okkymahes@gmail.com</p>
            </a> */}
            <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
        </div>
    )
}

export default RightSide