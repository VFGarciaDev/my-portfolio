type ContactProps = {
    icon: React.ReactNode,
    src: string,
    name: string,
    info: string,
}

export const ContactCard = ({icon, src, name, info}:ContactProps) => {

    return (
        <section className="flex items-center gap-2">
            <a className="bg-neutral-500 p-1 rounded-lg" href={src}>
                {icon}
            </a>
            <div>
                <h2 className="font-semibold">{name}</h2>
                <p className="text-sm">{info}</p>
            </div>
        </section>
    )
}