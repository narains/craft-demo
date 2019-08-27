const FieldService = {
	getField: function (id) {
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
			displayAlpha: true,
			default: 'North America'
		};
	},
	saveField: function (url, fieldJson) {
		// Add the code here to call the API (or temporarily, just log fieldJson to the console)
		// todo(shruti): Use async await
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
