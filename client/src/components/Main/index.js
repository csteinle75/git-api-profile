import React, {Component} from 'react'
import {getProfile, getRepos} from 'actions/githubActions'
import {Redirect} from 'react-router-dom'

class Main extends Component{
	state = {
		uname: ''
	}
	handleSubmit = (e) => {
		e.preventDefault()
		getProfile(this.state.uname)
		getRepos(this.state.uname)
		this.setState({
			redirect: true
		})
	}
	handleChange = (e) => {
		e.preventDefault()
		this.setState({
			uname: e.target.value
		})
	}

	render(){
		return(
			<div>
				<form>
					<input type='text' onChange={this.handleChange} value={this.state.uname} placeholder='Enter a github username' />
					<button onClick={this.handleSubmit}>Submit</button>
				</form>
			</div>
		)
	}
}

export default Main