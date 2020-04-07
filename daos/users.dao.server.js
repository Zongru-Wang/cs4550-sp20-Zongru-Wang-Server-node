const usersModel = require('../models/users.model.server')

const deleteUser = (userId) =>
    usersModel.remove({_id: userId})

const createUser = (user) =>
    usersModel.create(user)

const findAllUsers = () =>
    usersModel.find()

const findUserById = (userId) =>
    usersModel.findById(userId)

const findUserByCredentials = (username, password) =>
    usersModel.findOne({username: username, password: password})

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    findUserByCredentials,
    deleteUser
}
