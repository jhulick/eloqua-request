# eloqua-request

## Get the Code

      $ git clone git@git:scarney/eloqua-request.git
      $ cd eloqua-request
      $ npm install

## Usage
### GET
      var Eloqua = require('eloqua-request');
      var eloqua = new Eloqua('http://secure.eloqua.com', 'site', 'user', 'pw');
      eloqua.get('/API/REST/2.0/settings/dashboard/home?depth=complete&extensions=e10', function(err, response){
        ...
      });

### PUT
      var data = {};
      var Eloqua = require('eloqua-request');
      var eloqua = new Eloqua('http://secure.eloqua.com', 'site', 'user', 'pw');
      eloqua.put('/API/REST/2.0/assets/email/?extensions=e10', data, function(err, response){
        ...
      });
      
### POST
      var data = {};
      var Eloqua = require('eloqua-request');
      var eloqua = new Eloqua('http://secure.eloqua.com', 'site', 'user', 'pw');
      eloqua.post('/API/REST/2.0/assets/email/1?extensions=e10', data, function(err, response){
        ...
      });
      
### DELETE
      var Eloqua = require('eloqua-request');
      var eloqua = new Eloqua('http://secure.eloqua.com', 'site', 'user', 'pw');
      eloqua.remove('/API/REST/2.0/assets/email/1?extensions=e10', function(err, response){
        ...
      });