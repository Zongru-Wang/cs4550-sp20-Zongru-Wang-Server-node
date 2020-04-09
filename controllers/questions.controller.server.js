const questionsService
    = require('../services/questions.service.server')

module.exports = function(app) {
    app.get('/api/quizzes/:qid/questions', (req, res) => {
        const quizId = req.params['qid']
        const questions = questionsService
            .findQuestionsForQuiz(quizId)
        res.json(questions)
    })
    app.get('/api/questions', (req, res) =>
        res.json(questionsService.findAllQuestions())
    )
    app.get('/api/questions/:qid', (req, res) =>
        res.json(questionsService
            .findQuestionById(req.params['qid']))
    )
}
