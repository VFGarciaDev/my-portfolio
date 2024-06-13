interface ButtonProps {
    href: string,
    icon: React.ReactNode,
}

export const LinkButton = ({href, icon}:ButtonProps) => {

    return (
        <a href={href} target="_blank" rel="noreferrer noopener"
        className="bg-white/80 hover:bg-white hover:outline-white text-black text-2xl p-2 rounded-full outline outline-2 outline-white/60 outline-offset-4">
            {icon}
        </a>
    )
}