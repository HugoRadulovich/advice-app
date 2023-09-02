import { useEffect, useState } from 'react'
import './App.css'


const URL_ADVICE = 'https://api.adviceslip.com/advice';

function App() {


  const [advice, setAdvice] = useState()
  const [idAdvice, setIdAdvice] = useState()

  const handleClick = () => {
  
    fetch(URL_ADVICE)
    .then(resp => resp.json())
    .then(resp => {
      const {slip} = resp;
      console.log(slip);
      setAdvice(slip.advice);
      setIdAdvice(slip.id);
      
    })
  }

  useEffect(() => {
  handleClick();

  }, [])
  

  return (
    <main className='h-screen flex flex-col items-center justify-center'>
       <section className="bg-dark-grayish-blue h-2/5  w-3/5 flex justify-center items-center flex-col  border-4 rounded-3xl gap-8">
          {
            idAdvice && <h1 className="text-neon-green text-xl font-manrope tracking-widest font-semibold">ADVICE #{idAdvice}</h1>
          }
          {
            advice &&  <p className="text-light-cyan text-3xl font-manrope tracking-widest font-semibold">"{advice}"</p>
          }
          <img src="src\assets\pattern-divider-desktop.svg" alt="pattern divider for desktop" className="" />
          <button className="bg-neon-green w-16  h-16 rounded-full flex justify-center items-center shadow-nuevo hover:shadow-neon-green" onClick={handleClick}>
            <img src='src\assets\icon-dice.svg' alt="image of button" className="" />
          </button>
       </section>
    </main>
  )
}

export default App
