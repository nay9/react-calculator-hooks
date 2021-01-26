import { useState, useCallback } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const updateNum1 = useCallback((e) => {
    setNum1(parseInt(e.target.value));
  }, []);

  const updateNum2 = useCallback((e) => {
    setNum2(parseInt(e.target.value));
  }, []);

  const calculate = useCallback(
    (e) => {
      if (e.target.value == "+") {
        setResult(num1 + num2);
      } else if (e.target.value == "-") {
        setResult(num1 - num2);
      } else if (e.target.value == "*") {
        setResult(num1 * num2);
      } else if (e.target.value == "/") {
        setResult(num1 / num2);
      }
    },
    [num1, num2]
  );

  const clear = useCallback(
    (e) => {
        setResult(0)
        setNum1("")
        setNum2("")
    },
    []
  );

  return (
    <div>
      <input
        placeholder="num1"
        value={num1}
        type="number"
        onChange={updateNum1}
      />

      <input
        placeholder="num2"
        value={num2}
        type="number"
        onChange={updateNum2}
      />

      <button type="submit" onClick={calculate} value="+">
        +
      </button>
      <button type="submit" onClick={calculate} value="-">
        -
      </button>
      <button type="submit" onClick={calculate} value="*">
        *
      </button>
      <button type="submit" onClick={calculate} value="/">
        /
      </button>
      <button type="submit" onClick={clear}>Clear</button>

      <h1>{result}</h1>
      <h1>
        {num1} {num2}
      </h1>
    </div>
  );
};

export default Calculator;
