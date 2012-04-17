# eloqua-request

## Get the Code

```bash
$ git clone git@git:scarney/eloqua-request.git
$ cd eloqua-request
$ npm install
```

## Usage
### GET

```javascript
var Eloqua = require('eloqua-request');
var eloqua = new Eloqua('site', 'user', 'pw');
eloqua.get('/API/REST/2.0/settings/dashboard/home?depth=complete&extensions=e10', function(err, response){
  ...
});
```

### PUT

```javascript
var data = {};
var Eloqua = require('eloqua-request');
var eloqua = new Eloqua('site', 'user', 'pw');
eloqua.put('/API/REST/2.0/assets/email/?extensions=e10', data, function(err, response){
  ...
});
```
      
### POST

```javascript
var data = {};
var Eloqua = require('eloqua-request');
var eloqua = new Eloqua('site', 'user', 'pw');
eloqua.post('/API/REST/2.0/assets/email/1?extensions=e10', data, function(err, response){
  ...
});
```

### DELETE

```javascript
var Eloqua = require('eloqua-request');
var eloqua = new Eloqua('site', 'user', 'pw');
eloqua.remove('/API/REST/2.0/assets/email/1?extensions=e10', function(err, response){
  ...
});
```

## License

`eloqua-request` is released under the [MIT License](http://www.opensource.org/licenses/mit-license.html):

    The MIT License (MIT)

    Copyright (C) 2012 Eloqua

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
