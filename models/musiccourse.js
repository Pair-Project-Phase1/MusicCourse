'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MusicCourse.init({
    StudentId: DataTypes.INTEGER,
    InstrumentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MusicCourse',
  });
  return MusicCourse;
};