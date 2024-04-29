//schema are rules for user/client

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, //important to fill
      unique: true,  // prevent duplicate usernames
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }  // timestamps is use to get the time of creation and the time of update of users
);

const User = mongoose.model('User', userSchema);

export default User;