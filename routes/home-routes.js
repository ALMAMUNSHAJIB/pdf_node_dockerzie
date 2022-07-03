const router = require('express').Router();
const {homeView, genaratePdf} = require('../controllers/homeController')


router.get('', homeView);
router.get('/download', genaratePdf);


module.exports = router;
