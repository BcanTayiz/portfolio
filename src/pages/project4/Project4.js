import React,{useState} from 'react'

import Slider from '@mui/material/Slider';

import './Project4.css'
import { set } from 'lodash';

export default function Project4() {

  
  const [random1,setRandom1] = useState(Math.floor(Math.random() * 100))
  const [random2,setRandom2] = useState(Math.floor(Math.random() * 100))
  const [random3,setRandom3] = useState(Math.floor(Math.random() * 100))
  const [random4,setRandom4] = useState(Math.floor(Math.random() * 100))
  const [random5,setRandom5] = useState(Math.floor(Math.random() * 100))

  const [timeValue,setTimeValue] = useState(30)
  const [gameStart,setGameStart] = useState(false)
  const [startGameCount,setStartGameCount] = useState(0)

  const [timeinterval,setTimeinterval] = useState(null)

  const [life,setLife] = useState(3)

  const [message,setMessage] = useState("")

  const [round,setRound] = useState(1)

  const findOutlier = (array) => {

    const average = (array) => array.reduce((a, b) => a + b) / array.length

    let diff = Math.abs(array[0] - average(array))
    let outlier = 0
    for(let i = 0; i < array.length; i++){
      if(Math.abs(array[i] - average(array)) > diff){
        diff = Math.abs(array[i] - average(array))
        outlier = array[i]
      }
    }
    console.log(outlier)
    return outlier
  }


  const startGame = () => {

    setGameStart(true)
    setStartGameCount(prev=> prev + 1)

    if(life < 0 ){
      setMessage("Game Over")
      setTimeout(() => {
        setMessage("Press Start to Play Again")
      }, 2000);
      setLife(3)
      setRound(1)
      setRandom1(Math.floor(Math.random() * 100))
      setRandom2(Math.floor(Math.random() * 100))
      setRandom3(Math.floor(Math.random() * 100))
      setRandom4(Math.floor(Math.random() * 100))
      setRandom5(Math.floor(Math.random() * 100))
    }else{
      
    }
    if(startGameCount <= 1){
      setStartGameCount(prev=> prev + 1)
      let time = setInterval(() => {
        if(timeValue <= 0){
          clearInterval(time)
          setLife(life => life - 1)
          setMessage("Game Over")
        }
        setTimeValue(timeValue => timeValue - 1)
      },1000)

      setTimeinterval(time)

    }
    
   
  }

  const restartGame = () => {
    setMessage('Game is over, Page is going to be restarted')
    setTimeout(() => {
      setLife(3)
      setRound(1)
      setRandom1(Math.floor(Math.random() * 100))
      setRandom2(Math.floor(Math.random() * 100))
      setRandom3(Math.floor(Math.random() * 100))
      setRandom4(Math.floor(Math.random() * 100))
      setRandom5(Math.floor(Math.random() * 100))
      setGameStart(true)
      setTimeinterval(prev => clearInterval(prev))
      setMessage('Game started')
      window.location.reload()
    }, 2000);
    
  }


  const handleOutlier1 = () => {
    if(life === 0 || timeValue === 0) restartGame()
    let newArray = [random1,random2,random3,random4,random5]
    let outlier = findOutlier(newArray)
    if(life > 0 && timeValue > 0 && gameStart){
      if(outlier === random1){
        setMessage('Outlier is correct')
        setRound(round => round + 1)
        setTimeValue(timeValue => timeValue + 15)
      }else{
        setMessage('Outlier is incorrect')
        setLife(life => life - 1)
        
      }
  
      setRandom1(Math.floor(Math.random() * 100))
      setRandom2(Math.floor(Math.random() * 100))
      setRandom3(Math.floor(Math.random() * 100))
      setRandom4(Math.floor(Math.random() * 100))
      setRandom5(Math.floor(Math.random() * 100))
    }
    

  }

  const handleOutlier2 = () => {
    if(life === 0 || timeValue === 0) restartGame()
    let newArray = [random1,random2,random3,random4,random5]
    let outlier = findOutlier(newArray)
    if(life > 0 && timeValue > 0 && gameStart){
      if(outlier === random2){
        setMessage('Outlier is correct')
        setRound(round => round + 1)
        setTimeValue(timeValue => timeValue + 15)
      }else{
        setMessage('Outlier is incorrect')
        
        setLife(life => life - 1)
        
      }
  
      setRandom1(Math.floor(Math.random() * 100))
      setRandom2(Math.floor(Math.random() * 100))
      setRandom3(Math.floor(Math.random() * 100))
      setRandom4(Math.floor(Math.random() * 100))
      setRandom5(Math.floor(Math.random() * 100))
    }
   
    
  }


  const handleOutlier3 = () => {
    if(life === 0 || timeValue === 0) restartGame()
    let newArray = [random1,random2,random3,random4,random5]
    let outlier = findOutlier(newArray)
    if(life > 0 && timeValue > 0 && gameStart){
      if(outlier === random3){
        setMessage('Outlier is correct')
        setRound(round => round + 1)
        setTimeValue(timeValue => timeValue + 15)
      }else{
        setMessage('Outlier is incorrect')
        setLife(life => life - 1)
       
      }
  
        setRandom1(Math.floor(Math.random() * 100))
        setRandom2(Math.floor(Math.random() * 100))
        setRandom3(Math.floor(Math.random() * 100))
        setRandom4(Math.floor(Math.random() * 100))
        setRandom5(Math.floor(Math.random() * 100))
    }
   

  }


  const handleOutlier4 = () => {
    if(life === 0 || timeValue === 0) restartGame()
    let newArray = [random1,random2,random3,random4,random5]
    let outlier = findOutlier(newArray)
    if(life > 0 && timeValue > 0 && gameStart){
      if(outlier === random4){
        setMessage('Outlier is correct')
        setRound(round => round + 1)
        setTimeValue(timeValue => timeValue + 15)
      }else{
        setMessage('Outlier is incorrect')
        setLife(life => life - 1)
        
      }
  
      setRandom1(Math.floor(Math.random() * 100))
        setRandom2(Math.floor(Math.random() * 100))
        setRandom3(Math.floor(Math.random() * 100))
        setRandom4(Math.floor(Math.random() * 100))
        setRandom5(Math.floor(Math.random() * 100))
    }
   

  }

  const handleOutlier5 = () => {
    if(life === 0 || timeValue === 0) restartGame()
    let newArray = [random1,random2,random3,random4,random5]
    let outlier = findOutlier(newArray)
    if(life > 0 && timeValue > 0 && gameStart){
      if(outlier === random5){
        setMessage('Outlier is correct')
        setRound(round => round + 1)
        setTimeValue(timeValue => timeValue + 15)
        
      }else{
        setMessage('Outlier is incorrect')
        setLife(life => life - 1)
        
      }
      setRandom1(Math.floor(Math.random() * 100))
      setRandom2(Math.floor(Math.random() * 100))
      setRandom3(Math.floor(Math.random() * 100))
      setRandom4(Math.floor(Math.random() * 100))
      setRandom5(Math.floor(Math.random() * 100))
    }
    

    

  }


  return (
    <div className='container'>
        
        <section className='headerContainer'>
            <h1>Find the Outlier</h1>
            <br/>
            <h2>Round: {round}</h2>
            <h2>Life: {life}</h2>
            <br/>
            <h3>{message}</h3>
            <br/>
            <h4>round time: {timeValue >= 0 ? timeValue : 'Game is Over'} </h4>
            
            <button onClick={startGame}>Start the Game</button>
        </section>

        <section className='buttonContainer'>
          <button onClick={handleOutlier1}>
              {random1}
          </button>
          <button onClick={handleOutlier2} >
              {random2}
          </button>
          <button onClick={handleOutlier3}>
              {random3}
          </button>
          <button onClick={handleOutlier4}>
              {random4}
          </button>
          <button onClick={handleOutlier5}>
              {random5}
          </button>
        </section>
        
        
    </div>
  )
}
