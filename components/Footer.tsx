import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl"
import { TbBrandGithub } from "react-icons/tb"

const Footer = () => {
    return (
        <div className="items-center justify-center hidden w-full gap-4 py-6 mdl:inline-flex xl:hidden">
            <a href="https://github.com/putuokky" target="_blank">
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
            </a>
        </div>
    )
}

export default Footer