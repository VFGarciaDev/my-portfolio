import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './assets/styles/App.css'
import { Menu } from './components/menu/menu'
import { Profile } from './components/profile/profile'
import { ThemeProvider } from './components/theme-provider/theme-provider'
import { About } from './pages/about/about'
import { Portfolio } from './pages/portfolio/portfolio'
import { Tools } from './pages/tools/tools'
import { Contact } from './pages/contact/contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/about",
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

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Profile />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App