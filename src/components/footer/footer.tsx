import { FaExternalLinkAlt, FaLinkedinIn, FaGithub, FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LinkButton } from "./components/link-button";


const linkList = [
    {
        href: "https://github.com/VFGarciaDev",
        icon: <FaGithub />,
    },
    {
        href: "https://www.linkedin.com/in/victor-fgarcia/",
        icon: <FaLinkedinIn />,
    },
    {
        href: "",
        icon: <FaWhatsapp />,
    },
    {
        href: "https://www.instagram.com/vgarcia_00/",
        icon: <FaInstagram />,
    },
    {
        href: "https://x.com/VGallip00",
        icon: <FaXTwitter />,
    },
    {
        href: "",
        icon: <FaDiscord />,
    },
]

export const Footer = () => {

    return (
        <footer className="w-full bg-red-500/70 px-20 flex justify-between items-center h-[10vh] fixed bottom-0 border-t border-t-neutral-700">
            <section>
                <h1 className="text-lg">E-mail:</h1>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">vfeitosa.garcia@gmail.com</p>
                    <a href="mailto:vfeitosa.garcia@gmail.com">
                        <FaExternalLinkAlt className="h-4 w-4" />
                    </a>
                </div>
            </section>
            <nav className="flex gap-10">
                {
                    linkList.map(({href, icon}, index) => (
                        <LinkButton key={index} href={href} icon={icon} />
                            
                    ))
                }
            </nav>
        </footer>
    )
}