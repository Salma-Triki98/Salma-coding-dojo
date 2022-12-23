const dotenv = require('dotenv').config({path:'./config/config.env'});
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const cors = require('cors');


const DB_NAME = 'Auth';

//MIDDLEWARE
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }))
app.use(cookieParser());
// Change the app.use(cors()) to the one below


require('./routes/user.routes')(app)
require('./routes/author.routes')(app);

require('./config/mongoose.config')(DB_NAME);
// require('./routes/author.routes')(app);
app.listen(process.env.PORT, () =>{console.log(`This server is running on PORT ${process.env.PORT}🔥🔥` );})

