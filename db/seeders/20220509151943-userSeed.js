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
    return queryInterface.bulkInsert('users', [{
      firstName: 'Root',
      lastName: 'Admin',
      username: 'admin',
      email: 'admin@email.com',
      hashed_password: '$2a$12$OC3gg2O4niyW9CCEY4lyQuozhGhIPE9Lda2IO5I5BhSC4XrWkl062',
      //testpass
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Demo',
      lastName: 'User',
      username: 'Demo',
      email: 'demo@email.com',
      hashed_password: '$2a$12$99MWKOkQ7o.M96zwguvAUuOSWWKiIdG/Uyw0.wKQwOONKf2pjly5K',
      //demopassword
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
