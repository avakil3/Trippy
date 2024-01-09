const Pin = require("../../../models/Pin");
const mongoose = require("mongoose");
const db = require("../../../config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const pins = [
  // ***EXAMPLE***
  // new Pin({
  //   title: "",
  //   tripType: ["roadTrip", "adventure", "relaxation", "camping"],
  //   region: "",
  //   location: "",
  //   imageURL:
  //     "",
  //   description:
  //     "",
  //   extLink: "",
  // }),
];

var done = 0;
for (let i = 0; i < pins.length; i++) {
  pins[i].save(() => {
    done++;
    if (done === pins.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
  console.log("Database seed successful");
}
