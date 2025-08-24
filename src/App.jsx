import react, { useState } from 'react'

const App = ()=> {

   const[count, setcount] = useState(0)

   const Increase = ()=>{ 
   
    setcount(count + 1)
     }

   const Decrease = ()=> {

    if(count > 0) {
   
    setcount(count - 1)
     
    }
   }

   const Reset = ()=> {
    setcount(0)
   }

  return (
   <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-semibold mb-6">Chick Magnet 💅✨ </h1>

 <div className="text-6xl font-bold mb-6">{count}</div>

<div className='flex gap-4'>

 <button onClick={Increase} className="bg-pink-600 px-6 py-2 rounded-xl text-lg hover:bg-pink-400"> You Attract! ❤️ </button>

 <button onClick={Reset} className="bg-pink-600 px-6 py-2 rounded-xl text-lg hover:bg-pink-400"> Be a Nice guy 😇</button>

 <button onClick={Decrease} className='bg-pink-600 px-6 py-2 rounded-xl text-lg hover:bg-pink-400 '>Nah you are Just Simp :( 😔💔</button>
   
   </div>
   
   </div>
  )
}

export default App