const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const combinedSchema = new Schema({
  labor: {
    numberOfMen: { type: Number, required: true },
    hoursOfWork: { type: Number, required: true },
    typeOfWork: {
      type: String,
      enum: ['Straight Time', 'Overtime', 'Prevailing Wage'],
      required: true,
    },
    price: { type: Number, required: true },
  },
  material: {
    type: { type: String, enum: ['Pipe', 'Fitting'], required: true },
    size: { type: String, enum: ['1.5', '2.5'], required: true },
    length: { type: Number },
    kind: { type: String, enum: ['Elbow', 'Tee'] },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  signage: {
    comboCurbBox: { type: Boolean },
    comboLocation: { type: Boolean },
    callFDNY: { type: Boolean },
  },
  systemType: {
    combo: { type: Boolean },
    sprinkler: { type: Boolean },
    standPipe: { type: Boolean },
  },
  typeOfBuilding: {
    centralStation: { type: Boolean },
    firePump: { type: Boolean },
    jockeyPump: { type: Boolean },
    localPump: { type: Boolean },
  },
});

const CombinedData = mongoose.model('CombinedData', combinedSchema);

module.exports = CombinedData;