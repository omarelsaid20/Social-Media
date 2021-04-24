const express = require('express');

const companyController = require('../controllers/company');

const router = express.Router();

router.post('/signup/company', companyController.signup);

router.post('/login/company', companyController.login);

router.post('/post_job', companyController.postJob);

router.get('/posts', companyController.getPosts);

router.delete('/post/:postId', companyController.deletePost);

// profile
 
//edit profile

//see applicants

//see best candidites


module.exports = router;