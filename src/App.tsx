import Teste from './Teste'
import EstiloGlobal from './styles'
import { useState, useEffect } from 'react'
import { Dna } from 'react-loader-spinner'
import './app.css'

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
          <Teste />
        </>
      )}
    </>
  )
}

export default App
