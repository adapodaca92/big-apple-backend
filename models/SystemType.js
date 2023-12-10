const mongoose = require('mongoose');

const SystemTypeSchema = new mongoose.Schema({
    combo: { type: Boolean },
    sprinkler: { type: Boolean },
    standPipe: { type: Boolean },
});

module.exports = mongoose.model('SystemType', SystemTypeSchema);