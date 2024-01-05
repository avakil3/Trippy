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

    new Pin({
    title: "Hot air balloon Flight in Cappadocia",
    tripType: [ "adventure", "relaxation",],
    region: "europe",
    location: "Göreme, Turkey",
    imageURL:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1623639-media_library/original/2e7ce48a-5452-4ff6-b1db-3c701c5642ba.jpeg?im_w=1440",
    description:
      "Take this exclusive flight on a Hot Air Balloon close to the Goreme area. The activity begins early in the morning and Service will pick you up from home or hotel at least 1 hour ago. Once it’s ready, we will take off for an amazing hour of flight close to the Fairy Chimneys and the surrounding area. At the end of the flight, a service will be waiting to pick you up and return to the your hotel",
    extLink: "https://www.airbnb.com/experiences/1623639",
  }),

  new Pin({
    title: "Damnoen Saduak Floating Market",
    tripType: ["adventure"],
    region: "asia",
    location: "Khet Pom Prap Sattru Phai, Thailand",
    imageURL:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-4638159-media_library/original/0dcc3a8b-b823-4b9e-96a1-3abec297980c.jpeg?im_w=1440",
    description:
      "The Mae Klong Railway Market has been around since 1905. Fishing was (and still is) one of the main livelihoods of the people who lived here, and the market was another way in which to sell their goods. Officials decided to build a railway in order to better deliver these goods to other provinces. The market stayed at the same place though, despite the new tracks that cut through it.",
    extLink: "https://www.airbnb.com/experiences/4638159",
  }),

  new Pin({
    title: "Old Delhi's Food, Temples & Spice Market",
    tripType: ["roadTrip", "adventure"],
    region: "asia",
    location: "New Dehli, India",
    imageURL:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-111656-media_library/original/05dabce9-2d13-4171-965a-cf961d784a54.jpeg?im_w=1440",
    description:
      "Visit Asia's largest spice market and eat indian street food while learning about the country's history and traditions",
    extLink: "https://www.airbnb.com/experiences/111656",
  }),

  new Pin({
    title: "",
    tripType: ["roadTrip", "adventure", "relaxation", "camping"],
    region: "",
    location: "",
    imageURL:
      "",
    description:
      "",
    extLink: "",
  }),
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
