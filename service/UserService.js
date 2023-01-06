const { User } = require('../model/User.js')

async function getAll() {
    let apiResponse = {}
    let result = await User.findAll()
    apiResponse.data = result
    apiResponse.status = 'OK'
    return apiResponse
}
async function deleteUser(userId) {
    let apiResponse = {}
    let result = await User.destroy({
        where: {
            id: userId
        }
    })
    apiResponse.data = result
    apiResponse.status = 'OK'
    return apiResponse
}
async function createUser(data) {
    let apiResponse = {}

    let user = await User.findOne({ where: { email: data.email } })
    if (user) {
        apiResponse.message = 'This email is existed'
        apiResponse.status = 'Bad Request'
    } else {
        try {
            let result = await User.create({
                email: data.email,
                password: data.password,
                first_name: data.firstName,
                last_name: data.lastName,
                country: data.country,
                city: data.city,
                phone_number: data.phoneNumber,
                position: data.position,

            })
            apiResponse.data = result
            apiResponse.status = 'OK'
        } catch (error) {
            apiResponse.message = 'Update data wrong'
            apiResponse.status = 'Bad Request'
        }
    }
    return apiResponse
}
async function updateUser(data) {
    let apiResponse = {}
    try {
        await User.update({
            email: data.email,
            password: data.password,
            first_name: data.firstName,
            last_name: data.lastName,
            country: data.country,
            city: data.city,
            phone_number: data.phoneNumber,
            position: data.position,

        }, {
            where: {
                id: data.id
            }
        })
        apiResponse.status = 'OK'
    } catch (error) {
        apiResponse.message = 'Update data wrong'
        apiResponse.status = 'Bad Request'
    }
    return apiResponse
}

module.exports = {
    deleteUser, getAll, createUser, updateUser
}