import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { useEffect, useState } from "react";
import { SiDiscord, SiTiktok } from "react-icons/si";
import Link from "next/link";

const iconSocial = {
    facebook: SlSocialFacebook,
    twitter: SlSocialTwitter,
    instagram: SlSocialInstagram,
    linkedin: SlSocialLinkedin,
    tiktok: SiTiktok,
    github: TbBrandGithub,
    discord: SiDiscord,
}

type SocialName = keyof typeof iconSocial;

type SocialItem = {
    id: number;
    nama: string; // atau: SocialName jika yakin aman
    link: string;
};

const LeftSide = () => {
    const [socials, setSocials] = useState<SocialItem[]>([]);

    useEffect(() => {
        fetch('/api/socials')
            .then(res => res.json())
            .then(data => setSocials(data))
    }, []);

    return (
        <div className="flex flex-col items-center justify-end w-full h-full gap-4 text-textLight">
            <div className="flex flex-col gap-4">
                {/* <a href="https://github.com/putuokky" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <TbBrandGithub />
                    </span>
                </a>
                <a href="https://www.tiktok.com/@vannemplo" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <SlSocialYoutube />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/okkymahesora/" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <SlSocialLinkedin />
                    </span>
                </a>
                <a href="https://www.facebook.com/okkymahesora" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <SlSocialFacebook />
                    </span>
                </a>
                <a href="https://instagram.com/okkymahesora" target="_blank">
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                        <SlSocialInstagram />
                    </span>
                </a> */}
                {socials.map(({ id, nama, link }) => {
                    const Icon = iconSocial[nama.toLowerCase() as SocialName];
                    return (
                        <Link key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={nama}>
                            <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2">
                                {Icon ? <Icon /> : <span>{nama}</span>}
                            </span>
                        </Link>
                    );
                })}
            </div>
            <div className="w-[2px] h-32 bg-textDark"></div>
        </div>
    )
}

export default LeftSide