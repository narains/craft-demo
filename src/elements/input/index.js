import React, { Fragment } from 'react';
import ErrorList from '../errorList';
import { InputWrapper } from './style';

const Input = ({ handleBlur, handleChange, inputType, name, value, readOnly, errors, required }) => (
	<Fragment>
		<InputWrapper
			id={name}
			type={inputType}
			value={value}
			name={name}
			onChange={handleChange}
			onBlur={handleBlur}
			readOnly={readOnly}
			required={required}
		/>
		<ErrorList errors={errors} />
	</Fragment>
);

export default Input;
