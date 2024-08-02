import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Outlook from "@/assets/images/icons/outlook-icon.svg"
import Whatsapp from "@/assets/images/icons/whatsapp-icon.svg"

type ContactProps = {
    icon: string | StaticImport,
    label: string,
    info: string,
    href?: string,
}

export const contactList: ContactProps[] = [
    {
        icon: Outlook,
        label: "E-Mail",
        info: "vgarcia.dev@hotmail.com",
        href: "google.com.br"
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
        label: "LinkedIn",
        info: "in/victor-fgarcia",
        href: "https://www.linkedin.com/in/victor-fgarcia/",
    },
    {
        icon: Whatsapp,
        label: "WhatsApp",
        info: "+55 (16) 98801-7762",
        href: "https://wa.me/5516988017762",
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        label: "GitHub",
        info: "VFGarciaDev",
        href: "https://github.com/VFGarciaDev",
    }
]