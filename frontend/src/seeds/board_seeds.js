const Board = require('../../../models/Board');
const mongoose = require('mongoose');
const db = require('../../../config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const boards = [

    new Board({
       user:"65148a9d206a649b4241eb40",
       name:"Demo Board #1",
        }),
  

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