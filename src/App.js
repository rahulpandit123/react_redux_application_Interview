import "./styles.css";
import {useDispatch,useSelector} from 'react-redux';
import store from './store';
import {addNumber, subNumber} from './Action';
export default function App() {

  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);
  // let myState = 5;
 
 return (
   <div className="App">
      <h1>React Redux Application</h1>
      <button onClick={()=> dispatch(subNumber(1))}>decrement </button>
      <span> Store Value = {myState} </span>
      <button onClick={() => dispatch(addNumber(2))}>Increment </button>
    </div>
 )

  
}