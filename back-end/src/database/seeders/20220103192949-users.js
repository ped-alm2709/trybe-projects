module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Rodrigo',
        email: 'rodrigo@gmail.com',
        password: 'batatafrita',
        role: 'administrator'
      },
      {
        name: 'Tales',
        email: 'tales@gmail.com',
        password: 'batatafrita',
        role: 'customer'
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};