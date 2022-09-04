const Sequelize = require("sequelize");
const filModel = require("./models/film");
const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);
const film = filModel(sequelize, Sequelize);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database and table created..!!");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = {
  film,
};