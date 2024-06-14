import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

interface ButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
    href: string,
    icon?: React.ReactNode,
    children?: React.ReactNode,
}

export const buttonVariants = cva("bg-white/80 text-black rounded-full outline outline-2 outline-white/60 outline-offset-4", {
    variants: {
        buttonType: {
            icon:
                "text-2xl p-2 hover:bg-white hover:outline-white",
            text:
                "flex items-center gap-5 text-xl italic font-semibold py-2 px-10",
        }
    }
})

export const LinkButton = ({ href, buttonType, className, icon, children }: ButtonProps) => {

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ buttonType, className }))}
        >
            {icon}
            {children}
        </a>
    )
}