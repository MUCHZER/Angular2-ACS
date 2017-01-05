var express = require('express');
var app = express();

app.get('/test/:id', function(req, res){
    user = {
        1: 'Jean',
        2: 'Francis'
    };
    if ( user[ req.params.id ] ) {        
        res.status(200).send( user[ req.params.id ] );
    } else {
        res.status(500).send('Something broke!')
    }
});


app.listen(8080, function () {
  console.log('API started on port 8080 :)');
})
