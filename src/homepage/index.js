var page  = require('page');
var empty = require('empty-element');
var template = require('./template.js');
var title = require('title');
var main = document.getElementById('main-container');
page('/', function(ctx, next){
	title('Platzigram ');	
	var pictures =[
	{
		user : {
			username : 'pag66',
			avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/11781623_10153453626489286_8718569145785621201_n.jpg?oh=da7cd344f022def0a13f90522b520e69&oe=5920F8E8'
		},
		url :'img/office.jpg',
		likes: 100,
		liked: false,
		createdAt: new Date()

	},
	{
		user : {
			username : 'pag66',
			avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/11781623_10153453626489286_8718569145785621201_n.jpg?oh=da7cd344f022def0a13f90522b520e69&oe=5920F8E8'
		},
		url :'img/office.jpg',
		likes: 0,
		liked: true,
		createdAt: new Date().setDate(new Date().getDate() -10)
	}
	]; 

	empty(main).appendChild(template(pictures));
});	