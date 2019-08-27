import React from 'react';
import FieldBody from './fieldBody';
import FieldFooter from './fieldFooter';
import Title from '../../elements/title';
import { FIELD_TITLE } from '../../MessageBundle'; // Get strings from message bundle
import {
	FieldWrapper
} from './style';

const Field = () => (
	<FieldWrapper>
		<Title text={FIELD_TITLE} theme={ { color: '#45687F', backgroundColor: '#DCEDF5' } }/>
		<FieldBody />
		<FieldFooter />
	</FieldWrapper>
);

export default Field;
