const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config(); // procees env file
const app = express() // run function 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', require('./router/common'));
app.use('/api/user', require('./router/user'))
app.use('/api/company', require('./router/company'))

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Import and use user routes



const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('TransGo backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});