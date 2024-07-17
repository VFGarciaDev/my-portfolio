import { ElementType } from "react"

type ContactProps = {
    icon: ElementType,
    src?: string,
    name: string,
    info: string,
}

export const ContactCard = ({ icon: Icon, src, name, info }: ContactProps) => {

    return (
        <a 
        className="flex items-center gap-2 hover:drop-shadow-[0_0_10px_rgba(255,255,255)]"
        href={src}
        target="_blank"
        rel="noopener noreferrer">
            <Icon size={36} />
            <div>
                <h2 className="font-semibold">{name}</h2>
                <p className="text-sm">{info}</p>
            </div>
        </a>
    )
}