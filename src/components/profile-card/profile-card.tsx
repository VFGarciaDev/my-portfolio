import ProfileHeader from "./header"
import ProfileContact from "./contact"
import ProfileFooter from "./footer"

export const ProfileCard = () => {

    return (
        <aside className="grid grid-rows-[0.5fr_1fr_0.3fr] justify-items-center items-center gap-5 w-max h-full rounded-2xl py-6 px-8  bg-neutral-800 ">
            <ProfileHeader />

            <ProfileContact />

            <ProfileFooter />
        </aside>
    )
}