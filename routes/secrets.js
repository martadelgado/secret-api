var express       = require('express');
var router        = express.Router();
const mongoose    = require('mongoose');
const User        = require("../models/user");
const Secret      = require("../models/secret");
const upload      = require('../config/multer');


router.get('/', (req, res, next) => {
  Secret.find({})
    .exec((err, Secrets) => {
      if (err) {
        return res.send(err);
      }
      return res.json(Secrets);
    });
});

router.post('/add', upload.single('file'), (req, res, next) => {

  const addSecret =  new Secret ({
    where       : req.body.where,
    location    : req.body.location,
    what        : req.body.what,
    description : req.body.description,
    tips        : req.body.tips,
    when        : req.body.when,
    image       : `/uploads/${req.file.filename}`,
    user        : res.locals.currentUser
  });


  addSecret.save( (err) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      return res.json({ message: 'New secret created!' });
    }
  });
});

module.exports = router;
