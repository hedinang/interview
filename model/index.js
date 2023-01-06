const { Sequelize } = require('sequelize');

// const connection = new Sequelize({
//     database: "interview",
//     username: "postgres",
//     password: "daniel1995",
//     host: "localhost",
//     port: 5432,
//     dialect: "postgres"
// });
const connection = new Sequelize({
    database: "thm_database",
    username: "thminsight",
    password: "coding_test_password",
    host: "database",
    port: 5432,
    dialect: "postgres"
});

connection.authenticate().then(e => {
    console.log('Connect successfully')
}).catch(f => {
    console.log('Connect failed')
})

module.exports = connection
