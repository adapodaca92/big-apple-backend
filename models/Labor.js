const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laborSchema = new Schema({
  numberOfMen: { type: Number, required: true },
  hoursOfWork: { type: Number, required: true },
  typeOfWork: {
    type: String,
    enum: ['Straight Time', 'Overtime', 'Prevailing Wage'],
    required: true,
  },
  price: { type: Number, required: true },
});

const Labor = mongoose.model('Labor', laborSchema);

module.exports = Labor;