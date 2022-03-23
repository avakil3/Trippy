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
        name: req.body.name,
        user: req.params.user_id,
      });
  
      newBoard.save().then(board => res.json(board));
    }
  );

router.patch('/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    Board.findByIdAndUpdate(req.body._id, {name: req.body.name},function(err, result) {
      if (err) {
        return res.json({ message: err });
      } else {
        return res.json({ message: "Updated" });
      }
    });
  }
);



  router.delete('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Board.findByIdAndDelete(req.body)
        .then(() => res.json("Like deleted."))
        .catch(err => res.status(400).json("Error: " + err));
    }
  );

  module.exports = router;