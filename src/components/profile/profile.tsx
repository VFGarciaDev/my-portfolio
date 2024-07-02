import profilePicture from "@/assets/images/profile-picture.png"
import { EnvelopeSimple, LinkedinLogo, WhatsappLogo, GithubLogo } from "@phosphor-icons/react"
import contactInfo from "./components/contactInfo.json"
import { ContactCard } from "./components/contactCard"


const contactIcons = [
    <EnvelopeSimple size={32} />,
    <LinkedinLogo size={32} />,
    <WhatsappLogo size={32} />,
    <GithubLogo size={32} />
]

export const Profile = () => {

    return (
        <main className="flex flex-col items-center h-[80vh] p-8 bg-neutral-800 rounded-2xl">
            <header className="border-4 border-b-neutral-500 pb-6">
                <div className="bg-neutral-500 p-2 rounded-xl">
                    <img className="block w-[200px]" src={profilePicture} />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="my-4 font-bold text-3xl">Victor Garcia</h1>
                    <p className="bg-neutral-500 px-2 rounded-md w-min text-nowrap text-lg">Web Developer</p>
                </div>
            </header>
            <section className="pt-8 flex flex-1 flex-col justify-between gap-3">
                {contactInfo.map((value, index) => (
                    <ContactCard
                        key={index}
                        icon={contactIcons[index]}
                        src={value.src}
                        name={value.name}
                        info={value.info} />
                ))}
            </section>
        </main>
    )
}