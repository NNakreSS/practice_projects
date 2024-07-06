import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/reducers/counterSlice";
function Counter() {
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>{counterValue}</div>
      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: "1rem" }}
      >
        decrement
      </button>
      <button onClick={() => dispatch(decrement())}>increment</button>
      <br />
      <br />
      <input onChange={(e) => setAmount(e.target.value)} type="number" />
      <br />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by amount
      </button>
    </>
  );
}

export default Counter;
