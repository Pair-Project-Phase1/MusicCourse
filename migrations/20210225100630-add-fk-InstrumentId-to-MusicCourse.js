'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('MusicCourses', {
      fields: ['InstrumentId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_InstrumentId',
      references: { //Required field
        table: 'Instruments',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('MusicCourses', 'custom_fkey_constraint_InstrumentId', {})

  }
};
