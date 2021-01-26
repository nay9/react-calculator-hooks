import {useState, useCallback} from 'react';


const Calculator = () => {
    const [result, setResult] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);


    const updateNum1 = useCallback((e) =>{
        setNum1(parseInt(e.target.value))
        }, [])

    const updateNum2 = useCallback((e) =>{
        setNum2(parseInt(e.target.value))
        }, [])
    
    return <div>  
    <input placeholder="num1" value={num1} type="number" onChange={updateNum1}></input>
    <input placeholder="num2" value={num2} type="number" onChange={updateNum2}></input>
    <h1>{result}</h1>
    <h1>{num1} {num2}</h1>
    
    </div>
}


export default Calculator;