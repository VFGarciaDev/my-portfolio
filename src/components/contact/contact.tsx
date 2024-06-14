import { FaLinkedinIn, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react"
import { LinkButton, buttonVariants } from "../footer/components/link-button";
import { ContactForm } from "./components/form";

const contactInfo = [
    {
        href: "https://wa.me/5516988017762",
        icon: <FaWhatsapp />,
        children: "WhatsApp",
    },
    {
        href: "https://www.linkedin.com/in/victor-fgarcia/",
        icon: <FaLinkedinIn />,
        children: "LinkedIn",
    },
    {
        href: "",
        icon: <FaDiscord />,
        children: "Discord",
    }
]

export const Contact = () => {

    return (
        <main className="container h-[80vh] mb-[10vh] grid grid-cols-[30vw_40vw] justify-around items-center gap-20">
            <section className="flex flex-col items-center gap-5">
                <h1 className="text-2xl font-bold">Meus principais meios de contato:</h1>
                {
                    contactInfo.map(({ href, icon, children }, index) => (
                        <LinkButton key={index} href={href} className={buttonVariants({ buttonType: "text", className: "outline-0 gap-2 text-2xl font-bold w-3/4" })}>
                            {icon}
                            {children}
                        </LinkButton>
                    ))
                }
            </section>
            <section className="bg-neutral-700/50 py-10 px-10 rounded-2xl">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold flex items-center gap-5 mb-4"><Mail className="h-10 w-10" />Entre em Contato</h1>
                    <p className="text-lg px-2">Em caso de dúvidas ou propostas, sinta-se à vontade para me contatar através deste formulário ou pelas minhas principais redes sociais e, assim que possível, retornarei seu contato.</p>
                </div>
                <ContactForm />
            </section>
        </main>
    )
}