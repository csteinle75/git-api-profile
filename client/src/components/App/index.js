import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Main from 'components/Main'
import User from 'components/User'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        	<h3>Gets data but needs CORS turned on. Results currently only in console</h3>
        	<Route path="/" component={Main}/>
        	<Route path="user/:uname" component={User}/>
        </div>
      </Router>
    )
  }
}

export default App
