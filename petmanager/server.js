// npm packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

// app imports
const owners = require('./routes/api/v1/owners');
const todos = require('./routes/api/v1/todos');
const pets = require('./routes/api/v1/pets');
//const pets = require('./routes/api/v1/owners/pets');
//const pets = require('./routes/api/v1/owners/:ownerId/pets');

// globals
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up CORS
const corsOptions = {
	origin: ["*", "http://localhost:3000"], // List of host authorized make cors request. For cross origin cookies specific host should be given. (ex:"http://localhost:3000")
	credentials: true // Must enable for cross origin cookies.
};
app.use(cors(corsOptions));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.set('debug', true);
mongoose.set('useFindOneAndUpdate', true);
mongoose.set('useFindOneAndReplace', true);
mongoose.set('useFindOneAndDelete', true);
mongoose.set('useCreateIndex', true);
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));

//app.get('/', async (req, res) => res.send('Hello NF'));

app.get('/', safeHandler(handler));

function safeHandler(handler) {
	return function(req, res) {
    handler(req. res).catch(error => res.status(500).send(error.message));
  };
}

async function handler(req, res) {
  await new Promise((resolve, reject) => reject(new Error('Hang!')))
  res.send('Hello NF');
}

// Use Routes
app.use('/api/v1/owners', owners);
app.use('/api/v1/todos', todos);
app.use('/api/v1/pets', pets);
//app.use('/api/v1/owners/pets', pets);
//app.use('/api/v1/owners/:ownerId/pets', pets);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log('Server running on port ', port);
});
