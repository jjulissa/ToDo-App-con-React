import {useState} from 'react'
import btnDone from "../../Assets/btnDone.png"
import btnDelete from "../../Assets/btnDelete.png"

export default function Form({datos, estableceDatos}) {  


    const [tarea, setTarea] = useState(""); 
    const [prioridades, setPrioridades] = useState(""); 
    const [imgDone, setImgDone] = useState(btnDone); 
    const [imgDel, setImgDel] = useState(btnDelete)

let prescription = {
    prescriptionDate: new Date(),  
    prescriptionExpirationDate: 0  
};

let date = new Date(new Date(prescription.prescriptionDate).setDate(prescription.prescriptionDate.getDate() + prescription.prescriptionExpirationDate)).toDateString();


const time = new Date();

const showTime = time.getHours() 
    + ':' + time.getMinutes() 
    + ":" + time.getSeconds(); 

    function add(event) {
        event.preventDefault();   

            estableceDatos(prev => 
                [...prev, { 
                        nameTarea: event.target.nameTarea.value, 
                        priority: event.target.priority.value, 
                        date: date, 
                        time: showTime  
                          
                        
                }])

        // estableceDatos(prev => [...prev ])

    } 

    const handleChange = (event) => { 
        setPrioridades(event.target.value)
    }

    return ( 
        <div className="form"> 
            <form action="#" className="" onSubmit={add}>
                <label htmlFor='' for="tipoTarea">Write your homework here: </label>  
                    <input onChange={event => setTarea(event.target.value)} placeholder="Write your homework here" type="text" id="nameTarea" value={tarea} name="nameTarea"/>  

                <div className="prioridad"> 
                    <label htmlFor=''>Prioridades: </label>
                    <select value={prioridades} onChange={handleChange} name='priority'>
                        <option value="alta"  style={{color: "#00FFF6"}} >Alta</option>
                        <option value="media" style={{color: "#FB2576"}} >Media</option>
                        <option value="baja" style={{color: "#E14D2A"}} selected>Baja</option>
                    </select>
                </div> 

                <button id="btnAgregar" type="submit">Add</button> 

                {/* <div value = {imgDone}> 
                    <img width="50px" src={btnDone} alt="img"/ >
                    <img width="50px" src={btnDelete} alt="img" />
                </div> */}
            </form> 
        </div>
    )
    
}