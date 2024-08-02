import Link from "next/link"

type linkProps = {
    href: string,
    label: string,
}

export const pageLinks: linkProps[] = [
    {
        href: "/",
        label: "About Me"
    },
    {
        href: "/projects",
        label: "Projects"
    },
    {
        href: "/skills",
        label: "Skills"
    },
    {
        href: "/certificates",
        label: "Certificates"
    },
    {
        href: "/contact",
        label: "Contact"
    },
]

export default function Header() {

    return (
        <nav className="-mr-8 min-h-12 grid grid-cols-[3fr_7fr] bg-neutral-950/40 shadow-md">
            <h1 className="text-center self-center text-3xl font-extrabold tracking-wider">Título</h1>
            <ul className="flex items-center justify-evenly bg-blue-500 rounded-bl-2xl">
                {pageLinks.map((page, index) => (
                    <Link
                        className="text-xl font-bold tracking-wide hover:underline hover:drop-shadow-innerText"
                        key={index} href={page.href}
                    >
                        {page.label}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}