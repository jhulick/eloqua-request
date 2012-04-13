var should = require('should');
var mockery = require('mockery');

// register allowed modules
mockery.registerAllowable('../index');

// create our mocks
var requestOptions;
mockery.registerMock('request', function(_options, cb){
  requestOptions = _options;
  cb(null, {statusCode: 200}, null);
});
mockery.registerMock('b64', {
  encode: function(s){
    return "BASE_64:" + s;
  }
});

// pull in SUT while intercepting require(...) for mocks
mockery.enable();
var EloquaApi = require('../index');
mockery.disable();

describe('eloqua-request', function(){

  var baseUri = 'http://eloqua/API/';
  var site = 'TestSite';
  var user = 'TestUser';
  var password = 'TestPwd';
  var resource = 'some_resource';
  var base64encodedCredential = 'Basic BASE_64:' + site + '\\' + user + ':' + password;
  var api;

  beforeEach(function(){
    api = new EloquaApi(baseUri, site, user, password);
  });

  describe('#get', function(){

    var err, body;

    beforeEach(function(done){
      api.get(resource, function(_err, _body){
        err = _err;
        body = _body;
        done();
      });
    });

    it('sends the correct URI', function(){
      requestOptions.url.should.eql('http://eloqua/API/some_resource');
    });

    it('does not specify a method', function(){
      should.not.exist(requestOptions.method);
    });

    it('has no body', function(){
      should.not.exist(requestOptions.body);
    });

    it('base-64 encodes Basic Auth creds', function(){
      should.exist(requestOptions.headers);
      should.exist(requestOptions.headers.Authorization);
      requestOptions.headers.Authorization.should.eql(base64encodedCredential);
    });

  });

  describe('#post', function(){

    var err, body;
    var data = {foo: 'bar'};

    beforeEach(function(done){
      api.post(resource, data, function(_err, _body){
        err = _err;
        body = _body;
        done();
      });
    });

    it('sends the correct URI', function(){
      requestOptions.url.should.eql('http://eloqua/API/some_resource');
    });

    it('specifies POST method', function(){
      requestOptions.method.should.eql('POST');
    });

    it('has a body', function(){
      should.exist(requestOptions.body);
      requestOptions.body.foo.should.eql('bar');
    });

    it('base-64 encodes Basic Auth creds', function(){
      should.exist(requestOptions.headers);
      should.exist(requestOptions.headers.Authorization);
      requestOptions.headers.Authorization.should.eql(base64encodedCredential);
    });
  });

  describe('#put', function(){

    var err, body;
    var data = {foo: 'bar'};

    beforeEach(function(done){
      api.put(resource, data, function(_err, _body){
        err = _err;
        body = _body;
        done();
      });
    });

    it('sends the correct URI', function(){
      requestOptions.url.should.eql('http://eloqua/API/some_resource');
    });

    it('specifies PUT method', function(){
      requestOptions.method.should.eql('PUT');
    });

    it('has a body', function(){
      should.exist(requestOptions.body);
      requestOptions.body.foo.should.eql('bar');
    });

    it('base-64 encodes Basic Auth creds', function(){
      should.exist(requestOptions.headers);
      should.exist(requestOptions.headers.Authorization);
      requestOptions.headers.Authorization.should.eql(base64encodedCredential);
    });
  });

});
