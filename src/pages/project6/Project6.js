import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import axios from "axios";

import './Project6.css'





export default function Project6() {

  const [person1Text,setPerson1Text] = useState('')
  const [person2Text,setPerson2Text] = useState('')

  const [person1,setPerson1] = useState('')
  const [person2,setPerson2] = useState('')

  const [result,setResult] = useState('')


  const PersonalityCheck = async (text,user) => {


    const options = {
      method: 'GET',
      url: `https://myers-briggs-personality-test.p.rapidapi.com/personality/${text}`,
      headers: {
        'X-RapidAPI-Host': 'myers-briggs-personality-test.p.rapidapi.com',
        'X-RapidAPI-Key': '751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data
    }).then((data) => {
      console.log(data,'hello')
      if(user === 'person1'){
        let person1Result = data
        setPerson1(person1Result)
      }
      if(user === 'person2'){
        let person2Result = data
        setPerson2(person2Result)
      }
      console.log(person1,person2)

      if(person1 !== '' && person2 !== ''){
        setCompare(person1,person2)
        
      }

      


    }).catch(function (error) {
      console.error(error)
    });

  }

  

  const setCompare = (person1Result,person2Result) => {
    


      setResult('Incompitible')
      console.log("Hello from setCompare",person1Result,person2Result)

      if(person1Result === 'ISTJ' && person2Result === 'ENTP' || person1Result === 'ISTJ' && person2Result === 'ENFP'){
        setResult('Compatible')
      }
      if(person1Result === 'INTJ' && person2Result === 'ENTP' || person1Result === 'INTJ' && person2Result === 'ENFP'){
        setResult('Compatible')
      }
  
      if(person1Result === 'ISFJ' && person2Result === 'ESFP' || person1Result === 'ISFJ' && person2Result === 'ESTP'){
        setResult('Compatible')
      }
  
      if(person1Result === 'INFJ' && person2Result === 'ENFP' || person1Result === 'INFJ' && person2Result === 'ENTP'
      || person1Result === 'INFJ' && person2Result === 'INTJ' || person1Result === 'INFJ' && person2Result === 'INFJ'){
        setResult('Compatible')
      }
  
      if(person1Result === 'ISTP' && person2Result === 'ESFJ' || person1Result === 'ISTP' && person2Result === 'ESTJ'){
        setResult('Compatible')
      }
  
      if(person1Result === 'ISFP' && person2Result === 'ESTJ' || person1Result === 'ISFP' && person2Result === 'ESFJ'){
        setResult('Compatible')
      }
  
      if(person1Result === 'INFP' && person2Result === 'ENFJ' || person1Result === 'INFP' && person2Result === 'ENTJ'){
        setResult('Compatible')
      }
  
      if(person1Result === 'INTP' && person2Result === 'ENTJ' || person1Result === 'INTP' && person2Result === 'ENTP'){
        setResult('Compatible')
      }
  
      // EXTROVERT TYPES
  
      if(person1Result === 'ESTP' && person2Result === 'ISTJ' || person1Result === 'ESTP' && person2Result === 'ISFJ'){
        setResult('Compatible')
      }
  
      if(person1Result === 'ESFP' && person2Result === 'ISTJ' || person1Result === 'ESFP' && person2Result === 'ISFJ'){
        setResult('Compatible')
      }
  
      if(person1Result === 'ENFP' && person2Result === 'INFJ' || person1Result === 'ENFP' && person2Result === 'INFJ'){
        setResult('Compatible')
      }
  
      if(person1Result === 'ENFP' && person2Result === 'INFJ' || person1Result === 'ENFP' && person2Result === 'INFJ'){
        setResult('Compatible')
      }
      if(person1Result === 'ENTP' && person2Result === 'INTJ' || person1Result === 'ENTP' && person2Result === 'INFJ'){
        setResult('Compatible')
      }
      if(person1Result === 'ESTJ' && person2Result === 'ISTP' || person1Result === 'ESTJ' && person2Result === 'ISFP'){
        setResult('Compatible')
      }
      if(person1Result === 'ESFJ' && person2Result === 'ISFP' || person1Result === 'ESFJ' && person2Result === 'ISTP'){
        setResult('Compatible')
      }
      if(person1Result === 'ENFJ' && person2Result === 'INFP' || person1Result === 'ENFJ' && person2Result === 'INTP'){
        setResult('Compatible')
      }
      if(person1Result === 'ENTJ' && person2Result === 'INTP' || person1Result === 'ENTJ' && person2Result === 'INFP'){
        setResult('Compatible')
      }


  }




  const handleSubmit = async (e) => {
    e.preventDefault()
    setPerson1('')
    setPerson2('')
    setResult('')
    let u1 = await PersonalityCheck(person1Text,'person1')
    let u2 = await PersonalityCheck(person2Text,'person2')
    
  }


  return (
    <Container>
      <h2>Myer Briggs Person Compatability Test</h2>

      <section>
        <h3>Are you compatible with your lover?</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='textContainer'>
            <label htmlFor="">Person 1 Character Description</label>
            <textarea name="" id="" cols="30" rows="10" minLength={300} onChange={(e) => setPerson1Text(e.target.value)}></textarea>
          </div>

          <div className='textContainer'>
            <label htmlFor=""> Person 2 Character Description</label>
            <textarea name="" id="" cols="30" rows="10" minLength={300} onChange={(e) => setPerson2Text(e.target.value)}></textarea>
          </div>  
          
          <div>
          <input type="submit" value={person1 && person2 && result ? 
            'Click to Restart the Analyze'  : person1 && person2 && !result ? 'Click now to get result':'Click to Start'}  className='button' />
          </div>



          
        </form>

        <div>
          {result === 'Loading...' ? <h3>Loading...</h3> : <h3>{result}</h3>}
        </div>
      </section>
      
    </Container>

    
  )
}
