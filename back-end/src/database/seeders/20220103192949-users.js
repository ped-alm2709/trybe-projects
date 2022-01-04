module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Rodrigo",
          email: "rodrigo@gmail.com",
          password: "85a1bd745fe08481d12effaa5cb728f7",
          role: "administrator",
        },
        {
          name: "Tales",
          email: "tales@gmail.com",
          password: "85a1bd745fe08481d12effaa5cb728f7",
          role: "customer",
        },
      ],

      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};
