import React from 'react';
import { SelectWrapper } from './style';

const Select = ({ handleChange, name, options, value }) => (
	<SelectWrapper
		id={name}
		name={name}
		value={value}
		onChange={handleChange}
	>
		{options.map(opt => (
			<option key={opt.value} value={opt.value}>{opt.label}</option>
		))}
	</SelectWrapper>
);

export default Select;
