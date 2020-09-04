const { Probot } = require('probot')
const request = require('supertest')
const app = require('..')

describe('Sponsorship Bot', () => {
  let probot

  beforeEach(() => {
    probot = new Probot({ id: 123, secret: 'something secret' })
    probot.load(app)
  })

  describe('GET /post-install', () => {
    test('renders the webhook secret', async () => {
      console.log("***************")
      console.log("ENV", process.env.WEBHOOK_SECRET)
      console.log("***************")
      await request(probot.server).get('/post-install')
        .expect(200)
        .then(response => {
          expect(response.text).toMatch(process.env.WEBHOOK_SECRET)
        })
    })

    test('renders the webhook url', async () => {
      await request(probot.server).get('/post-install')
        .set('Host', 'blah.com')
        .expect(200)
        .then(response => {
          expect(response.text).toMatch('http://blah.com')
        })
    })
  })
})
