const express = require("express")
const http = require("http")
const {Server} = require("socket.io")

const app = express();
const Server = http.createServer(app);
const io =new Server(Server,{
    cors:{
        origin: "http://localhost:8000",
        methods:["GET","POST"]
    }
});

app.use(express.json());
app.use(cors());

const userMap = new Map();
const PORT = process.env.PORT || 8000;

app.get('/',(req, res)=>{
    res.send("Hello World");
});

io.on("connection",(socket)=>{
    socket.emit("me",socket.id);

    socket.on("disconnet",()=>{
        socket.broadcast.emit("callEnded");
    });

    socket.on("callUser",({userToCall,signalData, from,name})=>{
        io.to(userToCall).emit("callUser",{signal:signalData, from, name});
    });

    socket.on("answerCall",(data)=>{
        io.to(data.to).emit("callAccepted",data.signal);
    });
});

Server.listen(PORT, ()=>console.log('Server is running on port ${PORT}'));


