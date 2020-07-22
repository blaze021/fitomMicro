import React from 'react';
import './App.css';
import NavComponent from './components/NavComponent';
import FootComponet from './components/FootComponent';
import HomeContent from './components/HomeContent';

function App() {
	return (
		<div className="App">
			<NavComponent />
			<HomeContent />
			<FootComponet />
		</div>
	);
}

export default App;
