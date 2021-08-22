const Sequelize = require("sequelize");

module.exports = class Category extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ct_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
          primaryKey: true
        }
      },
      {
        sequelize,
        timestamp: false,
        underscored: false,
        modelName: "Category",
        tableName: "categories",
        charset: "utf8",
        collate: "utf8_general_ci"
      }
    );
  }
  static associate(db) {}
};
/*
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'category',
      {
       name : {
        type: DataTypes.STRING(30),
        allowNull : false
       }
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};
  */