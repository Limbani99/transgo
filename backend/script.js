const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config(); // procees env file
const app = express() // run function 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', require('./router/user'));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Import and use user routes



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});