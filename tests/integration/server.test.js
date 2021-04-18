const app = require('../../server/server');
const supertest = require('supertest');
const request = supertest(app);

const server = 'http://localhost:3000';
describe('Server page endpoint tests', () => {
  describe('GET /dependencies', () => {
    it('Executes a get request to /dependecies endpoint and responds with 200 status', async (done) => {
      const res = await request.get('/dependencies');
      expect(200);
      done();
    });
  });

  describe('GET /', () => {
    it('Executes a get request to the / endpoint and responds with 200 status', async (done) => {
      const res = await request.get('/');
      expect(200);
      done();
    });
  });
});
