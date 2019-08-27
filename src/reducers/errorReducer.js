import { INITIAL_ERROR_STATE, OPERATIONS } from '../Constants';

export default (state, action) => {
	switch (action.type) {
	case OPERATIONS.SET_ERROR:
		return {
			...state,
			...action.payload.errors
		};
	case OPERATIONS.CLEAR:
		return {
			...state,
			...INITIAL_ERROR_STATE
		};
	default:
		return { ...state };
	}
};
