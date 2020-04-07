const usersDao = require('../daos/users.dao.server')

module.exports = (app) => {

    app.delete('/api/users/:userId', (req, res) =>
        usersDao.deleteUser(req.params.userId)
            .then(status => res.send(status))
    )

    app.post('/api/users', (req, res) =>
        usersDao.createUser(req.body)
            .then(newUser => res.send(newUser))
    )

    app.post('/api/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        usersDao.findUserByCredentials(username, password)
            .then(user => {
                if(user) {
                    user.password = '***'
                    return res.send(user)
                } else {
                    return res.status(403).send({
                        message: `User ${username} not found`
                    })
                }
            })
    })

    app.get('/api/users/:userId', (req, res) =>
        usersDao.findUserById(req.params.userId)
            .then(user => res.send(user))
    )
    app.get('/api/users', (req, res) =>
        usersDao.findAllUsers()
            .then(allUser => res.send(allUser)))
}
