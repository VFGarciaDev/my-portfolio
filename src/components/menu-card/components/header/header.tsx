import { Link, useLocation } from "react-router-dom"

export const pages = [
    {
        name: "About Me",
        route: "/",
    },
    {
        name: "Portfolio",
        route: "/portfolio",
    },
    {
        name: "Dev stack",
        route: "/tools",
    },
    {
        name: "Contact",
        route: "/contact",
    },
]



export const Header = () => {
    const handlePageByRoute = () => {
        let location = useLocation()
        const page = pages.find(page => page.route === location.pathname)
        return page?.name
    }

    return (
        <header className="flex justify-between items-center h-16">
            <h1 className="text-4xl w-2/5 text-center">{handlePageByRoute()}</h1>
            <nav className="flex items-center justify-evenly w-3/5 bg-slate-500 h-full rounded-bl-3xl">
                {pages.map((value, index) => (
                    <Link key={index} to={value.route}
                        className="text-lg hover:underline hover:cursor-pointer hover:drop-shadow-[0_0_5px_rgba(255,255,255)]">
                        {value.name}
                    </Link>
                ))}
            </nav>
        </header>

    )
}