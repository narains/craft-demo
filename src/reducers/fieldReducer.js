import { INITIAL_FIELD_STATE, OPERATIONS } from '../Constants';
import uuid from 'uuid/v4';

export default (state, action) => {
	switch (action.type) {
	// Handling events
	case OPERATIONS.INPUT_CHANGE:
		return {
			...state,
			[action.payload.name]: action.payload.value
		};
	case OPERATIONS.CHECK_BOX_CHANGE:
		return {
			...state,
			[action.payload.name]: !state[action.payload.name]
		};
	// Handling operations for Choices
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
		};
	case OPERATIONS.DELETE_CHOICE:
		return {
			...state,
			choices: state.choices.filter(
				choice => choice.id !== action.payload.id
			)
		};
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
