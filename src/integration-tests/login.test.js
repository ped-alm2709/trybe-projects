const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const sinon = require('sinon');
const server = require('../api/app');
const { MongoClient } = require('mongodb');
const getConnection = require('./connectionMocks');
const {
  userObj,
  emailError,
  passwordError,
  correctLogin
} = require('../utils/mocksObjects');

describe('POST /login', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Valida se o email e password são obrigatórios', () => {
    let response;

    before(async () => {
      response = await chai.request(server).post('/login').send({});
    })

    it('retorna status "401"', (done) => {
      expect(response).to.have.status(401);
      done();
    });
    it('"message" tem o valor "All fields must be filled"', (done) => {
      expect(response.body.message).to.be.equals('All fields must be filled');
      done();
    });
  });

  describe('Valida o campo email', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.insertOne(userObj);

      response = await chai.request(server).post('/login').send(emailError);
    });

    after(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.deleteOne({
        email: 'pedro@teste.com'
      });
    })

    it('retorna status "401"', (done) => {
      expect(response).to.have.status(401);
      done();
    });
    it('"message" tem o valor "Incorrect username or password"', (done) => {
      expect(response.body.message).to.be.equals('Incorrect username or password');
      done();
    });
  });

  describe('Valida o campo password', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.insertOne(userObj);

      response = await chai.request(server).post('/login').send(passwordError);
    });

    after(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.deleteOne({
        email: 'pedro@teste.com'
      });
    })

    it('retorna status "401"', (done) => {
      expect(response).to.have.status(401);
      done();
    });
    it('"message" tem o valor "Incorrect username or password"', (done) => {
      expect(response.body.message).to.be.equals('Incorrect username or password');
      done();
    });
  })

  describe('Valida que é possível fazer login com sucesso', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.insertOne(userObj);

      response = await chai.request(server).post('/login').send(correctLogin);
    });

    after(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.deleteOne({
        email: 'pedro@teste.com'
      });
    });

    it('retorna status "200"', (done) => {
      expect(response).to.have.status(200);
      done();
    });
    it('o corpo da requisição possui a chave "token"', (done) => {
      expect(response.body).to.have.property('token');
      done();
    })
  })
})
