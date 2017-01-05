var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/button/:id', function(req, res){
    
    user = {
        1: 'Jean',
        2: 'Francis'
    };

    if ( user[ req.params.id ] ) {        
        res.status(200).send( { 
            'res': user[ req.params.id ] 
        });
    } else {
        res.status(500).send('Something broke!')
    }

});


app.post('/test/', function(req, res){
    
    user = {
        1337: 'r3k7'
    };

    if ( user[ req.params.id ] ) {        
        res.status(200).send( { 
            'res': user[ req.params.id ] 
        });
    } else {
        res.status(200).send('C\'est bon!');
    }
    
});

app.listen(8080, function () {
  console.log('API started on port 8080 :)');
})
