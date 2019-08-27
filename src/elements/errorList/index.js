import React from 'react';
import {
	ErrorListWrapper
} from './style';

const ErrorList = ({ errors }) => errors && errors.length > 0 ? (
	<ErrorListWrapper>
		{errors.map(error => (
			<span key={error}>{error}</span>
		))}
	</ErrorListWrapper>
) : null;

export default ErrorList;
