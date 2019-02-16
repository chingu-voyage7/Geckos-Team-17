const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const PetSchema = new Schema({
	petname: {
		type: String,
		required: 'Please enter pet name'
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'owners'
	},
	petcolour: {
		type: String
	},
	pettypes: {
		type: String
		//enum: ['dog', 'cat', 'bunny rabbit', 'chicken', 'guinea pig', 'other']
  },
  petbreed: {
		type: String
	},
	avatar: {
		type: String
	},
	datecalc: [
		{
			firsteverarrivaldate: {
				type: Date,
				default: ''
			},
			arrivaldatecurrent: {
				type: Date,
				default: Date.now
			},
			expectedexitdate: {
				type: Date
			},
			actualexitdate: {
				type: Date
			}
		}
	],
	createddate: {
		type: Date,
		default: Date.now
	}
});

module.exports = Pet = mongoose.model('pets', PetSchema);
