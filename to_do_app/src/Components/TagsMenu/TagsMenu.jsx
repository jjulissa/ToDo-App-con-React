


export default function menu({datos}) { 
    const etiquetasCuenta = 
                    datos.reduce((etiquetas, tarea) => { 
                   if(etiquetas[tarea.etiquetas]) { 
                        etiquetas[tarea.etiquetas] += 1
                   } else { 
                    etiquetas[tarea.etiquetas] = 1 
                   } 
                   return etiquetas
                }, {})

    return ( 
        <> 
            <div className="MenuEtiquetas"> 
            <h1>All Category</h1> 
                {Object.keys(etiquetasCuenta).map((etiq, i) => { 
                    return <div key={i}> 
                        {etiq} 
                    </div> 
                })}

            </div>
        </>
    )
}