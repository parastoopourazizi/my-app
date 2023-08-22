import User from "./User"
import './App.css'

function App(){
    return(
        <div className="row">
            <User name='milad' age='22' height='180' />
            <User name='parastoo' age='28' height='160'/>
            <User name='sara' age='25' height='30'  />
           
            

        </div>
    )
}
export default App