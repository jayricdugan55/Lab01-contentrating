import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  return (
    <div style={{ textAlign: 'center' }}>
      <p>Pa like</p>
      <button className="like-btn" onClick={() => setLikes(likes + 1)}>
        Like ({likes})
      </button>
      <button className="dislike-btn" onClick={() => setDislikes(dislikes + 1)}>
        Dislike ({dislikes})
      </button>
    </div>
  )
}

export default App
