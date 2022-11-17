import { useEffect, useState } from 'react'
import { Cotizacion } from './components/Cotizacion'
import Formulario from './components/Formulario'
import image from './assets/logo-crypto.png'

function App() {
  const [ busqueda, guardarBusqueda ] = useState ({
    criptomoneda :'',
    moneda: '',
  })
  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState({})

  const {criptomoneda , moneda} = busqueda

  useEffect(() => {
    const consultarApi = async () =>{
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      guardarResultado(resultado.DISPLAY[criptomoneda][moneda])

      console.log(resultado)


    }
    consultarApi();
    //funcion async nos tiene q devolver un result dentro de esta funcion
    //probar un console log. dentro de app tengo q ver la info de postman
  }, [consultar])

    return (
      <>

      <div className="container  mt-20 flex:wrap m-auto"> {/* mt: margin top */}
      <h2 className="font-black text-center text-5xl">Cotizador de criptomonedas</h2>

        <div className='mt-12 md:flex'>
  
          <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsulta={guardarConsulta}
          /> 
          <Cotizacion
          resultado={resultado}
          />
          
          
      </div>
      </div>
      </>
    )
}


export default App
