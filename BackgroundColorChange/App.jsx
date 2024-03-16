import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  const [text, setText] = useState('')

  const content = () => {
    setColor('red');
    setText('I am red')
  }

  const btn1 = () => {
    setColor('blue')
    setText('I am blue')
  }

  const btn2 = () => {
    setColor('green')
    setText("I am green")
  }
  const btn3 = () => {
    setColor('purple')
    setText("I am purple")
  }
  const btn4 = ()  => {
    setColor('black')
    setText("I am black")
  }
  return (
    <div className='w-full h-screen bg-black duration-200' style={{background: color}}>
          <div className='h-screen flex justify-center items-center text-white font-extrabold'>{text}</div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={content} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: 'red'}}>Red</button>
          <button onClick={btn1} className='px-4 py-1 rounded-full shadow-lg text-white' style={{background: 'blue'}}>Blue</button>
          <button onClick={btn2} className='px-4 py-1 rounded-full shadow-lg text-white' style={{background: 'green'}}>Green</button>
          <button onClick={btn3} className='px-4 py-1 rounded-full shadow-lg text-white' style={{background: 'purple'}}>Purple</button>
          <button onClick={btn4} className='px-4 py-1 rounded-full shadow-lg text-white' style={{background: 'black'}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App