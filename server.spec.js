const server = require('./server')
const request = require('supertest')

describe('server.js', () => {
  describe('[GET] /', () => {
    it('server runs correctly', () => {
      return request(server).get('/')
        .expect(200)
    })
  })
})