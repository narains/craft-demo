import React, { useContext } from 'react';
import Button from '../../../elements/button';
import MessageBox from '../../../elements/messageBox';
import ErrorList from '../../../elements/errorList';
import { MOCK_URL, OPERATIONS, MAX_CHOICES } from '../../../Constants';
import { DispatchContext } from '../../../context/fieldContext';
import FieldService from '../../../services/mockService';
import {
	BUTTON_SAVE,
	BUTTON_CLEAR,
	FIELD_LABEL,
	FIELD_SAVE_ERROR,
	SAVE_FAILED,
	SAVE_SUCCESSFUL,
	REQUIRED_FIELD,
	REACHED_MAX_LIMIT_FOR_CHOICES
} from '../../../MessageBundle';
import {
	FieldFooterWrapper, FieldFooterButtonWrapper, FieldFooterMessageWrapper
} from './style';
import ValidationUtil from '../../../helper/validation';

const FieldFooter = () => {
	const { state, dispatch } = useContext(DispatchContext);

	const handleFormSubmit = async event => {
		event.preventDefault();
		dispatch({
				type: OPERATIONS.CLEAR_ERROR
			});

		const errors = validateInputFields(state);
		if (errors.label.length > 0 || errors.default.length > 0) return;

		console.log('Logging POST data', state.field);

		dispatch({ type: OPERATIONS.SUBMIT_STARTED });

		try {
			const responseJson = await FieldService.saveField(
				MOCK_URL,
				state.field
			).then(resp => resp.json());

			dispatch({ type: OPERATIONS.SUBMIT_COMPLETE, response: responseJson });
		} catch (error) {
			dispatch({
				type: OPERATIONS.SUBMIT_ERROR,
				errorMessage: FIELD_SAVE_ERROR
			});
		}
	};

	const validateInputFields = state => {
		const errors = {};
		const defaultValue = state.field.default;

		// Checking for label field
		errors['label'] = [];
		if(ValidationUtil.isFieldEmpty(state.field.label)){
					errors['label'].push(`${FIELD_LABEL} : ${REQUIRED_FIELD}`);
				}	

		// Checking for default field
		errors['default'] = [];
		if(defaultValue 
			&& !state.field.choices.some(choice => choice.name === defaultValue)
			&& ValidationUtil.hasReachedMaxLimit(state.field.choices, MAX_CHOICES)){
					errors['default'].push(REACHED_MAX_LIMIT_FOR_CHOICES(MAX_CHOICES))
				}

		dispatch({
			type: OPERATIONS.SET_ERROR_ON_SUBMIT,
			payload: {
				errors
				}
		});

		return errors;
   }

	// const handleCancelForm = event => {
	// 	event.preventDefault();
	// 	console.log('CANCEL BUTTON CLICKED');
	// };

	const handleClearForm = event => {
		event.preventDefault();
		dispatch({ type: OPERATIONS.CLEAR });
	};


	return (
		<FieldFooterWrapper>
			<FieldFooterButtonWrapper>
				<Button text={BUTTON_SAVE} action={handleFormSubmit} theme={ { size: '1.5rem', color: '#1B8728' } } />
				{/* <Button text={BUTTON_CANCEL} action={handleCancelForm} /> */}
				<Button text={BUTTON_CLEAR} action={handleClearForm} theme={ { size: '1.5rem', color: '#D93829' } } />
			</FieldFooterButtonWrapper>
			<FieldFooterMessageWrapper>
				{state.submit.submitted &&
					<MessageBox text={SAVE_SUCCESSFUL} theme={ { color: '#1B8728' } }></MessageBox>}
				{state.submit.errorMessage &&
					<MessageBox text={SAVE_FAILED} theme={ { size: '1.5rem', color: '#D93829' } }></MessageBox>}
			</FieldFooterMessageWrapper>
			<ErrorList errors={state.error.label} />
			<ErrorList errors={state.error.default} /> 
		</FieldFooterWrapper>
	);
};

export default FieldFooter;
