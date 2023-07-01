import { useEffect, useState } from 'react'
import { Cotizacion } from './components/Cotizacion'
import Formulario from './components/Formulario'
import image from './assets/logo-crypto.png'
import './App.css'

function App() {
  const [ busqueda, guardarBusqueda ] = useState ({
    criptomoneda :'',
    moneda: '',
  })
  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState({})

  const {criptomoneda , moneda} = busqueda

  const resetForm = () => {
    guardarBusqueda({
      criptomoneda: '',
      moneda: '',
    })
    guardarResultado({
      resultado:''
    });
    guardarConsulta({
      consultar:''
    })
  };

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
      

      <div className="bg-white py-10 px-10 rounded-xl flex:wrap "> {/* mt: margin top */}
      
        <h2 className="font-black text-center lg:text-4xl  md:text-2xl  ">Cotizador de criptomonedas</h2>
        <div class= "mt-10 w-10  lg:w-20 m-auto mb-10" >
          <img class ="image-logo-bitcoin rounded-xl" src={image} />
        </div>
        
        <div className='md:flex  m-auto'>
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsulta={guardarConsulta}
            /> 
            <Cotizacion
            resultado={resultado}
            onReset={resetForm}
            />
          </div>
      </div>
      </>
    )
}


export default App
