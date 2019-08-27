
import React, { useContext } from 'react';
import { DispatchContext } from '../../../context/fieldContext';
import Choices from '../../choices';
import Checkbox from '../../../elements/checkbox';
import Select from '../../../elements/select';
import Label from '../../../elements/label';
import Input from '../../../elements/input';
import {
	FIELD_CHOICES,
	FIELD_DEFAULT_VALUE,
	FIELD_LABEL,
	FIELD_ORDER,
	FIELD_REQUIRED,
	FIELD_TYPE
} from '../../../MessageBundle';
import { TYPE, OPERATIONS, ORDER } from '../../../Constants';
import { FieldBodyWrapper,  FormGroupWrapper } from './style';

const FieldBody = () => {
	const { state, dispatch } = useContext(DispatchContext);
	
	// Handling events
	const handleInputChange = event => {
		const { name, value } = event.target;

		dispatch({
			type: OPERATIONS.HANDLE_INPUT_CHANGE,
			payload: {
				name,
				value
			}
		});
	};

	const handleCheckBoxChange = event => {
		const { name } = event.target;

		dispatch({
			type: OPERATIONS.HANDLE_CHECK_BOX_CHANGE,
			payload: {
				name
			}
		});
	};

	return (
		<FieldBodyWrapper>
			<FormGroupWrapper>
				<Label label={FIELD_LABEL} />
				<Input
					value={state.field.label}
					type="text"
					name="label"
					handleChange={handleInputChange}
					errors={state.error.label}
				/>				
			</FormGroupWrapper>
			<FormGroupWrapper>
				<Label label={FIELD_TYPE} />
				<Select
					handleChange={handleInputChange}
					options={TYPE}
					value={state.field.type}
					name="type"
				/>
				<Checkbox
					checked={state.field.required}
					handleChange={handleCheckBoxChange}
					name="required"
				/>
				<Label label={FIELD_REQUIRED} />
			</FormGroupWrapper>
			<FormGroupWrapper>
				<Label label={FIELD_DEFAULT_VALUE} />
				<Input
					value={state.field.default}
					type="text"
					name="default"
					handleChange={handleInputChange}
				/>
			</FormGroupWrapper>
			<FormGroupWrapper>
				<Label label={FIELD_CHOICES} />
				<Choices />
			</FormGroupWrapper>
			<FormGroupWrapper>
				<Label label={FIELD_ORDER} />
				<Select
					handleChange={handleInputChange}
					options={ORDER}
					value={state.field.displayOrder}
					name="displayOrder"
				/>
			</FormGroupWrapper>
		</FieldBodyWrapper>
	);
};

export default FieldBody;
