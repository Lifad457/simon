import Simon from "./components/Simon"
import { AppContainer } from "./styles/app.css"
import { GlobalStyles } from "./styles/global.css"

function App() {

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Simon />        
      </AppContainer>

    </>
  )
}

export default App
