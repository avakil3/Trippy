const BoardPin = require("../../../models/BoardPin");
const mongoose = require("mongoose");
const db = require("../../../config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const boardPins = [
  new BoardPin({
    board: "651493a79a644fc32666a956",
    pin: "651494f5f6c69b40d1d5642a",
  }),
  new BoardPin({
    board: "651493a79a644fc32666a956",
    pin: "651494f5f6c69b40d1d56429",
  }),
  new BoardPin({
    board: "651493a79a644fc32666a956",
    pin: "651494f5f6c69b40d1d5642b",
  }),
];

var done = 0;
for (let i = 0; i < boardPins.length; i++) {
  boardPins[i].save(() => {
    done++;
    if (done === boardPins.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
  console.log("Database seed successful");
}
