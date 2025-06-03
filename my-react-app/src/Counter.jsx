import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);
    
    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)
    }

    const reset = () =>{
        setCount(0)
    }
    
    return(
     <div className="counter-Container">
     <label className="myH1">{count}</label>
     <div className="container">
     <button  className="buttons" onClick={increment}>Increment</button>
     <button  className="buttons" onClick={reset}>Reset</button>
     <button  className="buttons" onClick={decrement}>Decrement</button>
    </div>
    </div>
    );
}

export default Counter