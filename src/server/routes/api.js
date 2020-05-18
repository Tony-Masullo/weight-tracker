const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://userTony:passwordTony@eventsdb-x7hd7.mongodb.net/test?retryWrites=true&w=majority"
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(db, options, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
    console.log('connected to mongodb')
  }
})

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  // split authorization into two parts: bearer and token
  // second part is the actual token
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}

router.get('/', (req, res) => {
  res.send('From API route')
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error)
    } else {
      let payload = {
        subject: registeredUser._id
      }
      let token = jwt.sign(payload, 'secretKey')
      //res.status(200).send(registeredUser)
      res.status(200).send({
        token
      })
    }
  })
})

router.post('/login', (req, res) => {
  // extract user data
  let userData = req.body
  // verify user data
  User.findOne({
    email: userData.email
  }, (error, user) => {
    if (error) {
      // log to console for any error with login
      console.log(error)
    } else {
      if (!user) {
        // if no user is found for the email, send status an invalid email
        res.status(401).send('Invalid email')
      } else if (user.password != userData.password) {
        // if user is found, but wrong user password, send status of an invalid password
        res.status(401).send('Invalid password')
      } else {
        // if both user and password found, send contents of logged in user
        let payload = {
          subject: user._id
        }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({
          token
        })
        //res.status(200).send(user)
      }
    }
  })
})

router.get('/events', (req, res) => {
  let events = [{
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

// verifyToken middleware is exectuted before the api code
// so if user enters invalid token, api won't execute at all
router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [{
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})

module.exports = router
