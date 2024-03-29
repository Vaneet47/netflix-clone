const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      res.status(401).json('Wrong password or username!');
      return;
    }

    const passwordBytes = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );

    const originalPassword = passwordBytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      res.status(401).json('Wrong password or username!');
      return;
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET_KEY,
      { expiresIn: '5d' }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
