import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import { useState, useEffect } from 'react'
import { Dna } from 'react-loader-spinner'
import './app.css'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setetaUsandoTemaDark] = useState(false)
  function trocaTema() {
    setetaUsandoTemaDark(!estaUsandoTemaDark)
  }
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      {loading ? (
        <div className="container">
          <Dna
            visible={true}
            height="180"
            width="180"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <>
          <EstiloGlobal />
          <Container>
            <Sidebar trocaTema={trocaTema} />
            <main>
              <Sobre />
              <Projetos />
            </main>
          </Container>
        </>
      )}
    </ThemeProvider>
  )
}

export default App
