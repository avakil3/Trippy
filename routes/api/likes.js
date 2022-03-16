const express = require("express");
const router = express.Router();
const Like = require('../../models/Like');
const passport = require('passport');


router.get('/', (req, res) => {
  // debugger
    Like.find()
        .then(likes => res.json(likes))
        .catch(err => res.status(404).json({ nolikesfound: 'No likes found' }));
})
//Tweet.find({user: req.params.user_id})

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newLike = new Like({
        pin: req.body.pinId,
        user: req.body.userId,
      });
  
      newLike.save().then(like => res.json(like));
    }
  );

  module.exports = router;