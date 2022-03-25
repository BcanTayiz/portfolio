import React,{useState} from 'react'
import Select from 'react-select'

import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Footer from '../../../components/Footer/Footer';





import './Project2.css'

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


export default function Project2() {


  const [selected1,setSelected1] = useState(null)
  const [selected2,setSelected2] = useState(null)
  const [selected3,setSelected3] = useState(null)
  const [selected4,setSelected4] = useState(null)
  const [selected5,setSelected5] = useState(null)

  const [score1,setScore1] = useState(Math.floor(Math.random() * 30))
  const [score2,setScore2] = useState(Math.floor(Math.random() * 30))
  const [score3,setScore3] = useState(Math.floor(Math.random() * 30))
  const [score4,setScore4] = useState(Math.floor(Math.random() * 30))
  const [score5,setScore5] = useState(Math.floor(Math.random() * 30))

  const [computerScore,setComputerScore] = useState(0)
  const [playerScore,setPlayerScore] = useState(0)

  const [computerHand,setComputerHand] = useState([])

  const [winMessage, setWinMessage] = useState('')

  const options = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },
  ]



  const handleBattle = () => {

    

    let selectedOnes = [selected1,selected2,selected3,selected4,selected5]

    console.log(selectedOnes)


    if(selected1 && selected2 && selected3 && selected4 && selected5 &&
      selectedOnes.filter(x => x === selected1).length <= 1 &&
      selectedOnes.filter(x => x === selected2).length <= 1 &&
      selectedOnes.filter(x => x === selected3).length <= 1 && 
      selectedOnes.filter(x => x === selected4).length <= 1 && 
      selectedOnes.filter(x => x === selected5).length <= 1 &&
      playerScore + computerScore < 30 )
      {

      let playerwon = 0
      let computerWon = 0
      let tie = 0

      let rnd

      let list = [
        {'name':'A','score':score1},
        {'name':'B','score':score2},
        {'name':'C','score':score3},
        {'name':'D','score':score4},
        {'name':'E','score':score5},
        ]
      
      let playerList = [
        {'name':selected1,'score':selected1 === 'A' ? score1 : selected1 === 'B' ? score2 : selected1 === 'C' ? score3 : selected1 === 'D' ? score4 : selected1 === 'E' ? score5 : ''},
        {'name':selected2,'score':selected2 === 'A' ? score1 : selected2 === 'B' ? score2 : selected2 === 'C' ? score3 : selected2 === 'D' ? score4 : selected2 === 'E' ? score5 : ''},
        {'name':selected3,'score':selected3 === 'A' ? score1 : selected3 === 'B' ? score2 : selected3 === 'C' ? score3 : selected3 === 'D' ? score4 : selected3 === 'E' ? score5 : ''},
        {'name':selected4,'score':selected4 === 'A' ? score1 : selected4 === 'B' ? score2 : selected4 === 'C' ? score3 : selected4 === 'D' ? score4 : selected4 === 'E' ? score5 : ''},
        {'name':selected5,'score':selected5 === 'A' ? score1 : selected5 === 'B' ? score2 : selected5 === 'C' ? score3 : selected5 === 'D' ? score4 : selected2 === 'E' ? score5 : ''},
      ]
    
        let computerList = shuffle(list)
        setComputerHand(computerList)

        console.log(computerList)

    
      for(let i=0;i<playerList.length;i++){
        
        if(playerList[i]['score'] > computerList[i]['score'] ){
          if(i === 0){
            setScore1(score => score + 3)
            playerwon += 1
          }
          if(i === 1){
            setScore1(score => score + 3)
            playerwon += 1
          }
          if(i === 2){
            setScore1(score => score + 3)
            playerwon += 1
          }
          if(i === 3){
            setScore1(score => score + 3)
            playerwon += 1
          }
          if(i === 4){
            setScore1(score => score + 3)
            playerwon += 1
          }
            
        }else if(playerList[i]['score'] === computerList[i]['score']){
          if(i === 0){
            let cond = true
            Math.random() > 0.5 ? setScore1(score => score + 1) : cond = false
            for(let j=0;j<computerList.length;j++){
              if(selected1 === computerList[i]['name'])
              {
                setScore1(score => score + 1)
                tie += 1
              }
              if(selected2 === computerList[i]['name'])
              {
                setScore2(score => score + 1)
                tie += 1
              }
              if(selected3 === computerList[i]['name'])
              {
                setScore3(score => score + 1)
                tie += 1
              }
              if(selected4 === computerList[i]['name'])
              {
                setScore4(score => score + 1)
                tie += 1
              }
              if(selected5 === computerList[i]['name'])
              {
                setScore5(score => score + 1)
                tie += 1
              }
            }
          }
          if(i === 1){
            let cond = true
            Math.random() > 0.5 ? setScore2(score => score + 1) : cond = false
            for(let j=0;j<computerList.length;j++){
              if(selected1 === computerList[i]['name'])
              {
                setScore1(score => score + 1)
                tie += 1
              }
              if(selected2 === computerList[i]['name'])
              {
                setScore2(score => score + 1)
                tie += 1
              }
              if(selected3 === computerList[i]['name'])
              {
                setScore3(score => score + 1)
                tie += 1
              }
              if(selected4 === computerList[i]['name'])
              {
                setScore4(score => score + 1)
                tie += 1
              }
              if(selected5 === computerList[i]['name'])
              {
                setScore5(score => score + 1)
                tie += 1
              }
            }
          }

          if(i === 2){
            let cond = true
            Math.random() > 0.5 ? setScore3(score => score + 1) : cond = false
            for(let j=0;j<computerList.length;j++){
              if(selected1 === computerList[i]['name'])
              {
                setScore1(score => score + 1)
                tie += 1
              }
              if(selected2 === computerList[i]['name'])
              {
                setScore2(score => score + 1)
                tie += 1
              }
              if(selected3 === computerList[i]['name'])
              {
                setScore3(score => score + 1)
                tie += 1
              }
              if(selected4 === computerList[i]['name'])
              {
                setScore4(score => score + 1)
                tie += 1
              }
              if(selected5 === computerList[i]['name'])
              {
                setScore5(score => score + 1)
                tie += 1
              }
            }
          }



          if(i === 3){
            let cond = true
            Math.random() > 0.5 ? setScore4(score => score + 1) : cond = false
            for(let j=0;j<computerList.length;j++){
              if(selected1 === computerList[i]['name'])
              {
                setScore1(score => score + 1)
                tie += 1
              }
              if(selected2 === computerList[i]['name'])
              {
                setScore2(score => score + 1)
                tie += 1
              }
              if(selected3 === computerList[i]['name'])
              {
                setScore3(score => score + 1)
                tie += 1
              }
              if(selected4 === computerList[i]['name'])
              {
                setScore4(score => score + 1)
                tie += 1
              }
              if(selected5 === computerList[i]['name'])
              {
                setScore5(score => score + 1)
                tie += 1
              }
            }
          }


          if(i === 4){
            let cond = true
            Math.random() > 0.5 ? setScore5(score => score + 1) : cond = false
            for(let j=0;j<computerList.length;j++){
              if(selected1 === computerList[i]['name'])
              {
                setScore1(score => score + 1)
                tie += 1
              }
              if(selected2 === computerList[i]['name'])
              {
                setScore2(score => score + 1)
                tie += 1
              }
              if(selected3 === computerList[i]['name'])
              {
                setScore3(score => score + 1)
                tie += 1
              }
              if(selected4 === computerList[i]['name'])
              {
                setScore4(score => score + 1)
                tie += 1
              }
              if(selected5 === computerList[i]['name'])
              {
                setScore5(score => score + 1)
                tie += 1
              }
            }
          }











        }
      }
        

        console.log(playerwon,tie/5)
        if(playerwon + tie/5 >= 3){{
          setWinMessage('Player Won')
          setPlayerScore(score => score += 1)
          if(playerScore + computerScore >= 30 && playerScore >= computerScore){
            setWinMessage('Player wins whole game')
          }else{
            setTimeout(() => {
              setWinMessage('start the game now')
              setComputerHand([])
            }, 7000);
          }
          
        }}else{
          setWinMessage('Computer Won')
          setComputerScore(score => score += 1)
          if(playerScore + computerScore >= 30 && computerScore > playerScore){
            setWinMessage('Computer wins whole game')
          }else{
            setTimeout(() => {
              setWinMessage('start the game now')
              setComputerHand([])
            }, 7000);
          }
        }

        setSelected1(null)
        setSelected2(null)
        setSelected3(null)
        setSelected4(null)
        setSelected5(null)
    }
    else{

      alert('please follow the requirements')
    }
    


  }


  return (

    <div className='container'>
        <article>
          <h2>Welcome to Strategy Alphabet Game</h2>
          <p>Shuffle the Card by following the scores</p>
          <p>High score always advantage to win and create a strategy from it.</p>
        </article>
        <section>
          <h4>Player Score: {playerScore}</h4>
          <h4>Computer Score: {computerScore}</h4>
        </section>
      <div className='flexbox'>

        <section className='scores'>
          <div>
            <h5>Value A </h5>
            {score1}
          </div>
          <div>
          <h5>Value B </h5>
            {score2}
          </div>
          <div>
          <h5>Value C </h5>
            {score3}
          </div>
          <div>
          <h5>Value D </h5>
            {score4}
          </div>
          <div>
          <h5>Value E </h5>
            {score5}
          </div>
          
        </section>

        <section className='computerHandContainer'>
          <div>
            {winMessage}
          </div>
          <div className='computerHand'>
            <h2>Computer Hand</h2>
            {computerHand.map((el,index) => (
                  <div className='computerHandPart'>
                    <p>{el['name']}</p>
                    <p>{el['score']}</p>
                  </div>
            ))}
          </div>
        </section>

        <section className='buttonSection'>
          <button onClick={handleBattle}>Start Alphabet Battle</button>
        </section>

        <section>
          <Select options={options}  onChange={e => setSelected1(e.label)} className="selectBox" />
          <Select options={options}  onChange={e => setSelected2(e.label)} className="selectBox" />
          <Select options={options} onChange={e => setSelected3(e.label)} className="selectBox" />
          <Select options={options} onChange={e => setSelected4(e.label)} className="selectBox" />
          <Select options={options} onChange={e => setSelected5(e.label)} className="selectBox" />
        </section>
      
      </div>
      <div>
        <h3>Selected Values</h3>
        <section>
        {selected1}  <BsFillArrowRightCircleFill/>  {selected2}  <BsFillArrowRightCircleFill/>
          {selected3}  <BsFillArrowRightCircleFill/>   {selected4}   <BsFillArrowRightCircleFill/>   {selected5}
        </section>

      </div>
    </div>
  )
}
