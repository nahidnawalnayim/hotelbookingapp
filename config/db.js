const mongoose = require('mongoose');

const connectWithDB = () => {
  //mongoose.set('strictQuery', false);
  mongoose
    .connect('mongodb://localhost:27017/softwaredb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((err) => {
      console.log(`DB connection failed`);
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDB;
