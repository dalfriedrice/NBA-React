import React, { Component } from 'react';

class Subscriptions extends Component{

	constructor(props){
		super(props);

		this.state = {
			email : '',
			error : false,
			success : false
		}
	}

	onChangeInput = (event)=> {

		this.setState({
			email : event.target.value 
		})
	}


	saveUser(value){
		
		const URL_EMAIL = 'http://localhost:3004/subcriptions';

		fetch(URL_EMAIL,{
			method :'POST',
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify({value})
		}).then(res => res.json())
		.then(()=> {
			this.setState({
				email : ''
			})
		})
	}


	clearMsgState(){
		setTimeout(function(){
			this.setState({
				error : false,
				success : false
			})
		}.bind(this),3000)
	}

	handleSubmit = (event)=> {
		
		event.preventDefault();
		let email = this.state.email;
		let regex = /\S+@\S+\.\S+/;
		
		if(regex.test(email)){
		
			this.saveUser(email);
			this.setState({
				success : true,
				error : false
			})

		} else {

			this.setState({
				error : true,
				success : false
			})
		}

		this.clearMsgState();
	}


	render(){
		return(
			<div className="subscribe-panel">
				<h3>Subscribe to us</h3>
				<div>
					<form onSubmit = {this.handleSubmit}>
						<input type="text" 
						placeholder="youremail@email.com"
						value={this.state.email}
						onChange = {this.onChangeInput}
						/>
					</form>
					<div className = {this.state.error ? "error show" : "error"}>
						Check Your Email
					</div>
					<div className = {this.state.success ? "success show" : "success"}>
						Thank You 
					</div>
				</div>
				<small>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
				</small>
			</div>
		)
	}
}

export default Subscriptions;
