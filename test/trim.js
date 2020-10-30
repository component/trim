var should = require('should');

var trim = require('..');

describe('trim(str)', function(){
  it('should trim leading / trailing whitespace', function(){
    trim('  foo bar  ').should.equal('foo bar');
    trim('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar');
  })

  it('should supply implementation of trim() if needed', function() {
    var str1 = new String('  foo bar  ');
    str1.trim = null;
    str1.trimLeft = null;
    str1.trimRight = null;
    trim(str1).should.equal('foo bar');
  })
})

describe('.left(str)', function(){
  it('should trim leading whitespace', function(){
    trim.left('  foo bar  ').should.equal('foo bar  ');
  })
})

describe('.right(str)', function(){
  it('should trim trailing whitespace', function(){
    trim.right('  foo bar  ').should.equal('  foo bar');
  })
})
