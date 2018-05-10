import React from 'react';
import {Header} from './header.js'
import {Main} from './main.js'
import '../styles/App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Main/>
			</div>
		);
	}
}

export default App;
