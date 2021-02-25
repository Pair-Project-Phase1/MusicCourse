'use strict';

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
      return queryInterface.bulkInsert('Admins',[
        {
          username: 'billy',
          password: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'sorasabella',
          password: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Admins', null, {})
  }
};
