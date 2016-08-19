var firebase = require('firebase');
var express = require('express');
var app = express();



console.log('Loading IoT express App');
app.set('view engine', 'pug');
app.set('port', (process.env.PORT || 5000));


firebase.initializeApp({
  databaseURL: 'https://iotproject-245bf.firebaseio.com/',
  serviceAccount: 'iotProject-fb606820497a.json'
});

var ref = firebase.database().ref('iot-arduino-basic');
var msgsReference = ref.child('messages');


app.get('/',function(req,res,next){
	res.render('ledController',{});
});

app.get('/on', function (req, res) {
	var date = new Date();
	msgsReference.push({
  		state: 'on',
  		date:date.toString()
	});
  res.render('ledController',{state:'on'});
});

app.get('/off', function (req, res) {
	var date = new Date();
  	msgsReference.push({
  		state: 'off',
  		date:date.toString()
	});
  res.render('ledController',{state:'off'});
});

app.get('/fadein', function (req, res) {
	var date = new Date();
  	msgsReference.push({
  		state: 'fadein',
  		date:date.toString()
	});
  res.render('ledController',{state:'fadein'});
});

app.get('/fadeout', function (req, res) {
	var date = new Date();
  	msgsReference.push({
  		state: 'fadeout',
  		date:date.toString()
	});
  res.render('ledController',{state:'fadeout'});
});

app.get('/blink', function (req, res) {
	var date = new Date();
  	msgsReference.push({
  		state: 'blink',
  		date:new Date()
	});
  res.render('ledController',{state:'blink'});
});





app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});


