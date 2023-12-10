const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
  type: { type: String, enum: ['Pipe', 'Fitting'], required: true },
  size: { type: String, enum: ['1.5', '2.5'], required: true },
  length: { type: Number },
  kind: { type: String, enum: ['Elbow', 'Tee'] },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;