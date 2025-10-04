const { timeStamp } = require('console');
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
shortId: {
    type : String,
    required : true,
    unique : true,
},

redirectUrl:{
type : String,
required :true,
},
visitHistory: [{
    timeStamp: {
      type: Date,
      default: Date.now,
      required: true,
    },
 }] 
},{
    timestamps : true
}
);
const URl = mongoose.model('url' ,urlSchema);

module.exports = URl;