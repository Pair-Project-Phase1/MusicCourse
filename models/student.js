'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Instrument,{through: models.MusicCourse})
    }
  };
  Student.init({
    first_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Your name cannot be empty!'
        }
      }
    },
    last_name: DataTypes.STRING,
    kelas: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  Student.beforeCreate((data, options)=>{
    data.last_name===""?data.last_name=data.first_name:""
  })
  return Student;
};