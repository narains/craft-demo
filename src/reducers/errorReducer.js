import { INITIAL_ERROR_STATE, OPERATIONS } from '../Constants';

export default (state, action) => {
	switch (action.type) {
    // case OPERATIONS.ADD_CHOICE:
	// 	return {
	// 		...state,
	// 			addChoices: [
	// 				...state.field.choices,
	// 				{
	// 					id: uuid(),
	// 					name: action.payload.choice,
	// 					isEditing: false
	// 				}
	// 			]
	// 		// error: {
	// 		// 	...state.error,
	// 		// 	addChoice: []
	// 		// }
	// 	};
	case OPERATIONS.SET_ERROR_ON_SUBMIT:
	return {
		...state,		
		...action.payload.errors	
	};
	case OPERATIONS.HANDLE_CHANGE_FOR_ADD_CHOICE:
	return {
		...state,		
			addChoice: action.payload.errors	
	};
	// case OPERATIONS.HANDLE_CHANGE_FOR_EDIT_CHOICE:
	// 		return {
	// 			...state,
	// 				editChoices: [
	// 					...state.editChoices,
	// 					{
	// 						id: action.payload.choice.id,
	// 						error: [
	// 							ValidationUtil.checkIfUnique(
	// 								state.field.choices,
	// 								action.payload.choice
	// 							)
	// 						]
	// 					}
	// 				]
	// 		};
	// case OPERATIONS.UPDATE_CHOICE:
	// 		return {
	// 			...state,
	// 			field: {
	// 				...state.field,
	// 				choices: state.field.choices.map(choice => {
	// 					const modifiedChoice = action.payload.choice;

	// 					return choice.id === modifiedChoice.id ? modifiedChoice : choice;
	// 				}

	// 				)
	// 			},
	// 			error: {
	// 				...state.error,
	// 				editChoice: []
	// 			}
	// 		};
	case OPERATIONS.CLEAR:
		return {
			...state,
			...INITIAL_ERROR_STATE
		};
	case OPERATIONS.CLEAR_ERROR:
		return {
			...state,
			...INITIAL_ERROR_STATE
		};
    default:
		return { ...state };
	}
};