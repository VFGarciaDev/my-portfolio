import profilePicture from "@/assets/images/profile-picture.png"
import { EnvelopeSimple, LinkedinLogo, WhatsappLogo, GithubLogo } from "@phosphor-icons/react"
import contactInfo from "./components/contactInfo.json"
import { ContactCard } from "./components/contactCard"


const contactIcons = [
    EnvelopeSimple,
    LinkedinLogo,
    WhatsappLogo,
    GithubLogo
]

export const Profile = () => {

    return (
        <article className="flex flex-col justify-between items-center h-[80vh] p-8 bg-neutral-800 rounded-2xl">
            <header className="">
                <img className="block w-[200px] border-2 border-neutral-500 rounded-full" src={profilePicture} />
                <div className="flex flex-col items-center">
                    <h1 className="my-4 font-bold text-3xl">Victor Garcia</h1>
                    <p className="bg-neutral-500 px-2 rounded-md w-min text-nowrap text-lg">Web Developer</p>
                </div>
            </header>
            <main className="py-4 flex flex-col justify-between gap-4 h-[40%] border-2 border-y-neutral-500">
                {contactInfo.map((value, index) => (
                    <ContactCard
                        key={index}
                        icon={contactIcons[index]}
                        src={value.src}
                        name={value.name}
                        info={value.info} />
                ))}
            </main>
            <a
            className="text-xl font-bold bg-neutral-500 py-2 w-[90%] text-center rounded-full"
            href="https://drive.google.com/drive/folders/1Z9eEy-kBqaDTFeK8r_cHxI3Wt_-iYlx2"
            target="_blank"
            rel="noopener noreferrer">
                Download CV
            </a>
        </article>
    )
}