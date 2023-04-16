const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');

dotenv.config();

main()
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(express.json());

app.use('/api/auth', authRoute);

app.use('/api/users', usersRoute);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
