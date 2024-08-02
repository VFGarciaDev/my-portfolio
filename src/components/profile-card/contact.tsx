import Image from "next/image"
import { contactList } from "@/data/contact-list"

export default function ProfileContact() {
    return (
        <section className="h-full flex flex-col justify-evenly border-y-2 border-neutral-500">
            {contactList.map((value, index) => (
                <div key={index} className="flex items-center gap-4">
                    <a
                        className="hover:scale-110 transition-transform hover:drop-shadow-innerIcon"
                        href={value.href}>
                        <Image
                            className="size-10"
                            src={value.icon} alt={value.label}
                            width={96} height={96} />
                    </a>
                    <div>
                        <p className="text-xl leading-none font-semibold italic tracking-wider">{value.label}</p>
                        <p className="text-lg">{value.info}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}