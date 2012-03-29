# eloqua-request

## Getting the Code

      $ git clone git@git:scarney/eloqua-request.git
      $ cd eloqua-request
      $ npm install

## Use It

    ### GET
      var Eloqua = require('eloqua-request');
      var eloqua = new Eloqua('http://secure.eloqua.com', 'site', 'user', 'pw');
      eloqua.get('/API/REST/2.0/settings/dashboard/home?depth=complete&extensions=e10', function(err, response){
        if (err !== null) console.log("ERROR!: " + err);
        console.log(response);
      });
      
    ### PUT
    
    ### POST
    
    ### DELETE