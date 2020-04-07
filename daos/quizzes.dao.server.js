const quizzesModel = require('../models/quizzes/quizzes.model.server')

const findAllQuizzes = () =>
    quizzesModel.find()
        .populate('questions')

const findQuizById = (qid) =>
    quizzesModel.findById(qid)
        .populate('questions')

module.exports = {
    findAllQuizzes,
    findQuizById
}
