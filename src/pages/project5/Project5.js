import { max, min } from 'lodash';
import React,{useState} from 'react'

import './Project5.css'

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default function Project5() {

  const [numberseq,setNumberSeq] = useState([])

  const [option1,setOption1] = useState(0)
  const [option2,setOption2] = useState(0)
  const [option3,setOption3] = useState(0)

  const [cond,setCond] = useState(false)

  const [correctOption,setCorrectOption] = useState(0)

  const [correctScore,setCorrectScore] = useState(0)
  const [wrongScore,setWrongScore] = useState(0)

  const randomSequenceGenerator = () => {

    setCond(prev => prev = true)

    let x = 0
    let a = '-'
    let b = '+'
    let c = '/'
    let d = '*'
    let k = Math.ceil(Math.random() * 50)
    let sequence = []
    for(let i = 0; i < 10; i++){
      let num = Math.floor(Math.random() *100)
      if (num < 25){
        sequence.push(a)
      }else if(num < 50){
        sequence.push(b)
      }else if(num < 75){
        sequence.push(c)
      }else{
        sequence.push(d)
      }

    let numberSequenceList = []
    for(let i = 0; i < 9; i++){
      let num = Math.ceil(Math.random() * 10)
      let num2 = Math.ceil(Math.random() * 10)
      for(let j = 0;j<sequence.length;j++){}
        if(sequence[i] === a){
          num = num + num2
        }
        if(sequence[i] === b){
          num = num - num2
        }
        if(sequence[i] === c){
          num = Math.ceil(num / num2)
        }
        if(sequence[i] === d){
          num = num * num2
        }
        numberSequenceList.push(num)
    }

    setNumberSeq(numberSequenceList)
    let len = numberSequenceList.length

    let element1 = numberSequenceList[Math.floor(Math.random() * len)]  === numberSequenceList[len-1] ?  
    max(numberSequenceList)-min(numberSequenceList) + numberSequenceList[Math.floor(Math.random() * len)] 
    : numberSequenceList[Math.floor(Math.random() * len)]
    let element2 = numberSequenceList[Math.floor(Math.random() * len)]  === numberSequenceList[len-1] ?  
    max(numberSequenceList)-min(numberSequenceList) + numberSequenceList[Math.floor(Math.random() * len)] 
    : numberSequenceList[Math.floor(Math.random() * len)]
    let element3 = numberSequenceList[Math.floor(Math.random() * len)] 
    setCorrectOption(element3)
    let lastList = shuffle([element1,element2,element3])
    setOption1(lastList[0])
    setOption2(lastList[1])
    setOption3(lastList[2])
    return 0 
  }}

  const handleOption = (opt,num) => {
    if(cond)
    {
      if(opt === correctOption && num === 1){
        setCorrectScore(prev => prev + 1)
        setCond(prev => prev = false)
      }else if(opt == correctOption && num === 2){
        setCorrectScore(prev => prev + 1)
        setCond(prev => prev = false)
      }else if(opt === correctOption && num === 3){
        setCorrectScore(prev => prev + 1)
        setCond(prev => prev = false)
      }
      else{
        setWrongScore(wrongScore + 1)
        setCond(prev => prev = false)
      }
    }
    
  }


  return (
    <div className='friendshipContainer'>
      <section className='header'>
        <h2>Sequence Game</h2>
        <button onClick={randomSequenceGenerator}>
          {correctScore + wrongScore === 0 ? 'Start' : 'Next'}
        </button>
        <h3>Correct: {correctScore}</h3>
        <h3>Wrong: {wrongScore}</h3>
      </section>

      <section className='numberSet'>
        {numberseq.map((el,index) => {
          if(index == numberseq.length - 1){
            return(
              <div className='numContainer'>
                <h3>Guess the Number</h3>
              </div>
            )
          }else{
            return(
              <div className='numContainer'>
                <h3>{el}</h3>
              </div>
            )
          }
        }
        )}
      </section>

      <section >
          <button className='buttonProject5'  onClick={() => handleOption(option1,1)}>{option1}</button>
          <button className='buttonProject5' onClick={() => handleOption(option1,2)}>{option2}</button>
          <button className='buttonProject5' onClick={() => handleOption(option1,3)}>{option3}</button>
      </section>
    </div>
  )

  }


