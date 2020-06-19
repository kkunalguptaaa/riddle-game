const mongoose=require('mongoose');
const answerSchema=new mongoose.Schema({
    questionNo:{
        type:Number,
        required:true,
        trim:true
    },
    answer:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    }
})
const Answer=mongoose.model('Answer',answerSchema);
module.exports=Answer;