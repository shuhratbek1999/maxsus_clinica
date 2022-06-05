const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class Registration_recipeModel extends Model {
    toJSON () {//Api da ishladi
    var values = Object.assign({}, this.get());
        delete values.password_hash;
        return values;
    }
}

Registration_recipeModel.init({
  id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false
  },
//registration_doctor id
registration_doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  registration_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  pill_id : {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  time:{
      type: DataTypes.INTEGER,
      allowNull: false
  },
  day:{
      type: DataTypes.INTEGER,
      allowNull: false
  },
  comment:{
      type: DataTypes.STRING,
      allowNull: false
  }
}, {
  sequelize,
  modelName: 'registration_recipe',
  tableName: 'registration_recipe',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ],
  //findOne da yoki findAll da chaqirish kerak
  scopes: {
    withoutPassword: {
      attributes: { exclude: ['password_hash'] },
    }
  }
});

module.exports = Registration_recipeModel;