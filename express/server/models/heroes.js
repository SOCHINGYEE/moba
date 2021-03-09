const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String},
    avatar: { type: String},
    banner: { type: String},
    categories: [{type: mongoose.SchemaTypes.ObjectId, ref:'Category'}],
    stars:{
        difficult:{ type: Number },
        skill:{ type: Number },
        attack:{ type: Number },
        survive: { type: Number }
    },
    skills:[{
        icon: { type: String },
        name: { type: String },
        description: { type: String },
        cd: { type: String },
        
    }],

    leading_weapons:[{ type: mongoose.SchemaTypes.ObjectId, ref:'Good'}],
    losing_weapons:[{ type: mongoose.SchemaTypes.ObjectId, ref:'Good'}],

    usefulSkill:{ type: String },

    partners: [{ 
        relationship:{type:String},
        description: { type: String },
        hero: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'}]
    }]
})

   

module.exports = mongoose.model('Hero', schema)