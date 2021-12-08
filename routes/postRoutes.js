const express = require('express');
const postControllers = require('../controllers/postControllers');
const tokenExpiredVerification = require('../authentications/tokenExpiredVerification');
const validateSchemas = require('../middlewares/validateSchemas');
const blogPostsSchemas = require('../schemas/blogPostsSchemas');

const postRoutes = express.Router();

// /post
postRoutes
  .route('/')
  .post(
    tokenExpiredVerification,
    validateSchemas(blogPostsSchemas),
    postControllers.createPostController,
  )
  .get(tokenExpiredVerification, postControllers.getAllPostControllers);

// /post:id
postRoutes
  .route('/:id')
  .get(tokenExpiredVerification, postControllers.getByIdControllers);

module.exports = postRoutes;
