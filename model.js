const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    P_Id: Number,
    P_Name: String,
    P_Cost: String,
    P_Desc:String,
    P_Image:String
});

module.exports = mongoose.model('Product', ProductSchema);
