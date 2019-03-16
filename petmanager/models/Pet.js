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
	pettype: {
      // Array used to enable multiple pet types if needed 
			type: [String]
	},
  petbreed: {
		type: String
	},
	avatar: {
		type: String
  },
  firsteverarrivaldate: {
    type: Date,
    default: ''
  },
  datecalc: [
		{
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
