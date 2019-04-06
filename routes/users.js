var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const {
  verifyToken
} = require('./middlewares');
const crypto = require('crypto');
const USERS = require("../models").USERS;


router.post("/login", async (req, res, next) => {
  try {
    var shasum = crypto.createHash('sha1');
    shasum.update(req.body.passwordInput);
    const password = shasum.digest('hex');

    const user = await USERS.find({
      where: {
        USER_EMAIL: req.body.emailInput,
        USER_PASSWORD: password
      }
    })
    if (!user) {
      return res.status(401).json({
        code: 401,
        message: '유효하지않은 회원정보입니다.'
      });
    }
    const token = jwt.sign({
      id: user.USER_ID
    }, process.env.JWT_SECRET, {
      expiresIn: '1m',
      issuer: 'nodebird'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      message: '서버 에러'
    });
  }
});
router.post("/signin", function (req, res, next) {
  USERS.sync().then(() => {
    return USERS.create({
      USER_EMAIL: req.body.emailInput,
      USER_PASSWORD: req.body.passwordInput
    })
  }).then((result) => {
    res.status(200).json({
      result: "Success"
    })
  }).catch((error) => {
    res.status(401).json({
      result: 'Authentication fail'
    })
    res.end()
  })
});


module.exports = router;