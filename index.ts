import dotenv from 'dotenv';
import server from './src/server/index';

dotenv.config()
const port = process.env.PORT || 3001

//Run server
server.listen(port, ()=>{
    console.log(`[SERVER ON]: Runnin on port ${port}`)
});

//Server error?
server.on('error', (error)=>{
    console.log(`[SERVER ERROR]: ${error}`)
})