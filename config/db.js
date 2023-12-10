const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL);
        console.log(`MnogoDB connected: ${connect.connection.host}...`);
    } catch(err) {
        console.log(`Error: ${err}...`);
        process.exit(1);
    }
}

module.exports = connectDB;