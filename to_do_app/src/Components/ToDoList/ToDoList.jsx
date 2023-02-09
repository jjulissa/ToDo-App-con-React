import btnDone from "../../Assets/btnDone.png"
import btnDelete from "../../Assets/btnDelete.png" 


export default function List({datos}) { 
    // let cadaTarea = document.querySelectorAll(".cadaTask"); 
    

    function done(event) {  
        event.target.parentNode.classList.add("tachada"); 
        // console.log(event); 
        // cadaTarea.forEach(el => { 
        //     el.classList.add("tachada")
        // })
        // cadaTarea.classList.add("tachada")
        // cadaTarea.style.text = 'line-through'; 
    }

    function delet(event) {  
        event.target.parentNode.remove(); 
        // cadaTarea.forEach(element => { 
        //     element.remove();
        // })

    //    cadaTarea.remove();
    } 

    function ascendente() { 
        datos.sort((a,b) => a.date - b.date); 

    } 

    function descendente() { 
        datos.sort((a,b) => b.date - a.date);
    }

    return ( 
        <> 
            <div className="cajaTask"> 
                <div className="btnAsDes"> 
                    <button onClick={ascendente}>Ascendente</button> 
                    <button onClick={descendente}>Descendente</button> 
                </div>

                    {datos.map ((task, i) => { 
                        return <div className="cadaTask" key={i} > 
                            <br/>
                            Date: {task.date}, <br/>
                            Time: {task.time}, <br/>
                            Homework: {task.nameTarea}, <br/> 
                            Priority: {task.priority}, <br/> 
                            Etiquetas: {task.etiquetas}, <br/> 
                            <img width="50px" src={btnDone} alt="img" onClick={done} />
                            <img width="50px" src={btnDelete} onClick={delet} alt="img"/> 
                            <br/> 
                            <br/> 
                            <br/> 
                        </div>
                    })}  

            </div> 
        </>
    )
    
}