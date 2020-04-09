const quizzesService
    = require('../services/quizzes.services.server')

module.exports = function (app) {

    app.get('/api/quizzes', (req, res) => {
        res.send(quizzesService.findAllQuizzes())
    })

    app.get('/api/quizzes/:qid', (req, res) =>
        quizzesService.findQuizById(req.params['qid'])
            .then(quiz => {
                res.json(quiz)
            }))
}
