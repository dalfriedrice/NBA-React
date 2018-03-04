import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//Components
import Header from './header.js';
import Footer from './footer.js';
import Home from './home.js';
import Teams from './teams.js';
import Team from './team.js';


class App extends Component{
	render(){
		return(
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Home}/>
					<Route exact path="/teams" component={Teams}/>
					<Route exact path="/teams/:id" component={Team}/>
 					<Footer /> 
				</div>
			</BrowserRouter>
		)
	}
}

export default App;	