const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const sinon = require('sinon');
const server = require('../api/app');
const { MongoClient } = require('mongodb');
const getConnection = require('./connectionMocks');
const { userObj } = require('../utils/mocksObjects');

describe('POST /users', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Valida se campos name, email e password existem', () => {
    let response;

    before(async () => {
      response = await chai.request(server).post('/users').send({});
    })

    it('retorna status "400"', (done) => {
      expect(response).to.have.status(400);
      done();
    });
    it('"message" tem o valor "Invalid entries. Try again."', (done) => {
      expect(response.body.message).to.be.equals('Invalid entries. Try again.');
      done();
    })
  });

  describe('Valida se o email já não está registrado', () => {
    let response;

    before(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.insertOne(userObj);

      response = await chai.request(server).post('/users').send(userObj)
    });

    after(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.deleteOne({
        email: 'pedro@teste.com'
      });
    })

    it('retorna status "409"', (done) => {
      expect(response).to.have.status(409);
      done();
    });
    it('"message" tem o valor "Email already registered"', (done) => {
      expect(response.body.message).to.be.equals('Email already registered');
      done();
    })
  });

  describe('Valida que é possível cadastrar usuário com sucesso', () => {
    let response;

    before(async () => {
      response = await chai.request(server).post('/users').send(userObj);

    });

    after(async () => {
      const usersCollection = connectionMock.db('Cookmaster').collection('users');
      await usersCollection.deleteOne({
        email: 'pedro@teste.com'
      });
    })

    it('retorna status "201"', (done) => {
      expect(response).to.have.status(201);
      done();
    });

    it('retorna o objeto "user"', () => {
      expect(response.body.user).to.have.all.keys(['name', 'email', 'role', '_id']);
    })
  })
})
