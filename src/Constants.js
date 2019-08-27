export const TYPE = [
	{ label: 'Multi-Select', value: 'multiSelect' },
	{ label: 'Single-Select', value: 'singleSelect' }
];

export const ORDER = [
	{ label: 'Display choices in Alphabetical Order', value: 'alphabetical' },
	{ label: 'Display choices in Top Down Order', value: 'topDown' },
	{ label: 'Display choices in Bottom Up Order', value: 'bottomUp' }
];

export const MOCK_URL = 'http://www.mocky.io/v2/566061f21200008e3aabd919';

export const MAX_CHOICES = 1;

export const OPERATIONS = {
	ADD_CHOICE: 'add_choice',
	DELETE_CHOICE: 'delete_choice',
	REORDER_CHOICE_LIST: 'reorder_choice',
	SET_ERROR: 'set_error',
	INPUT_CHANGE: 'input_change',
	CHECK_BOX_CHANGE: 'checkbox_change',
	SUBMIT_STARTED: 'submit_started',
	SUBMIT_COMPLETE: 'submit_completed',
	SUBMIT_ERROR: 'submit_error'
};

// Setting initial state for the Global reducer
export const INITIAL_FIELD_STATE = {
	label: '',
	type: 'multiSelect',
	required: false,
	default: '',
	choices: [],
	displayOrder: 'alphabetical'
};

export const INITIAL_ERROR_STATE = {
	label: [],
	default: [],
	addChoice: [],
	editChoices: []
};

export const INITIAL_SUBMIT_STAGE = {
	submitted: false,
	loading: false,
	errorMessage: '',
	response: ''
};
