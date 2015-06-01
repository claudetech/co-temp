var temp   = require('..').track();
var co     = require('co');
var expect = require('chai').expect;
var fs     = require('co-fs');

describe('co-temp', function () {
  [{name: 'mkdir', test: 'isDirectory'}, {name: 'open', test: 'isFile'}].forEach(function (method) {
    describe(method.name, function () {
      it('should work', function (done) {
        co(function * () {
          var path = yield temp[method.name]('foo');
          if (path.path) {
            path = path.path;
          }
          expect(path).not.to.be.empty;
          var stats = yield fs.stat(path);
          expect(stats[method.test]()).to.be.true;
          yield temp.cleanup();
          var exists = yield fs.exists(path);
          expect(exists).to.be.false;
        }).then(done, done);
      });
    });
  });
});
