import { createSlice } from "@reduxjs/toolkit";

// What is a SLICE? Redux logic is typically organized into files called "slices"
// A "slice" contains the reducer logic and actions related to a specific feature / section of the Redux state
// Redux Toolkit's createSlice API generates action creators and action types for each individual reducer function you provide
// So, We don't have to worry about action creators, actions and so on.

const initialState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},

		decrement: (state) => {
			state.count -= 1;
		},

		reset: (state) => {
			state.count = 0;
		},

		incrementByAmount: (state, action) => {
			state.count += action.payload; // payload is the same as value, payload = value or amount
		},
	},
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
