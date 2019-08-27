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

export const MAX_CHOICES = 3;

export const OPERATIONS = {
	ADD_CHOICE: 'add_choice',
	CANCEL_CHOICE: 'cancel_choice',
	CLEAR_ERROR: 'clear_error',
	DELETE_CHOICE: 'delete_choice',
	REORDER_CHOICE_LIST: 'reorder_choice',
	HANDLE_CHANGE_FOR_ADD_CHOICE: 'handle_change_for_add_choice',
	HANDLE_CHANGE_FOR_EDIT_CHOICE: 'edit_choice',
	HANDLE_INPUT_CHANGE: 'handle_input_change',
	HANDLE_BLUR: 'handle_blur',
	HANDLE_CHECK_BOX_CHANGE: 'handle_checkbox_change',
	SET_ERROR_ON_SUBMIT: 'set_error_on_submit',
	SUBMIT_STARTED: 'activity_save',
	SUBMIT_COMPLETE: 'customer_create',
	SUBMIT_ERROR: 'submit_error',
	UPDATE_CHOICE: 'update_choice'
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
