import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
    const [mails, setMails] = useState([]);

    useEffect(() => {
        fetch('/api/mails')
            .then(res => res.json())
            .then(data => setMails(data))
    }, []);

    return (
        <section id="contact" className="flex flex-col items-center justify-center gap-4 py-10 mx-auto max-w-contentContainer xl:py-32">
            <p className="flex items-center text-lg font-semibold tracking-wide font-titleFont text-textGreen">
                04. What&lsquo;s Next?
            </p>
            <h2 className="text-5xl font-semibold font-titleFont">Get In Touch</h2>
            <p className="max-w-[600px] text-center text-textDark">
                Althought I&lsquo;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&lsquo;ll try my best to get back to you!
            </p>
            {mails.map(({ id, email }) => {
                return (
                    <Link key={id} href={"mailto:" + email}>
                        <button className="w-40 mt-6 text-sm tracking-wider duration-300 border rounded-md h-14 border-textGreen font-titleFont text-textGreen hover:bg-hoverColor">Say Hello</button>
                    </Link>
                )
            })}
            {/* <a href="mailto:okkymahes@gmail.com">
                <button className="w-40 mt-6 text-sm tracking-wider duration-300 border rounded-md h-14 border-textGreen font-titleFont text-textGreen hover:bg-hoverColor">Say Hello</button>
            </a> */}
        </section>
    )
}

export default Contact