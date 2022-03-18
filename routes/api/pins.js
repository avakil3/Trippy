const express = require("express");
const router = express.Router();
const Pin = require('../../models/Pin');
const passport = require('passport');


router.get('/', (req, res) => {
    Pin.find()
        .then(pins => res.json(pins))
        .catch(err => res.status(404).json({ nopinsfound: 'No pins found' }));
})

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newPin = new Pin({
        tripType: req.body.tripType,
        region: req.body.region,
        imageURL: req.body.imageURL,
        title: req.body.title,
        description: req.body.description,
        extLink: req.body.extLink,
      });
  
      newPin.save().then(pin => res.json(pin));
    }
  );
  
  module.exports = router;