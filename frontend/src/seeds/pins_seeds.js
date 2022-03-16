const Pin = require('../../../models/Pin');
const mongoose = require('mongoose');
const db = require('../../../config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const pins = [

    // ***EXAMPLE***
    // new Pin({
    // title: "Snorkel the magical African Seaforest",
    // tripType:["adventure"],
    // region: "africa",
    // location: "Cape Town, South Africa",
    // imageURL: "https://www.airbnb.com/experiences/105665?location=Africa&currentTab=experience_tab&federatedSearchId=a9c81e15-fedd-4f9e-a91e-3e92341bbcd5&searchId=&sectionId=fb951fce-ca14-41d2-a95d-c37ef2e54d46&source=p2&modal=PHOTOS&modalItem=1075667630",
    // description: "Snorkel the magnificent Great African Seaforest, one of the seven wonders of the world. There are only 9 such eco-systems globally & only ONE along the African continent.",
    // extLink: "https://www.airbnb.com/experiences/105665?location=Africa&currentTab=experience_tab&federatedSearchId=a9c81e15-fedd-4f9e-a91e-3e92341bbcd5&searchId=&sectionId=fb951fce-ca14-41d2-a95d-c37ef2e54d46&source=p2&modal=PHOTO_TOUR_SCROLLABLE"
    // }),

    new Pin({
        title: "Camel Ride with Sunset in Desert Agafay",
        tripType:['camping', 'adventure'],
        region: "africa",
        location: "Marrakech, Morocco",
        imageURL: "https://trippy-seeds.s3.us-east-2.amazonaws.com/camel_ride.webp",
        description: "Experience the sunset with a camel ride in the atmosphere of Agafay Desert",
        extLink: "https://www.airbnb.com/experiences/2728896?currentTab=experience_tab&federatedSearchId=863a62fa-c3e7-4a7f-831b-48248885fa99&searchId=&sectionId=787e4044-f310-4db6-9b55-de08a7c823a0&source=p2"
         }),

    // new Pin({
    //     title: "",
    //     tripType: [],
    //     region: "",
    //     location: "",
    //     imageURL: "",
    //     description: "",
    //     extLink: ""
    // }),

    // new Pin({
    //     title: "",
    //     tripType: [],
    //     region: "",
    //     location: "",
    //     imageURL: "",
    //     description: "",
    //     extLink: ""
    // }),

];

var done = 0;
for (let i=0; i < pins.length; i++){
    pins[i].save(()=> {
        done++;
        if (done===pins.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
    console.log("Database seed successful")
}