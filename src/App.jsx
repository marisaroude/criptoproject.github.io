import { useEffect, useState } from 'react'
import { Cotizacion } from './components/Cotizacion'
import Formulario from './components/Formulario'



function App() {
  const [ busqueda, guardarBusqueda ] = useState ({
    moneda: '',
  })
  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState({})

  const {moneda} = busqueda

  useEffect(() => {
    const consultarApi = async () =>{
      const appID = '1048a548246e8c8ef0b37d2d87975e97e47228114de7aa37a618d54ca335d6ba'
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=${moneda}`
      //const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}&units=metric`

      const respuesta = await fetch (url)
      const resultado = await respuesta.json()
      guardarResultado(resultado)
    }
    
    consultarApi();
    //funcion async nos tiene q devolver un result dentro de esta funcion
    //probar un console log. dentro de app tengo q ver la info de postman
  }, [consultar])

    return (
      <>
      <div className="container  mt-20 flex:wrap"> {/* mt: margin top */}
        <div className='mt-12 md:flex'>
          <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsulta={guardarConsulta}
          /> 
        </div>
        <div className="col m6 s12">
          <Cotizacion
          resultado={resultado}
          />
        </div>
      </div>
      </>
    )
}


export default App
