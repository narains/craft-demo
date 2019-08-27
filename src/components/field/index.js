import React from 'react';
import FieldBody from './fieldBody';
import FieldFooter from './fieldFooter';
import Title from '../../elements/title';
import { FIELD_TITLE } from '../../MessageBundle'; // Get strings from message bundle
import {
	FieldWrapper,
} from './style';

const Field = () => (
	<FieldWrapper>
		<Title primary text={FIELD_TITLE} />
		<form>
			<FieldBody />
			<FieldFooter />
		</form>
	</FieldWrapper>
);

export default Field;
