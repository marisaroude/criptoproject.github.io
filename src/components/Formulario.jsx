import { useState } from 'react'  /* estado de variable, info q almacena por ej la info d un input*/


/*1 - Para seleccionar la moneda, que deberá tener la opción que sea en Pesos
Argentinos y Dólares Estadounidenses.

mostrar:
- Cotización del día
- Precio más alto del día
- Precio más bajo del día
- Variación última 24hs.
*/

const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta}) => {
    //x cada uno de los input se necesita un usestate

    const [ error, guardarError] = useState (false)
    
    const { criptomoneda, moneda} = busqueda
    
    // funcion que coloca los elementos en el state
    const handleChange = (e) => {
    // actualizar el state
    guardarBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    })
    }

    
    const handleSubmit = e =>{
        e.preventDefault() //previene el render, es conveniente ponerlo siempre en formularios

        if(moneda.trim() === '' || criptomoneda.trim() === '') {
            guardarError(true)
            return
        }

        guardarError(false)
        guardarConsulta(true)

        // pasarlo al componente principal
        console.log('Enviando formulario')
        console.log (moneda)
        console.log (busqueda)

        
        }
        
        

    

    return (
        <div className="w-4/5 lg:w-2/4 m-auto ">   
            <p className="text-lg mt-5 mb-10 text-center">
                Seleccione el tipo de moneda y {" "}
                <span className="text-yellow-400 font-bold">Cotizalas</span>
            </p>

            <form 
                onSubmit = {handleSubmit}
                className="bg-white shadow-md text-left ">
                
                {error? 
                <p className="text-red-600 font-bold">(*) Debe completar todos los campos</p>
                : null
                }  
                       


                <div className="mb-5">
                    <label htmlFor="Moneda">Tipo de moneda (*)</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <select  
                    id = "moneda" 
                    className=" border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md  " 
                    name = "moneda"
                    value = {moneda}
                    onChange = {handleChange}
                    >
                        <option value = ''>Seleccionar... </option>
                        <option value = 'USD'>Dólares Estadounidenses</option>
                        <option value = 'ARS'>Pesos Argentinos </option>
                    </select>

                    <label htmlFor="Criptomoneda">Seleccione una criptomoneda (*)</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <select  
                    id = "criptomoneda" 
                    className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" 
                    name = "criptomoneda"
                    value = {criptomoneda}
                    onChange = {handleChange}
               
                    >
                        <option value = ''>Seleccionar... </option>
                        <option value = 'BTC'>Bitcoin</option>
                        <option value = 'THE'>Thether </option>
                        <option value = 'ETH'>Etherotum </option>
                        <option value = 'DOGE'>Dogecoin </option>
                        <option value = 'CAR'>Cardano  </option>
                        <option value = 'LTC'>Litecoin  </option>
                        <option value = 'BNB'>Binance Coin </option>
                        <option value = 'DOT'>Polkadot  </option>
                        <option value = 'XRP'>Ripple  </option>
                        <option value = 'BIT'>BitBay </option>
                        <option value = 'EOS'>Eos  </option>
                        <option value = 'BCH'>Bitcoin cash </option>
                        <option value = 'LINK'>Chainlink  </option>
                        <option value = 'AIDOC'>Aidoc</option>
                        <option value = 'XMR'>Monero </option>
                        <option value = 'NEO'>NEO </option>
                        <option value = 'IOTA'>Uniswap </option>
                        <option value = 'XLM'>Lumens </option>
                        <option value = 'ANT'>Aragon</option>
                        <option value = 'ARAW'> Araw</option>

                    </select>
                </div>

                <input
                    type="submit"
                    value = "Cotizar"
                    className="bg-yellow-400 w-full p-3 text-white uppercase font-bold hover:bg-yellow-400 cursor-pointer transitions-color"
                />


            </form>
        </div>
    );
}
 
export default Formulario;