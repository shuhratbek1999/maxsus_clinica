const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class Registration_payModel extends Model {
    toJSON () {//Api da ishladi
    var values = Object.assign({}, this.get());
        delete values.password_hash;
        return values;
    }
}

Registration_payModel.init({
  id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false
  },
  registration_id: {
      type: DataTypes.INTEGER
  },
  user_id: {
      type: DataTypes.INTEGER
  },
  pay_type : {
      type: DataTypes.STRING(20),
      allowNull: false
  },
summa:{
      type: DataTypes.DECIMAL(17.2),
      allowNull: false
  },
  date_time:{
      type: DataTypes.INTEGER,
      defaultValue: Math.floor(new Date().getTime() / 1000)
    }
}, {
  sequelize,
  modelName: 'registration_pay',
  tableName: 'registration_pay',
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

module.exports = Registration_payModel;