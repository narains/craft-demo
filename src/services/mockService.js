const FieldService = {
	/**
   * Returns field object
   */
	getField () {
		return {
			label: 'Sales region',
			required: false,
			choices: [
				'Asia',
				'Australia',
				'Western Europe',
				'North America',
				'Eastern Europe',
				'Latin America',
				'Middle East and Africa'
			],
			type: 'multiSelect',
			displayOrder: 'alphabetical',
			default: 'North America'
		};
	},
	/**
   * Returns response from the server after making a POST call
   *
   * @param url the url to send the request.
   * @param fieldJson the field object that needs to be saved.
   */
	saveField (url, fieldJson) {
		return fetch(url, {
			method: 'POST',
			body: JSON.stringify(fieldJson),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
	}
};

export default FieldService;
