import './styles/App.css'
import { ThemeProvider } from './components/theme-provider/theme-provider'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Home } from './components/hero/home'
// import { About } from './components/about/about'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Home />
        {/* <About /> */}

        <Footer />
    </ThemeProvider>
  )
}

export default App