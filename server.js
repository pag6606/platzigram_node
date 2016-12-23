//generando las variables de node para cargar las librerías 
var express = require('express');
var app = express();
//implementando pug como librería de vistas 
app.set('view engine','pug');
//definir carpeta publica accesible
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
	//llaamar al motor de vistas (nombre de archivo, objeto )
	res.render('index',{'title':'Platzigram'});
});

app.get('/signup',function(req,res){
	//llaamar al motor de vistas (nombre de archivo, objeto )
	res.render('index', {'title':'Platzigram-sigunp'});
});

app.get('/signin',function(req,res){
	//llaamar al motor de vistas (nombre de archivo, objeto )
	res.render('index',{'title':'Platzigram-signin'});
});
app.listen(3000, function(err){
	if (err){
		return console.log('hubo un error', process.exit(1));
	}
	console.log("Escuchando en el puerto 3000");
})