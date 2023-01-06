const { Sequelize } = require('sequelize');

// const connection = new Sequelize('postgres://postgres:daniel1995@localhost:5432/interview')
const connection = new Sequelize({
    database: "interview",
    username: "postgres",
    password: "daniel1995",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    ssl: false

});
connection.authenticate().then(e => {
    console.log('Connect successfully')
}).catch(f => {
    console.log('Connect failed')
})

module.exports = connection
