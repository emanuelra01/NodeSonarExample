const request =  require('supertest')
const server =  require('../index')

describe('Get Endpoints', () => {
    it('Get', () => {
        return request(server)
        .get('/')
        .send({ userId:  1, title:  'test is cool'})
        .expect(200);
        
        done();
    })
})

afterAll(()  => {
    // close server conection
    server.close();
});
