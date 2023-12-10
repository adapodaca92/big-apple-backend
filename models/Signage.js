const mongoose = require('mongoose');

const SignageSchema = new mongoose.Schema({
    comboCurbBox: { type: Boolean },
    comboLocation: { type: Boolean },
    callFDNY: { type: Boolean },
});

module.exports = mongoose.model('Signage', SignageSchema);