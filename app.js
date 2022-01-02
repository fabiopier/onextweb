const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
var morgan = require('morgan');
var helmet = require('helmet');
const sequelize = require('./server/utils/database');
const app = express();

app.use(helmet());

const logStream = fs.createWriteStream(path.join(__dirname,'access.log'), { flags : 'a'});
app.use(morgan('combined',{ stream : logStream}));

app.use(bodyParser.json()); //application/json

// Serve static files....
app.use(express.static(__dirname + '/dist/ums'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ums/index.html'));
});

//Routing
app.use('/',router);
require("./server/routes")(app);

const Post = require('./server/models/post');
const User = require('./server/models/user');
const Like = require('./server/models/like');
const Books = require('./server/models/book');

console.log("start lettura log");
User.hasMany(Post);
Post.belongsTo(User,{ constraints : true, onDelete : 'CASCADE'});

User.belongsToMany(Post,{ through : Like});
Post.belongsToMany(User,{ through : Like});

sequelize.authenticate().then( rec => {
    console.log('Connessione Stabilita con Successo');
    //sequelize.sync({force:true})
    sequelize.sync()
    .then(user => {
        console.log('Sync al DB con Successo');
    }).catch( err => {
        console.log('Sync al DB Error:',err);
    });
}).catch( err => {
     console.log('Connession al DB Error:',err);
});

console.log('start node server' + process.env.PORT);

app.listen(process.env.PORT || 3000);



