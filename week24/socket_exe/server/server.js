import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'


const app = express()

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"]
    }
})

io.on('connect', (socket) => {
    console.log('connected by id:', socket.id);

    socket.on('disconnect', () => {
        console.log('disconnected', socket.id);

    })

    socket.on('room:join', (roomId) => {
        socket.join(roomId)
        console.log(`Socket ${socket.id} joined room ${roomId}`)
    })

    socket.on('room:msg', ({ room, msg }) => {
        io.to(room).emit('room:msg', msg)
    })
})


server.listen(3000, () => {
    console.log('server running...');

})

