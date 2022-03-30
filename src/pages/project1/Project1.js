import React,{useState,useEffect} from 'react'
import axios from "axios";

import './Project1.css'

import { BsFillArrowRightCircleFill} from "react-icons/bs";


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

export default function Project1() {


  const [wordData,setWordData] = useState([])
  const [shuffledData,setShuffledData] = useState([])
  const [pickedword,setPickedWord] = useState('')
  const [pickedMeaning,setPickedMeaning] = useState('')

  const [whiteList,setWhiteList] = useState([])

  const [suggestedWord,setSuggestedWord] = useState('')
  const [suggestedMeaning,setSuggestedMeaning] = useState('')

  const [colorWord,setColorWord] = useState('')
  const [colorMeaning,setColorMeaning] = useState('')

  const [round,setRound] = useState(1)
  const [message,setMessage] = useState(false)

  const [score, setScore] = useState(0)

  const getSelectedItems = () => {
      if(pickedMeaning !== '' && pickedword !== ''){
        if(whiteList.length >= 8){
          setMessage(true)
          
           
          setShuffledData([])
          
          
          setTimeout(() => {
            getData()
            
          }, 6000);

          
          setTimeout(() => {
            setWordData([])
            setWhiteList([])  
          }, 5000);
          

          
          
        }

        if(pickedMeaning === suggestedMeaning && pickedMeaning !== '' && suggestedMeaning !== ''){
          setScore(score => score += 3)
          setWhiteList(prev => [...prev, pickedword])
          setWhiteList(prev =>[...prev,pickedMeaning])
          setPickedMeaning('')
          setPickedWord('')
        }else{
          console.log(pickedword,suggestedMeaning)
          setScore(score => score -= 5)
          setWhiteList(prev => [...prev, pickedword])
          setWhiteList(prev =>[...prev,pickedMeaning])
          setPickedMeaning('')
          setPickedWord('')
        }

        console.log(whiteList)
       
        console.log(whiteList.length)
      }
     
      
      
  }

  const handleWordPick = (word,meaning) => {
    setPickedWord(word)
    setSuggestedMeaning(meaning)
    setColorWord('red')
  }

  const handleTheMEaning = (meaning,word) => {
    setPickedMeaning(meaning)
    setSuggestedWord(word)
    setColorMeaning('green')
  }



  const getData = async () => {
    setMessage(false)
    const options = {
      method: 'GET',
      url: 'https://english-random-word.p.rapidapi.com/random_words/5',
      headers: {
        'X-RapidAPI-Host': 'english-random-word.p.rapidapi.com',
        'X-RapidAPI-Key': '751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47'
      }
    };
    
    axios.request(options).then(function (response) {
      setWordData(response.data)
      setShuffledData(shuffle(response.data))
      
    }).catch(function (error) {
      console.error(error);
    });
    }
    

    useEffect(() => {
      getData()
    }, []);

    

  


  return (


    <main className='container'>
      
      <h2>Word Meaning matching game</h2>
      <p>Try to check word and meanings and get 3 for equals and -5 for not matching</p>
    <div className='sectionContainer'>
      <section>
      {(wordData).map((el,index) => (
        <div className='words' style={{backgroundColor: whiteList.includes(pickedword) ? '' : pickedword === el['word'] ? 'red' : ''}} value={el['word']} key={el['word']}  onClick={() => handleWordPick(el['word'],el['meaning'])}>
          <p>{whiteList.includes(el['word']) ? 'Tried': el['word']}</p> 
        </div>
      ))}
      </section>

      <section>
      {shuffledData.map((el,index) => (
        <div className='meaning' style={{backgroundColor:whiteList.includes(pickedMeaning) ? '': pickedMeaning === el['meaning'] ? 'green': ''}} key={el['word']} onClick={() => handleTheMEaning(el['meaning'],el['word'])}>
          <p>{whiteList.includes(el['meaning']) ? 'Tried' : el['meaning']}</p>
        </div>
      ))}
      </section>
      
      <section className='buttonContainer'>
        <button onClick={getSelectedItems}>Check</button>
        <br/>
        <p></p>
        <p>{whiteList.length >=8 ? 'Score: ' + score :''}</p>
      </section>
      
      </div> 

      <div className='trialOnes'>
      {whiteList.map((el,index) => (
          <div key={el}> 
            <p className='triedElement'>{index % 2 == 0 ? 'tried word ==> '+`${el}` : 'tried meaning ==> ' + `${el}` }</p>
          </div>
        )) }

        <h2>{message && 'True Meanings' }</h2>
        {message  && wordData.map(el => (
          <div key={el} className='wordMeaningBlock'> 
            <p className='wordResult'>{el['word']}</p>  
            <BsFillArrowRightCircleFill/>
            <p className='meaningResult'>{el['meaning']}</p>
          </div>
        ))}
      </div>

    </main>
    
  )
}
