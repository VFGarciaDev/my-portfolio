import projEntregacao from "@/assets/images/project-images/proj-entregacao.png"
import { LinkButton } from "../link-button/linkButton"

export const ProjectCard = () => {

    return (
        <section className="flex flex-col items-center min-w-80 bg-neutral-500 p-5 rounded-2xl">
            <div className="overflow-hidden rounded-xl shadow-xl hover:shadow-none">
                <img className="aspect-video hover:scale-[140%] hover:translate-y-[20%] transition-transform duration-500" src={projEntregacao} />
            </div>
            <h1 className="text-3xl font-bold drop-shadow-lg mt-4">Projeto Entregação</h1>
            <p className="underline text-lg text-blue-800 font-semibold self-end mb-4 mr-4">...detalhes</p>
            <LinkButton linkVercel="https://entregacao.com.br/" linkGithub="https://github.com/lucaoskaique/entregacao-app" />
        </section>
    )
}