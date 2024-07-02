import { ToolCard } from "./card"
import { learningLevel, masterLevel, moderateLevel, softSkills } from "./tools-list"

const levels = [
    {
        level: "Proficiente",
        list: masterLevel,
    },
    {
        level: "Intermediário",
        list: moderateLevel,
    },
    {
        level: "Estudando",
        list: learningLevel,
    },
]

export const Tools = () => {

    return (
        <article className="flex flex-col gap-10">
            <section className="flex flex-col">
                <h1 className="mb-5 text-3xl font-bold">Hard Skills</h1>
                {levels.map(({level, list}, index) => (
                    <div key={index}>
                        <h3 className="self-start mb-2 text-xl font-semibold">{level}</h3>
                        <div className="flex flex-wrap gap-3">
                            {list.map(({ src, name }, index) =>
                                <ToolCard key={index} src={src} name={name} />
                            )}
                        </div>
                    </div>
                ))}
            </section>
            <section className="flex flex-col">
                <h1 className="mb-5 text-3xl font-bold">Soft Skills</h1>
                <ul className="grid grid-cols-2 list-disc list-inside text-xl px-2">
                    {softSkills.map((name, index) =>
                        <li className="mb-1" key={index}>{name}</li>
                    )}
                </ul>
            </section>
        </article>
    )
}