const express = require('express');
/* Include {mergeParams; true} in file where the nested params reside.
	mergeParams tells apiRouter to merge parameters that are created on 
	this set of routes with the ones from its parents  
*/
const apiRouter = express.Router({ mergeParams: true });

// Load Todo model
const Todo = require('../../../models/Todo');
// Load Pet model
const Pet = require('../../../models/Pet');
// Load Owner model
const Owner = require('../../../models/Owner');

// @route   GET api/v1/todos/test
// @desc    Tests todos route
// @access  Public
apiRouter.get('/test', (req, res) => res.json({ message: 'Todos does work!' }));

// @route   GET api/v1/todos/all
// @desc    Lists all todos route
// @access  Public
apiRouter.get('/', (req, res) => {
	Todo.find()
		.then((todos) => {
			if (todos) {
				console.log('just testing for now');
				res.json(todos);
			} else {
				res.status(404).json({ todos: 'There is nothing on your todos list' });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// @route   POST api/v1/todos
// @desc    Create or edit todos route
// @access  Public
apiRouter.post('/create', (req, res) => {
	// build new todo document
	const newTodo = new Todo({
		itemname: req.body.itemname,
		completed: req.body.completed,
		updatecatround: req.body.updatecatround,
		meetnewclient: req.body.meetnewclient,
		meettime: req.body.meettime,
		approxmeetduration: req.body.approxmeetduration
	});
	// Save new todo document
	newTodo
		.save()
		.then((createdTodo) => res.json(createdTodo))
		/*
				Todo.create(req.body)
					.then((newTodo) => {
						if (newTodo) {
							res.status(201).json(newTodo);
							
						} else {
							res.status(404).json({ newTodo: 'There is nothing new todo' });
						}
					})
					*/
		.catch((err) => {
			//console.log(err);
			res.status(500).json(err);
		});
});

// @route   GET api/v1/todos/:todoId
// @desc    Get a specific todo route
// @access  Public
apiRouter.get('/:todoId', (req, res) => {
	console.log(req.params.todoId);
	Todo.findById(req.params.todoId)
		.then((foundTodo) => {
			if (foundTodo) {
				console.log("Here");
				res.json(foundTodo);
			} else {
				res.status(404).json({ TodoNotFound: 'There are no todos' });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// @route   POST api/v1/todos/:todoId
// @desc    Update todos route
// @access  Public

//Use {new:true} to return the new document
apiRouter.post('/:todoId', (req, res) => {
	Todo.findOneAndUpdate({ _id: req.params.todoId},req.body, {new: true})
		.then((updatedTodo) => {
			if (updatedTodo) {
				res.json(updatedTodo);
			} else {
				res.status(404).json({ updateOfTodo: 'Could not update todos' });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// @route   DELETE api/v1/todos/:todoId
// @desc    Delete todos route
// @access  Public
apiRouter.delete('/:todoId', (req, res) => {
	Todo.deleteOne({ _id: req.params.todoId })
		.then(() => {
			res.json({ item: 'has now been deleted...' });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// @route   GET api/v1/todos/:petId/pets/new
// @desc    Form to RENDER new todo's pet route - probably
// accessed thru ToDo page. If so, IS THIS HOW?
// @access  Public
apiRouter.get('/:petId/pets/new', (req, res) => {
	Pet.findById(req.params.petId).then((pet) => {
		Pet.find().then((_pet) => {
			console.log('addDataPet', {
				/*newarrivaldate, expectedexitdate, actualexitdate, */ pet
			});
			//res.json('addDataPetForm', { newarrivaldate, expectedexitdate, actualexitdate, pets });
		});
	});
});

// @route   POST api/v1/owners/:ownerId/pets
// @desc    Form to RECEIVE new todos pet route: ALTHOUGH its a POST
// request, its actual usage is NOT for INSERTing documents, BUT for
// ADDing "REFERENCES TO other DOCUMENTS" to a specific owner's (pets) document
// @access  Public

//Have to add "todoId" in params
apiRouter.post('/:petId/pets/:todoId', (req, res) => {
	const addDataPet = new Pet({
		newarrivaldate: req.body.newarrivaldate,
		expectedexitdate: req.body.expectedexitdate,
		actualexitdate: req.body.actualexitdate
	});
	console.log("Adding pet");
	console.log(addDataPet);

	/* 
	 Update command used is $addToSet instead of $push
	 to avoid duplicate insertion. If we add a new pet to
	 the list of pets, it wont duplicate itself if its already
	 existing in the list.
	*/
	console.log(req.params.petId);
	Pet.findByIdAndUpdate(req.params.petId, {
		newarrivaldate: req.body.newarrivaldate,
			expectedexitdate: req.body.expectedexitdate,
			actualexitdate: req.body.actualexitdate }
	).then((pet) => {
		console.log('newarrivaldate', 'expectedexitdate', 'actualexitdate', 'pet');
		console.log(pet);
		return res.redirect(`/api/v1/todos/${req.params.todoId}`);
	});
});

module.exports = apiRouter;
