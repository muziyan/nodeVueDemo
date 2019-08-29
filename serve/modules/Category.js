const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{type:String},
    //type表示是一个数据库里面的id
    //ref表示关联的哪一个模型
    parent:{type: mongoose.SchemaTypes.ObjectId,ref:"Category"}
});

module.exports = mongoose.model("Category",schema);