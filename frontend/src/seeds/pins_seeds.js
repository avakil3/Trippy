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

    
    // new Pin({
    //     title: "",
    //     tripType:[],
    //     region: "",
    //     location: "",
    //     imageURL: "",
    //     description: "",
    //     extLink: ""
    // })
    new Pin({
        title: "Bird is the word but who doesn't like Pandas ",
        tripType:["relaxation", "adventure"],
        region: "asia",
        location: "Sichuan, China",
        imageURL: "https://trippy-seeds-bucket.s3.amazonaws.com/panda.jpeg",
        description: "Giant pandas are China's national emblem, and high on the list of things to see for many visitors to China.",
        extLink: "https://www.onthegotours.com/China/Visiting-Pandas-in-China"
    })
    
    
    
    
    
    
    
    
    

    

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