if (!window.Intl){
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}
window.IntlRelativeFormat = require('intl-relativeformat');
var intlMessageFormat = require('intl-messageformat');
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var es = require ('./es');
var en = require ('./en-US');
var MESSAGES = {};
MESSAGES.es =es;
MESSAGES['en-US'] = en;
var locale = 'en-US';
module.exports = {
	message: function (text, opts) {
	//objeto vacio inicializado
	opts = opts || {};
	var msg = new intlMessageFormat(MESSAGES[locale][text],locale, null);
	return msg.format(opts);
	},
	date: new IntlRelativeFormat(locale)
 }
	

