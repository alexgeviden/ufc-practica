'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('sugerencias', 'peleas2', {
      type: Sequelize.ARRAY(Sequelize.STRING),
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('sugerencias', 'peleas2');
  }
};
