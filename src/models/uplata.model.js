const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class uplataModel extends Model {
    toJSON () {//Api da ishladi
    var values = Object.assign({}, this.get());
        delete values.password_hash;
        return values;
    }
} 

uplataModel.init({
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false
},
name: {
    type: DataTypes.STRING(60)
},
price:{
  type: DataTypes.DECIMAL,
  allowNull: false
},
user_id:{
  type: DataTypes.INTEGER()
},
doctor_id:{
  type: DataTypes.INTEGER
},
type:{
  type: DataTypes.INTEGER
},
date_time:{
  type: DataTypes.INTEGER(),
  allowNullL: true
}

}, {
  sequelize,
  modelName: 'uplata',
  tableName: 'uplata',
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
});
module.exports = uplataModel;