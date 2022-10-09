
var trim = require('..');

describe('trim(str)', function(){
  it('should trim leading / trailing whitespace', function(){
    trim('  foo bar  ').should.equal('foo bar');
    trim('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar');
    trim('\n\n\nfoo bar').should.equal('foo bar');
    trim('foo bar\n\n\n').should.equal('foo bar');
    trim('').should.equal('');
    trim('      ').should.equal('');
    trim('\n\n\n\n').should.equal('');
    trim('\n\r\n\r').should.equal('');
  });
});

describe('.left(str)', function(){
  it('should trim leading whitespace', function(){
    trim.left('  foo bar  ').should.equal('foo bar  ');
    trim.left('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar\n\r\n\n');
    trim.left('\n\n\nfoo bar').should.equal('foo bar');
    trim.left('foo bar\n\n\n').should.equal('foo bar\n\n\n');
    trim.left('').should.equal('');
    trim.left('      ').should.equal('');
    trim.left('\n\n\n\n').should.equal('');
    trim.left('\n\r\n\r').should.equal('');
  });
});

describe('.right(str)', function(){
  it('should trim trailing whitespace', function(){
    trim.right('  foo bar  ').should.equal('  foo bar');
    trim.right('\n\n\nfoo bar\n\r\n\n').should.equal('\n\n\nfoo bar');
    trim.right('\n\n\nfoo bar').should.equal('\n\n\nfoo bar');
    trim.right('foo bar\n\n\n').should.equal('foo bar');
    trim.right('').should.equal('');
    trim.right('      ').should.equal('');
    trim.right('\n\n\n\n').should.equal('');
    trim.right('\n\r\n\r').should.equal('');
  });
});

describe('trim string in old browser', function () {

  var trimTemp = String.prototype.trim;
  var trimLeftTemp = String.prototype.trimLeft;
  var trimRigthTemp = String.prototype.trimRight;
  var trimStartTemp = String.prototype.trimStart;
  var trimEndTemp = String.prototype.trimEnd;

  this.beforeEach(function() {
    String.prototype.trim = undefined;
    String.prototype.trimLeft = undefined;
    String.prototype.trimRight = undefined;
    String.prototype.trimStart = undefined;
    String.prototype.trimEnd = undefined;
  })

  this.afterEach(function() {
    String.prototype.trim = trimTemp;
    String.prototype.trimLeft = trimLeftTemp;
    String.prototype.trimRight = trimRigthTemp;
    String.prototype.trimStart = trimStartTemp;
    String.prototype.trimEnd = trimEndTemp;
  })

  it('should trim leading / trailing whitespace', function () {
    trim('  foo bar  ').should.equal('foo bar');
    trim('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar');
    trim('\n\n\nfoo bar').should.equal('foo bar');
    trim('foo bar\n\n\n').should.equal('foo bar');
    trim('').should.equal('');
    trim('      ').should.equal('');
    trim('\n\n\n\n').should.equal('');
    trim('\n\r\n\r').should.equal('');
  });

  it('trim.right(str)', function () {
    trim.right('  foo bar  ').should.equal('  foo bar');
    trim.right('\n\n\nfoo bar\n\r\n\n').should.equal('\n\n\nfoo bar');
    trim.right('\n\n\nfoo bar').should.equal('\n\n\nfoo bar');
    trim.right('foo bar\n\n\n').should.equal('foo bar');
    trim.right('').should.equal('');
    trim.right('      ').should.equal('');
    trim.right('\n\n\n\n').should.equal('');
    trim.right('\n\r\n\r').should.equal('');
  });

  it('trim.left(str)', function () {
    trim.left('  foo bar  ').should.equal('foo bar  ');
    trim.left('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar\n\r\n\n');
    trim.left('\n\n\nfoo bar').should.equal('foo bar');
    trim.left('foo bar\n\n\n').should.equal('foo bar\n\n\n');
    trim.left('').should.equal('');
    trim.left('      ').should.equal('');
    trim.left('\n\n\n\n').should.equal('');
    trim.left('\n\r\n\r').should.equal('');
  });
});