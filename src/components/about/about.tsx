import { Skills } from "./components/skills"
import { Biography } from "./components/biography"

export const About = () => {
    return (
        <section className="container h-[80vh] mb-[10vh] py-10 grid grid-cols-2">
            <Biography />
            <Skills />
        </section>
    )
}