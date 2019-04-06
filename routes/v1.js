const express = require("express");
const jwt = require("jsonwebtoken");

const { verifyToken } = require("./middlewares");
const USERS = require("../models").USERS;

const router = express.Router();
const crypto = require("crypto");

router.post("/token", async (req, res) => {
  try {
    var shasum = crypto.createHash("sha1");
    shasum.update(req.body.passwordInput);
    const password = shasum.digest("hex");

    const user = await USERS.findOne({
      where: {
        USER_EMAIL: req.body.emailInput,
        USER_PASSWORD: password
      }
    });
    if (!user) {
      return res.status(401).json({
        code: 401,
        message: "유효하지않은 회원정보입니다."
      });
    }
    const token = jwt.sign(
      {
        id: user.USER_ID
      },
      "key",
      {
        expiresIn: "1m"
      }
    );
    res.json({
      code: 200,
      message: "토큰 발급",
      token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      message: "서버 에러"
    });
  }
});

router.get("/test", verifyToken, (req, res) => {
  res.json(req.decoded);
});

module.exports = router;
