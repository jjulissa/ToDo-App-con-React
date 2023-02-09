import {useState} from 'react'


export default function Form({datos, estableceDatos}) {  


    const [tarea, setTarea] = useState(""); 
    const [prioridades, setPrioridades] = useState(""); 
    const [etiquetas, setEtiquetas] = useState(""); 
    

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
                        time: showTime, 
                        etiquetas: etiquetas         
                }])  

    } 

    const handleChange = (event) => { 
        setPrioridades(event.target.value)
    }

    return ( 
        <div className="formDiv"> 
            <form action="#" className="form" onSubmit={add}> 

                <div> 
                    <label htmlFor='' >Write your Homework here: </label>  
                    <input onChange={event => setTarea(event.target.value)} placeholder="   Write your homework here" type="text" id="nameTarea" value={tarea} name="nameTarea"/>  
                </div>

                <div className="prioridad"> 
                    <label htmlFor=''>Prioridades: </label>
                    <select value={prioridades} onChange={handleChange} name='priority'>
                        <option value="alta"  style={{color: "#00FFF6"}} >Alta</option>
                        <option value="media" style={{color: "#FB2576"}} >Media</option>
                        <option value="baja" style={{color: "#E14D2A"}}>Baja</option>
                    </select>
                </div> 

                <div> 
                    <label htmlFor='' >Write your Etiquetas here: </label>
                    <input onChange={event => setEtiquetas(event.target.value)} type="text" id="etiqueta" value={etiquetas} name="etiqueta" placeholder="  Etiquetas: Trabajo,Clase, Etc..." />  
                </div>
                <button id="btnAgregar" type="submit">Add</button> 

            </form> 
        </div>
    )
    
}