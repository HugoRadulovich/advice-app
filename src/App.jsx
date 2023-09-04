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
       <section className="bg-dark-grayish-blue h-fit-content   w-3/5 flex justify-center items-center flex-col text-center  rounded-3xl gap-9">
          {
            idAdvice && <h1 className="text-neon-green text-sm font-manrope tracking-[.40em] text-center p-4">ADVICE #{idAdvice}</h1>
          }
          {
            advice &&  <p className="text-light-cyan text-3xl text-center  font-manrope line-clamp-3  font-semibold leading-relaxed ">"{advice}"</p>
          }
          <img src="src\assets\pattern-divider-desktop.svg" alt="pattern divider for desktop" className="" />
         <div className=" relative top-9">
         <button className="bg-neon-green w-16 h-16 rounded-full flex justify-center items-center shadow-nuevo hover:shadow-neon-green" onClick={handleClick}>
            <img src='src\assets\icon-dice.svg' alt="image of button" className="" />
          </button>
         </div>
       </section>
    </main>
  )
}

export default App
