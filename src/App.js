import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './app/store';
import { afunction } from './app/features/add_elements/addElementSlice';

function App() {

  const [data, setData] = useState([]);

  let state = useSelector(store=>store)

  let dispatch = useDispatch()

  let add = () => {

    let x = parseInt(prompt('enter the fund'))

    /*   alert (x) */
   /*  setData([...data,x]) */

   dispatch(afunction(x))
  }

  return (
    <div className="App">
      <button onClick={() => { add() }}>Add fund</button>
      {console.log(state.rootReducer.value)}

      {
        state.rootReducer.value.length >0 &&
        state.rootReducer.value.map((cv, idx, arr) => {
          console.log(cv)
          return <h1 key={idx}>{cv}</h1>
        })

      }
    </div>
  );
}

export default App;
