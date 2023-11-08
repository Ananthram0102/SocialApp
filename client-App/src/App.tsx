import './App.css'
import DuckItem from './DuckItem'
import { ducks } from  './Demo'

function App(){
  return(
  <div>
  <h1>
        Reactivities
      </h1>
      {ducks.map(duck => (
         <DuckItem duck ={duck}/>
      ))}
    </div>
)}
export default App
