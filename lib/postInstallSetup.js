const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')

module.exports = router => {
  const app = express()
  app.set('view engine', 'hbs')
  app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'default',
    dirPath: path.join(__dirname, '../views'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials')
  }))
  app.use(express.static(path.join(__dirname, '../public')))

  app.get('/post-install', (req, res) => {
    const webhookUrl = `${req.protocol}://${req.get('host')}${process.env.WEBHOOK_PATH || ''}`
    res.render('instructions', { webhookUrl, webhookSecret: process.env.WEBHOOK_SECRET })
  })

  router.use(app)
}
