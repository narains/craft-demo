import React from 'react';
import {
	ErrorListWrapper
} from './style';

const ErrorList = ({ errors }) => errors && errors.length > 0 ? (
	<ErrorListWrapper>
		{errors.map(error => (
			<li key={error}>{error}</li>
		))}
	</ErrorListWrapper>
) : null;

export default ErrorList;
