const mongoose = require('mongoose');

const TypeOfBuildingSchema = new mongoose.Schema({
    centralStation: { type: Boolean },
    firePump: { type: Boolean },
    jockeyPump: { type: Boolean },
    localPump: { type: Boolean },
});

module.exports = mongoose.model('TypeOfBuilding', TypeOfBuildingSchema);