const mongoose = require("mongoose");
const validator = require("validator");

const msgSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minlength: true,
  },
  lname: {
    type: String,
    minlength: true,
  },
  mobile: {
    type: Number,
    min: 6,
  },
  email: {
    validator(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Invalid email");
      }
    },
  },
  msg: {
    type: String,
    required: true,
    minlength: 3,
  },
});
