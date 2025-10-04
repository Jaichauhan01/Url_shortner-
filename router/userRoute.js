const express = require('express');
const {handleSignUp} = require('../controllers/userSignUp');
const router = express.Router();


router.post("/signUp",handleSignUp )
router.get("/signUp" , (req, res) => {
    return res.render('signUp');
})

//export router

module.exports = router;