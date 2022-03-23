const BoardPin = require('../../../models/BoardPin');
const mongoose = require('mongoose');
const db = require('../../../config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const boardPins = [

    new BoardPin({
       board:"6238e6b0bc964299a414d80b",
       pin:"623330e3a911874ca354dc2b",
        }),
    // new BoardPin({
    //     board:"6238e6b0bc964299a414d80b",
    //     pin:"622fbcd101e3401a09bf0cf6",
    //         }),
  

];

var done = 0;
for (let i=0; i < boardPins.length; i++){
    boardPins[i].save(()=> {
        done++;
        if (done===boardPins.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
    console.log("Database seed successful")
}