import React from 'react'

export const Cotizacion = ({resultado}) => {
    const {name,wind,raw} = resultado

    if(!name) return null 


    //agregar logica de vaciar el form

  return (
    <div className='card-panel white col s12'>
        <div className='black-text'>
           <h2>La cotización en { moneda } es: </h2>
           <p className='Cotización del día'>
               {raw.type} 
           </p>
           <p className='Precio más alto del día'>
               {main.temp} C°
           </p>
           <p className='Precio más bajo del día'>
               {main.temp} C°
           </p>
           <p className='Variación última 24hs'>
               {main.temp} C°
           </p>
        </div>
    </div>
  )
}

