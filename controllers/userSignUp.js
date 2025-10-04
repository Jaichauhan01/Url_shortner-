const User = require('../models/user');


const handleSignUp = async (req, res) => {
    const {name , email , password} = req.body;
    console.log(req.body);
    await User.create({
      name,
      email,
      password,
    });
    console.log(User);
  return  res.render('home');
};




 module.exports = {
   handleSignUp, 
 };