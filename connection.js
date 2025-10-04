const mongoose = require("mongoose");

const connectDb = async (url) =>{
return await mongoose.connect(url)
.then( () => {
    console.log('mongodb connected succesfully');
})
.catch( () => {
    console.log("connection failed")
});
};

module.exports = { connectDb };
