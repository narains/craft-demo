import React from 'react';
import Field from './components/field';
import { DispatchProvider } from './context/fieldContext';
/**
 * Main application
 */
function App () {
	return (
		<div className="App">
			<DispatchProvider>
				<Field />
			</DispatchProvider>
		</div>
	);
}

export default App;
