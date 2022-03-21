const express = require("express");
const router = express.Router();
const Board = require('../../models/Board');
const passport = require('passport');


router.get('/:user_id', (req, res) => {
    Board.find({user: req.params.user_id})
        .then(boards => res.json(boards))
        .catch(err => res.status(404).json({ noboardsfound: 'No boards found' }));
})


router.post('/:user_id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newBoard = new Board({
        name: req.body,
        user: req.params.user_id,
      });
  
      newBoard.save().then(board => res.json(board));
    }
  );

  router.delete('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Like.findByIdAndDelete(req.body)
    .then(() => res.json("Like deleted."))
    .catch(err => res.status(400).json("Error: " + err));
    }
  );

  module.exports = router;