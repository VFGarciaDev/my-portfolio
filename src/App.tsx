import './assets/styles/App.css'

import { ThemeProvider } from './context/theme-provider/theme-provider'
import { Profile } from './components/profile/profile'

import { RouterProvider } from 'react-router-dom'
import { routes } from './pages/routes'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Profile />
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App