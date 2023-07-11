'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      rollNum: {
        type: Sequelize.INTEGER
      },
      scholarNum: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      classId: {
        type: Sequelize.STRING,
        foreignKey: true,
        references: {
          model: 'Classes',
          key: 'classId',
        },
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
    return queryInterface.dropTable('Students');
  }
};