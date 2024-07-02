import { Outlet } from "react-router-dom"
import { Header } from "../header/header"

export const Menu = () => {


    return (
        <main className="bg-neutral-800 h-[80vh] w-[60vw] rounded-2xl overflow-hidden flex flex-col">
            <Header />
            <div className="grow pb-5 container">
                <div className="bg-neutral-950/40 h-[calc(80vh-5.25rem)] container py-5 rounded-b-xl overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}