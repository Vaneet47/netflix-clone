const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

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

app.listen(8800, () => {
  console.log('Backend server is running!');
});
