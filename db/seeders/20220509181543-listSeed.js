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
    return queryInterface.bulkInsert('lists', [{
      name: 'personal',
      completed: false,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'work',
      completed: false,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'personal',
      completed: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'work',
      completed: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('lists', null, {});
  }
};
