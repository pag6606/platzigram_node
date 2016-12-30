var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
module.exports = function (pictures){
	var el= yo`<div class="container timeline">
		<div class="row">
			<div class="col s12 m6 offset-m1 l6 offset-l1">
			${pictures.map(function (pic){
				return picture(pic);
			})}
			</div>
		<div class="col s12 m4 l4">
			<canvas id="myChart" width="400" height="400"></canvas>
		</div>
		</div>
		</div>
	`;
		return layout(el);
} 
