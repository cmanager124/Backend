const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    name:String,
    designation:String,
    company:String,
    industry:String,
    email:String,
    mobile:Number,
    country:String,
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
},{timestamps:true})

const contactModel=mongoose.model('Contact',contactSchema)

module.exports=contactModel;