const mongoose = require('mongoose');

// creating schema
const postSchema = new mongoose.Schema({

    topic :{
       type :String,
       required :true 
    },
    description :{
        type :String,
       required :true 

    },
    postCategory :{
        type :String,
       required :true 

    }

});

module.exports = mongoose.model('Post',postSchema);