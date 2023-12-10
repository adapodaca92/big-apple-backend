const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(logger('dev'));

//  routers
const userRouter = require('./routers/userRouter');
const materialRouter = require('./routers/materialRouter');
const laborRouter = require('./routers/laborRouter');
const signageRouter = require('./routers/signageRouter');
const systemTypeRouter = require('./routers/systemTypeRouter');
const typeOfBuildingRouter = require('./routers/typeOfBuildingRouter');

app.use('/user', userRouter);
app.use('/materials', materialRouter);
app.use('/labor', laborRouter);
app.use('/signage', signageRouter);
app.use('/systemType', systemTypeRouter);
app.use('/typeOfBuilding', typeOfBuildingRouter);




app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}...`));