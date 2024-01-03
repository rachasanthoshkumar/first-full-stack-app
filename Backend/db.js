const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://SanthoshRacha:BMW3series@cluster0.beyzwdr.mongodb.net/myFullStackApp')

const todo = mongoose.model('todos',{
    title:String,
    description:String,
    completed:Boolean
})

module.exports={
    todo:todo
}
