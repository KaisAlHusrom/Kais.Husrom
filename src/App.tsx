
import { HelmetProvider } from "react-helmet-async"
import { CustomRouterProvider, LangProvider, ThemeProvider } from "./contexts"


function App() {

  return (
    <HelmetProvider>
      <ThemeProvider>
        <LangProvider>
          <CustomRouterProvider />
        </LangProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
