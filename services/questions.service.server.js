const questions = require('./questions')
const questionsDao = require('../daos/questions.dao.server')
const quizzesDao = require('../daos/quizzes.dao.server')

const findAllQuestions = () =>
    questionsDao.findAllQuestions()

const findQuestionById = (qid) =>
    questionsDao.findQuestionById(qid)
    // questions.find(q => q._id === qid)

const findQuestionsForQuiz = (qzid) =>
    quizzesDao.findQuizById(qzid)
        .then(quiz => quiz.questions)
    // questions.filter(q => q.quizId === qzid)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
