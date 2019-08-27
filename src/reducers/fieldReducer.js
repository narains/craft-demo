import { INITIAL_FIELD_STATE, OPERATIONS } from '../Constants';
import uuid from 'uuid/v4';

export default (state, action) => {
    switch (action.type) {
	// Handling events
	case OPERATIONS.HANDLE_INPUT_CHANGE:
		return {
			...state,
			[action.payload.name]: action.payload.value
		};
	case OPERATIONS.HANDLE_CHECK_BOX_CHANGE:
		return {
			...state,
				[action.payload.name]: !state[action.payload.name]
		};
		// Handling CRUD operations for Choices
	case OPERATIONS.ADD_CHOICE:
		return {
			...state,
				choices: [
					...state.choices,
					{
						id: uuid(),
						name: action.payload.choice,
						isEditing: false
					}
				]
			// error: {
			// 	...state.error,
			// 	addChoice: []
			// }
		};
	case OPERATIONS.UPDATE_CHOICE:
	case OPERATIONS.HANDLE_CHANGE_FOR_EDIT_CHOICE:
			return {
				...state,
					choices: state.choices.map(choice => {
						const modifiedChoice = action.payload.choice;

						return choice.id === modifiedChoice.id ? modifiedChoice : choice;
						})
			};	
	case OPERATIONS.DELETE_CHOICE:
		return {
			...state,
				choices: state.choices.filter(
					choice => choice.id !== action.payload.id
				)
		};

		// case OPERATIONS.UPDATE_CHOICE:
		//   return { ...state, vistorImageBase64: action.payload.vistorImageBase64 };
	case OPERATIONS.REORDER_CHOICE_LIST:
		return {
			...state,
				choices: action.payload.updatedChoices
		};
	case OPERATIONS.CLEAR:
		return {
			...state,
			...INITIAL_FIELD_STATE
		};
    default:
		return { ...state };
	}
};