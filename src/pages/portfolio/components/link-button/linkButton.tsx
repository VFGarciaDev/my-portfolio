import { ArrowSquareOut } from "@phosphor-icons/react"

type ButtonProps = {
    icon: string,
    label: string,
    href: string,
}

type LinkProps = {
    linkVercel: string,
    linkGithub: string,
}




export const LinkButton = ({linkVercel, linkGithub}:LinkProps) => {
    const pages = [
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
            label: "Vercel Url",
            href: linkVercel,
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            label: "GitHub",
            href: linkGithub,
        }
    ]

    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            {pages.map(({ icon, label, href }: ButtonProps) => (
                <a
                    key={label}
                    className="flex justify-around items-center py-1 px-2 bg-neutral-700 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={href}>
                    <img className="w-6" src={icon} />
                    <p className="text-lg text-nowrap">{label}</p>
                    <ArrowSquareOut size={16} className="hidden xl:block" />
                </a>
            ))}
        </div>
    )
}