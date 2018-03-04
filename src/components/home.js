import React, { Component } from 'react';


//Components
import Featured from './featured.js';
import Subscriptions from './subscriptions.js';
import Blocks from './blocks.js';
import Poll  from './poll.js';


const URL_HOME = 'http://localhost:3004/home';


class Home extends Component{
	
	constructor(props){
		super(props)


		this.state = {
			home : ''
		}
	}

	componentDidMount(){
		fetch(URL_HOME,{
			 method : 'GET'
		})
		.then(response => response.json())
		.then(json => {
			this.setState({
				home : json
			})
		})
	}


	render(){
		return(
			<div>
				<Featured slides = {this.state.home.slider}/>
				<Subscriptions />
				<Blocks blocks = {this.state.home.blocks}/>
				<Poll />
			</div>
		)
	}
}

export default Home;