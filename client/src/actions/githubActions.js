import store from 'services/store'
import axios from 'axios'

export function getProfile(user = "csteinle75"){
	axios.get('http://localhost:3001/' + user).then(resp =>{
		console.log(' successful "get" ')
		console.log(resp.data)
	})
}

export function getRepos(user = "csteinle75"){
	axios.get('http://localhost:3001/' + user + '/repos').then(resp =>{
		console.log('got repos')
		console.log(resp.data)
	})
}