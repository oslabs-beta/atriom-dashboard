const app = require('../../../server/server');
const supertest = require('supertest');
const request = supertest(app);
// const request = require('supertest');

const server = 'http://localhost:3000';

describe('Auth Route integration', () => {
  // response.body should have "username", "id", "apps"
  describe('/auth/current-user', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and user object with username, id, and apps properties', () => {
        return request
          .get('/auth/current-user')
          .set('Cookie', ['username=TestUsername'])
          .expect((res) => {
            expect(res.body.user).toHaveProperty('username');
          })
          .expect((res) => {
            expect(res.body.user).toHaveProperty('id');
          })
          .expect((res) => {
            expect(res.body.user).toHaveProperty('apps');
          })
          .expect(200);
      });
    });
    describe('/auth/signup', () => {
      describe('POST', () => {
        const body = {
          username: 'Rachel',
          password: 'Farley',
        };
        //expect status 200
        it('Signs up a new user', () => {
          return request
            .post('/auth/signup')
            .send(body)
            .expect('Content-Type', /application\/json/)
            .expect((res) => {
              expect(res.body.user.username).toBe(body.username);
            })
            .expect((res) => {
              expect(res.body.user).toHaveProperty('id');
            })
            .expect((res) => {
              expect(res.body.user.apps).toEqual([]);
            })
            .expect(200);
        });
      });
    });
  });
});
