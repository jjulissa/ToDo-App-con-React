import './App.css'; 
import Formulario from "./Components/Formularios/Form" 
import ToDoList from "./Components/ToDoList/ToDoList"
import {useState} from 'react' 
import TagMenu from './Components/TagsMenu/TagsMenu'

function App() { 
  
  const [datos, estableceDatos] = useState([]); 


  return ( 

    <div className="App"> 
          <h1>React ToDo App</h1> 

      <div className="AppOne"> 

        <main className="mainOne">  
          <br/> 

          <Formulario 
          estableceDatos = {estableceDatos}
          />  

          <ToDoList 
          datos = {datos} 
          /> 

        </main>  

        <section className="mainTwo"> 
            <TagMenu datos={datos}/>
        </section>

      </div> 

      <h1>@JJulissa</h1> 
    </div>
    
  ); 
}

export default App;
