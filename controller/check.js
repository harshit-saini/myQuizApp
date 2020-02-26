const questions = require("../model/questions")
const users = require("../model/users")

exports.check = async function (answers, decoded) {


    const question = await questions.find({})


    let correctAns = 0;

    console.log(decoded.id)

    for (let i = 0, j = 1; i < 5, j < 6; ++i, ++j) {


        if (answers[j] === question[i].correct) {

            correctAns += 1;
        }
    }

    const updatedUser = await users.updateOne({ _id: decoded.id }, { correctAns, quizDone: true, end: Date.now() })

    console.log(updatedUser)
}

