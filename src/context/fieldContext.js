import React, { useReducer, createContext } from 'react';
import { INITIAL_ERROR_STATE, INITIAL_FIELD_STATE, INITIAL_SUBMIT_STAGE } from '../Constants';
import errorReducer from '../reducers/errorReducer';
import fieldReducer from '../reducers/fieldReducer';
import submitReducer from '../reducers/submitReducer';

// Creating Context in order to access global state from child components
const DispatchContext = createContext(null);

// const DispatchContext = React.createContext(initialFieldState);

const DispatchProvider = ({ children }) => {
	// const [state, dispatch] = useReducer(reducer, initialFieldState);
	const [error, dispatchError] = useReducer(errorReducer, INITIAL_ERROR_STATE);
	const [field, dispatchField] = useReducer(fieldReducer, INITIAL_FIELD_STATE);
	const [submit, dispatchSubmit] = useReducer(submitReducer, INITIAL_SUBMIT_STAGE);

  	// Global Dispatch Function
  	const dispatch = action =>
    [dispatchError, dispatchField, dispatchSubmit].forEach(fn => fn(action));

	// Global State
	const state = {
		error,
		field,
		submit
	};

	return (
		<DispatchContext.Provider value={{ state, dispatch }}>
			{children}
		</DispatchContext.Provider>
	);
};

export { DispatchContext, DispatchProvider };
