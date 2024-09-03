const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const AutorModel = sequelize.define("Autor", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const PostModel = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  acesso: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

PostModel.belongsTo(AutorModel);

module.exports = {
  sequelize,
  AutorModel,
  PostModel,
};
