import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

interface CardProps {
    src: string,
    name: string,
    url?: string,
    description?: string,
}

export const ToolCard = ({ src, name, description }: CardProps) => {
    return (
        <div className="bg-slate-500/50 px-5 py-1 rounded-[8px]">
            <HoverCard>
                <HoverCardTrigger className="flex items-center gap-2">
                    <img className="w-5 h-5" src={src} />
                    <p className="text-lg cursor-default">{name}</p>
                </HoverCardTrigger>
                <HoverCardContent>
                    {description}
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}