import btnDone from "../../Assets/btnDone.png"
import btnDelete from "../../Assets/btnDelete.png" 


export default function List({datos}) { 

    function done(event) {

    }

    function delet(event) {
        // estableceDatos({})
    } 

    return ( 
        <> 
            <div className="btn"> 
                {/* <div >  */}
                    {datos.map ((task, i) => { 
                        return <div key={i} > Date: {task.date}, <br/>
                            Time: {task.time}, <br/>
                            Homework: {task.nameTarea}, <br/> 
                            Priority: {task.priority}, <br/> 
                            <img width="50px" src={btnDone} alt="img" onClick={done} />
                            <img width="50px" src={btnDelete} onClick={delet} alt="img"/> 
                            <br/> 
                            <br/>
                        </div>
                    })}  
                        {/* <img width="50px" src={btnDone} alt="img" onClick={done}/ >
                        <img width="50px" src={btnDelete} onClick={delet} alt="img"/>   */}

                {/* </div>  */}

            </div> 
        </>
    )
    
}