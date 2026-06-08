const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config(); // procees env file
const app = express() // run function 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});
// Import and use user routes
app.use('/api/users', require('./routers/users'));



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});