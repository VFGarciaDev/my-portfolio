import Image from "next/image"
import { getGithubProfile } from "@/data/github-profile"

export default async function ProfileHeader() {
    const profilePicture = await getGithubProfile()
    return (
        <div className="flex flex-col items-center gap-2">
            <Image
                className="rounded-full shadow-2xl"
                src={profilePicture} alt="Profile"
                width={192} height={192} quality={100} />
            <h1 className="text-3xl font-extrabold mt-2">Victor Garcia</h1>
            <div className="group px-5 py-1 rounded-xl transition-colors duration-300 hover:bg-neutral-600/40 hover:cursor-pointer">
                <p className="text-xl transition-all duration-300 group-hover:scale-105 group-hover:font-medium group-hover:drop-shadow-innerText">
                    Full Stack Developer
                </p>
            </div>
        </div>
    )
}