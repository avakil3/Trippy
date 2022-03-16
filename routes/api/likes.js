const express = require("express");
const router = express.Router();
const Like = require('../../models/Like');
const passport = require('passport');


router.get('/:user_id', (req, res) => {
    Like.find({user: req.params.user_id})
        .then(likes => res.json(likes))
        .catch(err => res.status(404).json({ nolikesfound: 'No likes found' }));
})


router.post('/:user_id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newLike = new Like({
        pin: req.body,
        user: req.params.user_id,
      });
  
      newLike.save().then(like => res.json(like));
    }
  );

  router.delete('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
      console.log(req);
    Like.findByIdAndDelete(req.body)
    .then(() => res.json("Like deleted."))
    .catch(err => res.status(400).json("Error: " + err));
    }
  );

  module.exports = router;