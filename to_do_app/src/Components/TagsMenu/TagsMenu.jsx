


export default function menu({datos}) { 

    return ( 
        <> 
            <div className="MenuEtiquetas"> 
                {datos.map((etiq, i) => { 
                    return <div key={i}> 
                        {etiq.etiquetas}
                    </div> 
                })}

            </div>
        </>
    )
}