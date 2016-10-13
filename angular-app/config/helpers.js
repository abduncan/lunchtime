var path = require('path');

var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  var newpath = path.join.apply(path, [_root].concat(args));
  console.log(newpath);
  return newpath;
}

exports.root = root;