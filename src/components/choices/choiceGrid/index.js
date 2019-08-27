import React, { useState, useContext } from 'react';
import Input from '../../../elements/input';
import Button from '../../../elements/button';
import MessageBox from '../../../elements/messageBox';
import { DispatchContext } from '../../../context/fieldContext';
import { OPERATIONS } from '../../../Constants';
import {
	BUTTON_CANCEL,
	BUTTON_DELETE,
	BUTTON_EDIT,
	BUTTON_UPDATE
} from '../../../MessageBundle';
import Reorder, { reorder } from 'react-reorder';
import { get } from 'lodash';

const ChoiceGrid = () => {
	const { state, dispatch } = useContext(DispatchContext);
	const choices = state.field.choices;
	// const [choices, setChoices] = useState(state.field.choices);
	const [currentChoice, setCurrentChoice] = useState({
		id: '',
		name: '',
		isEditing: false
	});

	const handleInputChange = index => event => {
		const { value } = event.target;

		// choices[index].name = value;
		setCurrentChoice({
			id: choices[index].id,
			name: value,
			isEditing: true
		});
		// dispatch({
		// 	type: OPERATIONS.HANDLE_CHANGE_FOR_EDIT_CHOICE,
		// 	payload: {
		// 		choice: currentChoice
		// 	}
		// });
		// updateChoice(choice);
	};

	// CRUD operations
	const deleteChoice = id => {
		dispatch({
			type: OPERATIONS.DELETE_CHOICE,
			payload: {
				id
			}
		});
	};

	const onReorder = (event, previousIndex, nextIndex) => {
		reorderChoiceList(reorder(choices, previousIndex, nextIndex));
	};

	const reorderChoiceList = updatedChoices => {
		dispatch({
			type: OPERATIONS.REORDER_CHOICE_LIST,
			payload: {
				updatedChoices
			}
		});
	};

	
	const dispatchUpdate = choice => {
		// todo empty error base of id
		dispatch({
			type: OPERATIONS.UPDATE_CHOICE,
			payload: {
				choice: {
					...choice,
					isEditing: !choice.isEditing
				}
			}
		});
	};

	const cancelEditing = choice => event => {
		event.preventDefault();
		setCurrentChoice({});	
		dispatchUpdate(choice);
	}

	const editChoice = choice => event => {
		event.preventDefault();
		dispatchUpdate(choice);
	}

	const updateChoice = event => {
		event.preventDefault();
		// const hasError = state.error.editChoices
		// 	.find(row => row.id === currentChoice.id)['error'];

		// if (hasError) return;

		dispatchUpdate(currentChoice);
		setCurrentChoice({});	
	};


	return (
		<div>
			{choices.length > 0 ? (
				<Reorder
					reorderId="choice-list" // Unique ID that is used internally to track this list (required)
					draggedClassName="dragged" // Class name to be applied to dragged elements (optional), defaults to 'dragged'
					lock="horizontal" // Lock the dragging direction (optional): vertical, horizontal (do not use with groups)
					onReorder={onReorder} // Callback when an item is dropped (you will need this to update your state)
				>
					{choices.map((choice, index) => (
						<div key={choice.id}>
							<Input
								type="text"
								name="name"
								value={currentChoice.name || choice.name}
								readOnly={!choice.isEditing}
								handleChange={handleInputChange(index)}
								errors={get((state.error.editChoices).find(row => row.id === choice.id), 'error', [])}
							/>
							<Button
								text={choice.isEditing ? BUTTON_UPDATE : BUTTON_EDIT}
								action={
									choice.isEditing
										? updateChoice
										: editChoice(choice)
								}
								theme={ {size: '1rem', color: '#1B8728'} }
							/>
							<Button
								text={choice.isEditing ? BUTTON_CANCEL : BUTTON_DELETE}
								action={
									choice.isEditing
										? cancelEditing(choice)
										: () => deleteChoice(choice.id)
								}
								theme={ {size: '1rem', color: '#D93829'} }
							/>
						</div>
					))}
				</Reorder>
			) : (
				<MessageBox text={'*No choices added'} theme={ {color: '#D67404'} }></MessageBox>
			)}
		</div>
	);
};

export default ChoiceGrid;
