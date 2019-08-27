import React from 'react';
import { CheckboxWrapper } from './style';

const Checkbox = ({ checked, handleChange, name }) => (
	<CheckboxWrapper
		id={name}
		name={name}
		type="checkbox"
		checked={checked}
		onChange={handleChange}
	/>
);

export default Checkbox;
