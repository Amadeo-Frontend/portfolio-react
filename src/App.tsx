import EstiloGlobal, { Container } from './styles'
import { useState, useEffect } from 'react'
import { Dna } from 'react-loader-spinner'
import './app.css'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])
  return (
    <>
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
            <Sidebar />
            <main>
              <Sobre />
              <Projetos />
            </main>
          </Container>
        </>
      )}
    </>
  )
}

export default App
