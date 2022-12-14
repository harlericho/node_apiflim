module.exports = (sequelize, type) => {
  return sequelize.define(process.env.DB_TABLE_FILM, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: type.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 150],
      },
    },
    description: {
      type: type.TEXT,
      allowNull: true,
    },
    score: {
      type: type.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    director: {
      type: type.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 50],
      },
    },
  });
};
