const todoModel = require("../models/todo-model")
const checkRequestEmpty= require('../utils/checkRequestEmpty')


module.exports.getTodo = async function(req,res){
    const todos = await todoModel.find();
    return res.status(200).json({"message": "ok",data: todos});
}

module.exports.createTodo = async function(req,res){
    
    if(checkRequestEmpty(req.body)){
        return res.status(200).json({"messsage":"field are emtpy"});
    }
    const todo = req.body.title;
    
    const todos = await todoModel.create({
        title: todo
    });
    return res.status(201).json({message: "ok",
        data: todos
    });
}
 
module.exports.updateTodo = async function(req,res){
    if(checkRequestEmpty(req.body)){
        return res.status(200).json({"messsage":"field are emtpy"});
    }
    let id = req.params.id;
    let statusChecked = req.body.statusChecked;
    const updatedTodo = await todoModel.findOneAndUpdate({_id: id}, {statusChecked},  { new: true })
    return res.status(200).json({"message": "ok",
        "data": "updated",
        "id": req.params.id,
        data: updatedTodo
    });
}
module.exports.deleteTodo = async function(req,res){
    let id = req.params.id;
    const deteleTodo = await todoModel.findOneAndDelete({_id: id});
    // return res.status(204).json({"message": "ok",
    //     "data": "delete data",
    //     "id": req.params.id,
    //     "dataBody":deteleTodo
    // });
    return res.status(204).send();
}