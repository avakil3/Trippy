const Like = require('../../../models/Like');
const mongoose = require('mongoose');
const db = require('../../../config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const likes = [

    new Like({
       user:"62312ac9097293a1a69840d8",
       pin:"622f9b0c3ac02de9dccdacb5",
        }),
    new Like({
        user:"62312ac9097293a1a69840d8",
        pin:"622f9c733ac02de9dccdacb7",
            }),    

];

var done = 0;
for (let i=0; i < likes.length; i++){
    likes[i].save(()=> {
        done++;
        if (done===likes.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
    console.log("Database seed successful")
}