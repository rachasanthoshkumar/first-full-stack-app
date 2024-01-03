const {todo} = require('./db')
const {createTodo} = require('./types')
const cors = require('cors')


const express = require('express')

const app = express();
app.use(cors())
app.use(express.json())


app.post('/todo',(req,res)=>{
    
    const isDataCorrect = createTodo.safeParse(req.body)
    if(!isDataCorrect.success){
        res.json({
            "msg":"wrong inputs"
        })
    }else{
        todo.create({
            title:req.body.title,
            description:req.body.description,
            completed:false
        })
        res.json({
            "msg":"todo added succesfully"
        })
    }

})

app.get('/todos',(req,res)=>{
    
})

app.put('/completed',(req,res)=>{
    
})





app.listen(3004)