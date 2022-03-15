const express = require("express");
const router = express.Router();
const Like = require('../../models/Like');
const passport = require('passport');


router.get('/', (req, res) => {
    Like.find()
        .then(likes => res.json(likes))
        .catch(err => res.status(404).json({ nolikesfound: 'No likes found' }));
})

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newLike = new Like({
        pinId: req.body.pinId,
        userId: req.body.userId,
      });
  
      newLike.save().then(like => res.json(like));
    }
  );

  module.exports = router;