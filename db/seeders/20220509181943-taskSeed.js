'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('tasks', [{
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    }, {
      name: 'Test Task',
      date_due: null,
      priority: null,
      completed: false,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1
    },])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('tasks', null, {});
  }
};
