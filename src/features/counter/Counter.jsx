// The react-redux library has a set of custom hooks to make writing Redux code easier and faster for us.
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"; // our actions
import { useState } from "react";

const Counter = () => {
	// Our components can't talk to the Redux store directly, so "useSelector" takes care of talking to the Redux store behind the scenes.
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	// NOTE: Our components in React can't talk to the Redux store directly, 'Cause we're not allowed to 'import' it into our component files,
	// what are we supposed to do if we wanan use "dispatch()" method which comes from the "store"???
	// Well, there is a way to do it! It's called "useDispatch()" hook!
	// Yeah, You can use useDispatch hook to have access to the dispatch method.
	// The useDispatch hook does that for us, and gives us the actual dispatch method from the Redux store.
	// SYNTAX: const dispatch = useDispatch()
	// From there, we can dispatch actions when the user does something like clicking on a button

	// NOTE: In a React + Redux app, your global state should go in the Redux store, and your local state should stay in React components.

	const [incrementAmount, setIncrementAmount] = useState(0);

	const addValue = Number(incrementAmount) || 0;

	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(reset());
	};

	return (
		<section>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(increment())}>+</button> <button onClick={() => dispatch(decrement())}>-</button>
			</div>

			<br />
			<input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
			<br />
			<br />

			<div>
				<button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button> <button onClick={resetAll}>Reset</button>
			</div>
		</section>
	);
};

export default Counter;
