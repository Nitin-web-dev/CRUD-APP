const mongoose = require('mongoose');


async function connectDB(){
    try {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/simplecrudapp");
        if(!db) throw error('db is not connected');
            
        console.log('db is connected')
        
    } catch (error) {
        if(error) console.log(error.messege);
        throw error;
    }
}

module.exports = connectDB