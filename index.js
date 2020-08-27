const express = require('express')
const path = require('path')

module.exports = robot => {
  const app = express()
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, 'views'))

  app.get('/post-install', (req, res) => {
    const webhookPath = `${req.protocol}://${req.get('host')}${process.env.WEBHOOK_PATH}`
    res.render('instructions', { webhook_path: webhookPath, webhook_secret: process.env.WEBHOOK_SECRET })
  })

  robot.router.use(app)
}
