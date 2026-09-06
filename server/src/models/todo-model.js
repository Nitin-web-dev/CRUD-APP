const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    title: String,
    statusChecked: {
        type: Boolean,
        default: false
    }
});

const todoModel = mongoose.model("todos", todoSchema);
module.exports = todoModel;