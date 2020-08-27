const express = require('express')
const path = require('path')

module.exports = robot => {
  robot.log('Yay, the app was loaded!')

  const app = express()
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, 'views'))

  app.get('/post-install', (req, res) => {
    res.render('instructions', { webhook_secret: process.env.WEBHOOK_SECRET })
  })

  robot.router.use(app)
}
