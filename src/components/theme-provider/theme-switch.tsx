import { Switch } from "../general/switch"
import { useTheme } from "@/components/theme-provider/theme-provider"
import { Moon, Sun } from "lucide-react"

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex items-center gap-2">
            <Moon className="text-[#90C0DF] fill-[#90C0DF] h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <Switch
                defaultChecked={theme === "dark" ? false : true}
                onCheckedChange={(checked) => {
                    if (checked) setTheme("light")
                    if (!checked) setTheme("dark")
                }} />
            <Sun className="text-yellow-400 fill-yellow-400 h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </div>
    )
}