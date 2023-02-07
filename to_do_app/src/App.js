import './App.css'; 
import Formulario from "./Components/Formularios/Form" 
import ToDoList from "./Components/ToDoList/ToDoList"
import {useState} from 'react'

function App() { 
  
  const [datos, estableceDatos] = useState([]); 


  return (
    <div className="App">
      <h1>@JJulissa</h1> 
      <Formulario 
        estableceDatos = {estableceDatos}
       />  

       <ToDoList 
       datos = {datos} 
       /> 

    </div>
  );
}

export default App;
