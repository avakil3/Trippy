const Board = require('../../../models/Board');
const mongoose = require('mongoose');
const db = require('../../../config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const boards = [

    // new Board({
    //    user:"62312ac9097293a1a69840d8",
    //    name:"Demo Board #2",
    //     }),
  

];

var done = 0;
for (let i=0; i < boards.length; i++){
    boards[i].save(()=> {
        done++;
        if (done===boards.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
    console.log("Database seed successful")
}