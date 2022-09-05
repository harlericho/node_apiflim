const jwt = require("jwt-simple");
const moment = require("moment");
const checkToken = (req, res, next) => {
  if (!req.headers["user-token"]) {
    return res.status(203).json({
      message: "You need the security token..!",
    });
  }
  const userToken = req.headers["user-token"];
  let info = {};
  try {
    info = jwt.decode(userToken, process.env.KEY_SECRET);
  } catch (error) {
    res.status(400).json({
      message: "Token is incorrect..!",
    });
  }
  if (info.expiredAt < moment().unix()) {
    return res.status(203).json({
      message: "Token has expired..!",
    });
  }
  req.userId = info.userId;
  next();
};

module.exports = {
  checkToken,
};
