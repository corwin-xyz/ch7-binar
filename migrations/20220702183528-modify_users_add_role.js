'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     return queryInterface.addColumn(
      'User_games',
      'role',
     Sequelize.STRING
    );

  },

  down: async (queryInterface, Sequelize) => {
  
     return queryInterface.removeColumn(
      'User_games',
      'role'
    );

  }
};
