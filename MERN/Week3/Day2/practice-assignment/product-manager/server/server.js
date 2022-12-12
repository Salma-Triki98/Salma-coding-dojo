const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.ennv.PORT || 8000;
const DB_NAME = 'Project';


//MIDDLEWARE
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }))



require('./config/mongoose.config')(DB_NAME)
require('./routes/projects.routes')(app)

app.listen(PORT, () =>{console.log(`This server is running on PORT ${PORT}🔥🔥` );})