var thunkify = require('thunkify');
var temp     = require('temp');

var methods = [
  'mkdir',
  'open',
  'cleanup'
];

methods.forEach(function (method) {
  temp[method] = thunkify(temp[method]);
});

module.exports = temp;
