module.exports = (sequelize, type) => {
  return sequelize.define(process.env.DB_TABLE_USER, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: type.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 100],
      },
    },
    email: {
      type: type.STRING(150),
      allowNull: false,
      isUnique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
        len: [5, 150],
      },
    },
    password: {
      type: type.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 200],
      },
    },
  });
};
