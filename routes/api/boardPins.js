const express = require("express");
const router = express.Router();
const BoardPin = require('../../models/BoardPin');
const passport = require('passport');


router.get('/:board_id', (req, res) => {
  BoardPin.find({board: req.params.board_id})
        .then(boardPins => res.json(boardPins))
        .catch(err => res.status(404).json({ noBoardPinsfound: 'No board pins found' }));
})


router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newBoardPin = new BoardPin({
        board: req.body.board,
        pin: req.body.pin,
      });
  
      newBoardPin.save().then(boardPin => res.json(boardPin));
    }
  );

  router.delete('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
    BoardPin.findByIdAndDelete(req.body)
    .then(() => res.json("Like deleted."))
    .catch(err => res.status(400).json("Error: " + err));
    }
  );

  module.exports = router;