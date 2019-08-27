import React, { useState, useContext } from 'react';
import Button from '../../../elements/button';
import Input from '../../../elements/input';
import ErrorList from '../../../elements/errorList';
import { MAX_CHOICES, OPERATIONS } from '../../../Constants';
import { DispatchContext } from '../../../context/fieldContext';
import ValidationUtil from '../../../helper/validation';
import {
	BUTTON_ADD_NEW_CHOICE,
	CHOICE_ALREADY_EXISTS,
	REACHED_MAX_LIMIT_FOR_CHOICES
} from '../../../MessageBundle';
import { ChoiceAddWrapper, ChoiceAddInputWrapper } from './style';

const ChoiceAdd = () => {
	const [choice, setChoice] = useState('');
	const { state, dispatch } = useContext(DispatchContext);

	const handleInputChange = event => {
		event.preventDefault();
		const { value } = event.target;

		setChoice(value);
	};

	const handleFormSubmit = event => {
		const errors = validateInput(choice);

		if (errors.addChoice.length > 0) return;

		if (choice) {
			dispatch({
				type: OPERATIONS.ADD_CHOICE,
				payload: {
					choice
				}
			});
			setChoice('');
		}

		event.preventDefault();
	};

	const validateInput = value => {
		const errors = {
			'addChoice': []
		};

		if (ValidationUtil.hasReachedMaxLimit(state.field.choices, MAX_CHOICES) && choice) {
			errors['addChoice'].push(REACHED_MAX_LIMIT_FOR_CHOICES(MAX_CHOICES));
		}

		if (ValidationUtil.ifExists(state.field.choices, value)) {
			errors['addChoice'].push(CHOICE_ALREADY_EXISTS(value));
		}
		dispatch({
			type: OPERATIONS.SET_ERROR,
			payload: {
				errors
			}
		});

		return errors;
	};

	return (
		<ChoiceAddWrapper>
			<ChoiceAddInputWrapper>
				<Input
					value={choice}
					type="text"
					name="name"
					handleChange={handleInputChange}
				/>
				<Button text={BUTTON_ADD_NEW_CHOICE} action={handleFormSubmit} theme={ { size: '1rem', color: '#008094' } }/>
			</ChoiceAddInputWrapper>
			<ErrorList errors={state.error.addChoice} />
		</ChoiceAddWrapper>
	);
};

export default ChoiceAdd;
