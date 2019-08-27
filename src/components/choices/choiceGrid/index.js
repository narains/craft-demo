import React, { useContext } from 'react';
import Input from '../../../elements/input';
import Button from '../../../elements/button';
import MessageBox from '../../../elements/messageBox';
import { DispatchContext } from '../../../context/fieldContext';
import { OPERATIONS } from '../../../Constants';
import { BUTTON_DELETE } from '../../../MessageBundle';
import Reorder, { reorder } from 'react-reorder';

const ChoiceGrid = () => {
	const { state, dispatch } = useContext(DispatchContext);
	const choices = state.field.choices;

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

	return (
		<div>
			{choices.length > 0 ? (
				<Reorder
					reorderId="choice-list" // Unique ID that is used internally to track this list (required)
					draggedClassName="dragged" // Class name to be applied to dragged elements (optional), defaults to 'dragged'
					lock="horizontal" // Lock the dragging direction (optional): vertical, horizontal (do not use with groups)
					onReorder={onReorder} // Callback when an item is dropped (you will need this to update your state)
				>
					{choices.map(choice => (
						<div key={choice.id}>
							<Input
								type="text"
								name="name"
								value={choice.name}
								readOnly={true}
								disabled={true}
							/>
							<Button
								text={BUTTON_DELETE}
								action={() => deleteChoice(choice.id)}
								theme={ { size: '1rem', color: '#D93829' } }
							/>
						</div>
					))}
				</Reorder>
			) : (
				<MessageBox text={'*No choices added'} theme={ { color: '#D67404' } } />
			)}
		</div>
	);
};

export default ChoiceGrid;
