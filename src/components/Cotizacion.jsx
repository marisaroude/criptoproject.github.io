
export const Cotizacion = ({resultado}) => {

  //El método Object.keys() devuelve un array de
  //las propiedades names de un objeto, en el mismo 
  //orden como se obtienen en un loop normal
  if (Object.keys(resultado).length === 0) return null

  return (
    <div className="w-1/2 lg:w-3/5 ">
      <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xls'>
           <h2 className='font-bold text-2xl mt-5 mb-10 text-left'>Cotización:</h2>
           <p className='font-bold mb-3 text-gray-700 uppercase'>
              Cotización del día: {resultado.PRICE}
           </p>
           <p className='font-bold mb-3 text-gray-700 uppercase'>
              Precio más alto del día{resultado.HIGHDAY}
           </p>
           <p className='font-bold mb-3 text-gray-700 uppercase'>
              Precio más bajo del día: {resultado.LOWDAY}
           </p>
           <p className='font-bold mb-3 text-gray-700 uppercase'>
              Variación última 24h:' {resultado.OPEN24HOUR}
           </p>
           </div>     
      </div>
    )
}
