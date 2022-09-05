const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User } = require("../../db");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");
router.post(
  "/register",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("Username is required")
      .isLength({ min: 5, max: 100 })
      .withMessage("Useraname must be between 5 and 100 characters"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is required")
      .isLength({ min: 5, max: 150 })
      .withMessage("Email must be between 5 and 150 characters")
      .isEmail()
      .withMessage("This data is not an email"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .isLength({ min: 5, max: 200 })
      .withMessage("Password must be between 5 and 200 characters"),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(422).json({
        errors: err.array(),
      });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 4);
    await User.create(req.body);
    res.status(201).json({
      message: "Created User",
    });
  }
);
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    const dataPassword = bcrypt.compareSync(req.body.password, user.password);
    if (dataPassword) {
      res.status(201).json({
        message: createToken(user),
      });
    } else {
      res.status(203).json({
        message: "Passwords are not the same..!",
      });
    }
  } else {
    res.status(203).json({
      message: "User does not exist..!",
    });
  }
});

const createToken = (data) => {
  const info = {
    userId: data.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(2, "minutes").unix(),
  };
  return jwt.encode(info, process.env.KEY_SECRET);
};
module.exports = router;
