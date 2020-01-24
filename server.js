
var express = require('express');
var redis   = require("redis");
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var bodyParser = require('body-parser');
var cifratura = require('./crittografia.js')
var client  = redis.createClient();
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(session({
    secret: 'q1w2e3r4t5',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  30*60}),
    saveUninitialized: false,
    resave: false
}));

var app = express();

app.get('/', function (req, res) {
  if(typeof(req.session.prova) != 'undefined'){
      res.send("La tua ultima digitazione è:" + req.session.prova);
  }
  res.send('Prova a digitare qualcosa nell\'url dopo il \\...');
});

//192.168.0.1:8080/cripto?password=''
app.get('/cripto', function (req, res) {
    var password = req.query.password;
    if(typeof(password) == 'undefined'){
        res.send('Errore nei parametri!');
    } else {
        res.send('Criptografia eseguita con successo <br>' +
        'La password crittografata è: ' + cifratura.funzioneHash(password).pwd);
    }
  });

app.get('*', function (req, res) {
    res.send('Hello World!');
    req.session.prova = req.url;
    res.redirect("/");
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

