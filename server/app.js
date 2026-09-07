const express = require('express');
const connectDB = require('./src/config/config')
const todoRouter = require('./src/routes/todosRouter')
const cors = require('cors')

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));




// rotues 
app.use('/api', todoRouter);



startServer();

 async function startServer(){
    try {
        await connectDB();
        app.listen(3000,()=>{console.log("server in on")})
    } catch (error) {
        if(error) console.log(error.message);
        process.exit(1);
    }
}
