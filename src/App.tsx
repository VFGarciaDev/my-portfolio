import { ThemeProvider } from './components/theme-provider/theme-provider'
import './styles/App.css'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" children={undefined}>
      
    </ThemeProvider>
  )
}

export default App