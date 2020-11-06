const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    id:{
        type: Number,
        required: false
    },
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    platforms:{
        type: String,
        required: true
    },
    first_release_date:{
        type: Number,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    cover:{
        type: String,
        required: true
    }
},
    {
        
        versionKey: false
    }  
);

const gamesCollection = mongoose.model('games', gameSchema);

module.exports = {gamesCollection}