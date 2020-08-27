const express = require('express')
const path = require('path')

module.exports = router => {
  const app = express()
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, '../views'))

  app.get('/post-install', (req, res) => {
    const webhookUrl = `${req.protocol}://${req.get('host')}${process.env.WEBHOOK_PATH || ''}`
    res.render('instructions', { webhookUrl, webhookSecret: process.env.WEBHOOK_SECRET })
  })

  router.use(app)
}
