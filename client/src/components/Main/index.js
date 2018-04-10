import React, {Component} from 'react'

class Main extends Component{

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('submitted')
	}

	render(){
		return(
			<div>
				<input type='text' onSubmit={this.handleSubmit} placeholder='Enter a username' />
				<button>Submit</button>
			</div>
		)
	}
}

export default Main