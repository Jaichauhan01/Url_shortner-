const express = require('express');
const router = express.Router();
const UserRoutes = require('../router/userRoute')
const {GenerateNewShortUrl} = require('../controllers/Url'); 
const StaticRoutes = require('./staticRouter')

router.use("/" ,UserRoutes);
router.use("/url" ,StaticRoutes);
router.post('/:shortiD' , GenerateNewShortUrl);

module.exports = router;