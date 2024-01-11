const express = require('express'); 
const router = express.Router(); 

// 웹 Controller 경로지정
const webController = require('./web/controller');
// User Controller 경로지정
const apiUserController = require('./api/user/controller');
// Feed Controller 경로지정
const apiFeedController = require('./api/feed/controller');


//메인
router.get('/', webController.home);
router.get('/page/:page', webController.page);
router.get('/sitemap', webController.sitemap);

//유저
router.get('/api/user/:id', apiUserController.userinfo);

//피드
router.get('/api/feed', apiFeedController.index);
router.post('/api/feed', apiFeedController.store);
router.get('/api/feed/:id',apiFeedController.show);
router.post('/api/feed/:id', apiFeedController.update);
router.post('/api/feed/:id/delete',apiFeedController.destroy);

module.exports = router;