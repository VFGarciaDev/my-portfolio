import { Button } from "@/components/general/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/general/dropdown-menu"
import { US, BR } from 'country-flag-icons/react/3x2'
import { MdOutlineLanguage } from "react-icons/md";

export function MenuLanguage() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
                <Button variant="outline" size="icon">
                    <MdOutlineLanguage className="w-full h-full m-1"/>
                    <span className="sr-only">Change Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-0 flex flex-col gap-2">
                <DropdownMenuItem
                    className="flex items-center gap-2"
                    onClick={() => ""}>
                    <BR title="Brasil" className="w-10 rounded" />
                    PT-BR
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="flex items-center gap-2"
                    onClick={() => ""}>
                    <US title="United States" className="w-10 rounded" />
                    EN-US
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}