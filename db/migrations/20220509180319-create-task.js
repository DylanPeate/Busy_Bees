'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      date_due: {
        type: Sequelize.DATE
      },
      priority: {
        type: Sequelize.INTEGER
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      notes: {
        type: Sequelize.STRING(500)
      },
      list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'lists' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};
