var page  = require('page');
var empty = require('empty-element');
var title = require('title');
var yo = require('yo-yo');
var template = require('./template.js');
var main = document.getElementById('main-container');
page('/signup', function(ctx, next){	
	title('Platzigram - Signup');
	empty(main).appendChild(template);
});