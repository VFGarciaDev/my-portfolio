import './styles/App.css'
import { ThemeProvider } from './components/theme-provider/theme-provider'
import { Header } from './components/header/header'
import { Home } from './components/hero/home'
import { About } from './components/about/about'
import { Contact } from './components/contact/contact'
import { Footer } from './components/footer/footer'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Home />
        <About />

        <Contact />
        <Footer />
    </ThemeProvider>
  )
}

export default App