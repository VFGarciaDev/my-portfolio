import { ThemeSwitch } from "../theme-provider/theme-switch"
import { MenuLanguage } from "./components/multi-language"

interface RouteProps {
    href: string;
    label: string;
}
const routeList: RouteProps[] = [
    {
        href: "#home",
        label: "Home",
    },
    {
        href: "#about",
        label: "About me",
    },
    {
        href: "#projects",
        label: "Projects",
    },
    {
        href: "#contact",
        label: "Contact",
    },
];

export const Header = () => {

    return (
        <header className="w-full bg-secondary px-20 flex justify-between items-center h-[10vh] sticky top-0 border-b border-b-neutral-700">
                <a href="#" className="text-4xl font-bold italic">{`<vgarcia />`}</a>
                <section className="flex items-center gap-16">
                    <div className="flex gap-10 text-lg font-bold">
                        {routeList.map(({href, label}, index) => (
                            <a
                            href={href}
                            key={index}>
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeSwitch />
                        <MenuLanguage />
                    </div>
                </section>
        </header>
    )
}