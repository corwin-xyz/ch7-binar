'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      room_name: {
        type: Sequelize.STRING,
      },
      id_player_1: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "User_games",
          key: "id",
          as: "user_id",
          schema: 'public',
        },
      },
      id_player_2: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "User_games",
          key: "id",
          as: "user_id",
          schema: 'public',
        },
      },
      move_player_1: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      move_player_2: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rooms');
  },
};
