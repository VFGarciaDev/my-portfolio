import { Menu } from "@/components/menu-card/menu";
import { createBrowserRouter } from "react-router-dom";
import { About } from "./about/about";
import { Portfolio } from "./portfolio/portfolio";
import { Tools } from "./tools/tools";
import { Contact } from "lucide-react";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        children: [
            {
                path: "/",
                element: <About />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/tools",
                element: <Tools />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ]
    },
])