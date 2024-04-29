//note: we are able to use 'import' instead of using 'require' by changing the type in package.json to 'module' insted of the default "common js"
// to avoid making our mongodb user name and password visible to the public we will not be using our connect string here instead in process.env..
// and we need to install env to be able to use dotenv package

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

  
app.listen(3000, () => {
    console.log('server is running on port 3000')
});

