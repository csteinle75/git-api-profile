var express = require('express');
var router = express.Router();
const apiurl = 'https://api.github.com/users/'
const request = require('request')



/* GET home page. */
router.get('/:user', function(req, res){
	var requester = req.params.user

	console.log(apiurl + requester)
	request.get({url: apiurl + requester, headers:{
		'User-Agent':requester,
		'Access-Control-Allow-Origin': '*'
	}}, (err, resp, body) => {
		console.log(body)
		res.json(JSON.parse(body))
	})
})

router.get('/:user/repos', function(req, res){
	var requester = req.params.user

	console.log(apiurl + requester + '/repos')
	request.get({url: apiurl + requester + '/repos', headers:{
		'User-Agent':requester
	}}, (err, resp, body) => {
		console.log(body)
		res.json(JSON.parse(body))
	})
})


module.exports = router;
