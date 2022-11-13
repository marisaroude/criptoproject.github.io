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
   
    const {moneda} = busqueda
    
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

        if(moneda.trim() === '' ) {
            guardarError(true)
            return
        }

        guardarError(false)
        guardarConsulta(true)

        // pasarlo al componente principal
        console.log('Enviando formulario')
        }
        
        

    

    return (
        <div className="w-2/5 lg:w-2/5 mx-auto ">
            <h2 className="font-black text-3xl text-center">Cotizador de criptomonedas</h2>    

            <p className="text-lg mt-5 text-center">
                Seleccione el tipo de moneda y {" "}
                <span className="text-yellow-400 font-bold">Cotizalas</span>
            </p>

            <form 
                onSubmit = {handleSubmit}
                className="bg-white shadow-md text-left ">
                
                {error? 
                <p className="text-red-600 font-bold">(*) Debe seleccionar un tipo de moneda</p>
                : null
                }  
                       


                <div className="mb-5">
                    <label htmlFor="Moneda">Tipo de moneda (*)</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <select  
                    id = "moneda" 
                    className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" 
                    name = "moneda"
                    value = {moneda}
                    onChange = {handleChange}
                    >
                        <option value = ''>Seleccionar... </option>
                        <option value = 'dolar'>Dólares Estadounidenses</option>
                        <option value = 'peso'>Pesos Argentinos </option>
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