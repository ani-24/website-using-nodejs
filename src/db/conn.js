const mongoose = require("mongoose");

const connection = () => {
  try {
    mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Successful");
  } catch (error) {
    console.log(error);
  }
};
