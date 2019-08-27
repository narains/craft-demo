import { INITIAL_SUBMIT_STAGE, OPERATIONS } from '../Constants';

export default (state, action) => {
	switch (action.type) {
    	// Handling form submit
	case OPERATIONS.SUBMIT_STARTED:
		return { ...state, submitted: false, loading: true };

	case OPERATIONS.SUBMIT_COMPLETE:
		return {
			...state,
			submitted: true,
			response: action.response,
			errorMessage: '',
			loading: false
		};

	case OPERATIONS.SUBMIT_ERROR:
		return {
			...state,
			submitted: false,
			errorMessage: action.errorMessage,
			loading: false
		};

	case OPERATIONS.CLEAR:
		return {
			...state,
			...INITIAL_SUBMIT_STAGE
		};

	default:
		return { ...state };
	}
};