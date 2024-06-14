import { ToolCard } from "./card"
import { masterLevel, moderateLevel, learningLevel, softSkills } from "./tools-list"

export const Skills = () => {
    return (
        <article className="flex flex-col justify-around">
            <section className="flex flex-col">
                <h1 className="mb-5 text-center text-3xl font-bold">Hard Skills</h1>
                <h3 className="self-start mb-2 text-xl font-semibold">Proficiente</h3>
                <div className="flex flex-wrap gap-3">
                    {
                        masterLevel.map(({ src, name }, index) => (
                            <ToolCard key={index} src={src} name={name} />
                        ))
                    }
                </div>
                <h3 className="self-start mt-4 mb-2 text-xl font-semibold">Intermediário</h3>
                <div className="flex flex-wrap gap-3">
                    {
                        moderateLevel.map(({ src, name }, index) => (
                            <ToolCard key={index} src={src} name={name} />
                        ))
                    }
                </div>
                <h3 className="self-start mt-4 mb-2 text-xl font-semibold">Estudando</h3>
                <div className="flex flex-wrap gap-3">
                    {
                        learningLevel.map(({ src, name }, index) => (
                            <ToolCard src={src} name={name} key={index} />
                        ))
                    }
                </div>
            </section>
            <section className="flex flex-col">
                <h1 className="mb-5 text-center text-3xl font-bold">Soft Skills</h1>
                <ul className="grid grid-cols-2 list-disc list-inside text-xl px-2">
                    {
                        softSkills.map((name, index) => (
                            <li className="mb-1" key={index}>{name}</li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}