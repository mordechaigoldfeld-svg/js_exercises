import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import './App.css'

function App() {

  const ws = useRef<Socket | null>(null)
  const [isConected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [activeRoom, setActiveRoom] = useState('room:A')


  useEffect(() => {
    ws.current = io('ws://localhost:3000')

    ws.current.on('connect', () => {
      console.log('connected');
      setIsConnected(true)
      ws.current?.emit('room:join', 'room:A')
    })

    ws.current.on('disconnect', () => {
      console.log('disconnected');
      setIsConnected(false)
    })

    ws.current.on('room:msg', (msg) => {
      setMessages(prev => [...prev, msg])
    })
    return () => {
      ws.current?.disconnect()
    }
  }, [])

  const switchRoom = (roomName) => {
    setActiveRoom(roomName)
    setMessages([])
    ws.current?.emit('room:join', roomName)
  }


  const handleSend = () => {
    if (input.trim() && ws.current?.connected) {
      ws.current.emit('room:msg', {
        room: activeRoom,
        msg: input
      })

      setInput('')
    }
  }

  return (
    <>
      <p>status:{isConected ? '🟢connected' : '🔴disconnect'}</p>

      <div>
        <button onClick={()=>switchRoom('room:A')}>Room:A</button>
        <button onClick={()=>switchRoom("room:b")}>Room:B</button>
      </div>
      <h3>messagen in {activeRoom}</h3>
      <ul>
       {messages.map((msg,index)=>(
        <li key={index}>{msg}</li>
       ))}
      </ul>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='send a message' />
      <button onClick={handleSend}>send</button>
    </>
  )
}

export default App
