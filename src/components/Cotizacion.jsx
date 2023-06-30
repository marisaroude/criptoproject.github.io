
export const Cotizacion = ({resultado, onReset}) => {

  //El método Object.keys() devuelve un array de
  //las propiedades names de un objeto, en el mismo 
  //orden como se obtienen en un loop normal
  if (Object.keys(resultado).length === 0) return null

  return (
    <div className="w-4/5 lg:w-3/5 m-auto ">
      <div className=' mx-5 my-10  bg-yellow-300 shadow-xl px-10 py-5 rounded-xl '>
           <h2 className=' font-bold text-2xl mt-5 mb-10 text-left'>Cotización:</h2>
               <div className=" flex flex-wrap">
                  <h2 className='font-bold mb-2 ' >Cotización del día:</h2>
                  <p className="ml-2 font-bold text-gray-700  ">{resultado.PRICE}</p>
               </div>
               <div className=" flex flex-wrap">
                  <h2 className='font-bold mb-2 ' >Precio más alto del día:</h2>
                  <p className="ml-2 font-bold text-gray-700">{resultado.HIGHDAY}</p>
               </div>
               <div className=" flex flex-wrap">
                  <h2 className='font-bold mb-2 ' > Precio más bajo del día:</h2>
                  <p className="ml-2 font-bold text-gray-700">{resultado.LOWDAY}</p>
               </div>
               <div className=" flex flex-wrap">
                  <h2 className='font-bold mb-2 ' > Variación última 24h:</h2>
                  <p className="ml-2 font-bold text-gray-700">{resultado.OPEN24HOUR}</p>
               </div>
                    
      </div>
      {Object.keys(resultado).length !== 0 && (
        <button className="text-yellow-400 font-bold" onClick={onReset}>
          Nueva cotización
        </button>
      )}
   </div>
      
    )
}
