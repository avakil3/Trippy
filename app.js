const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const users = require("./routes/api/users");
const pins = require("./routes/api/pins");
const likes = require("./routes/api/likes");
const path = require('path');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use(passport.initialize());
//app.options('*', cors())
app.use(cors());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/pins", pins);
app.use("/api/likes", likes);

const port = process.env.PORT; // || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
