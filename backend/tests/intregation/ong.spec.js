const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ong',  async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "teste2",
      email: "teste@teste.com",
      whatsapp: "44553311156",
      city: "vila Da folha",
      uf: "CU"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
})