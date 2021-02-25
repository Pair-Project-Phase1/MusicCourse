'use strict';
const instrument = require('../data/instrument.json') 

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    instrument.forEach(e=> {
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
  return queryInterface.bulkInsert('Instruments', instrument,{})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Instruments', null,{})
  }
};
