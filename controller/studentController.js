var Quiz = require('../models/quiz')
var User = require('../models/user')
var Question = require('../models/question')
const jwt = require('jsonwebtoken')

exports.getallquiz = (req, res) => {
    Quiz.find({upload:true}, (err, qz) => {
        if (err) {
            console.log(error);
            res.json({ msg: "some error!" });
        }
        else {
            res.json({ quiz: qz });
        }
    })
}

exports.getAllQuestion = (req, res) => {

    Question.find({ quizid: req.params.id }, (err, qz) => {
        if (err) {
            console.log(error);
            res.json({ errormsg: "some error!" });
        }
        else {
            res.json({ msg: qz });
        }
    })
}


exports.blockMe = (req, res) => {
    var id = req.userId
    User.updateOne({ _id: id }, { blocked: true }, function (err, user) {
        if (err) {
            console.log(err)
            res.status(500).json({ msg: "something went wrong!!" })
        }
        else {
            console.log("blocked user");
            res.status(201).json({ message: "blocked user!" });
        }
    })

}

exports.verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("unauthorized req")
    }
    let token = req.headers.authorization.split(' ')[1]
    // console.log(token);  
    if (token == 'null') {
        return res.status(401).send("unauthorized req")
    }
    let payload = jwt.verify(token, 'secretkey')
    if (!payload) {
        return res.status(401).send("unauthorized req")
    }
    // console.log("in middleware");
    // console.log(payload.subject);
    // console.log(payload.email);
    req.userId = payload.subject
    req.email = payload.email;
    // console.log(req.userId);
    // console.log(req.email);
    next()
}