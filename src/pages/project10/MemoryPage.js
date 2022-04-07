import React,{useEffect,useState,useHist} from 'react'



import { Link } from 'react-router-dom';




import './Project10.css'

import Card from 'react-bootstrap/Card';
import { size } from 'lodash';

export default function MemoryPage() {

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })

  const showEmotions = () => {
    setData(JSON.parse(localStorage.getItem('data')) || '[]')
    console.log(data)
    
  }

  const deleteItem = (index) => {
    const newData = data.filter(item => item.id !== index);
    newData.map((item,index) => item.id = index)
    console.log(newData)
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  }

  
  return (
    <div className='containerMemory'>
      <h2>Emotional Memory Page</h2>
      <Link to='/portfolio/project10'> 
      Go emotion adding page
        </Link>
        
      <section className='card_MainContainer'>

      {
   data && 
   data.map((item,index) => {
     return(
       
     <Card className='card_container' key={index} >
       <button onClick={() => deleteItem(index)} className='btn'>delete Item</button>
       <Card.Body>
         <Card.Title className='cardTitle'>Date: {item.date}</Card.Title>
         <Card.Text className='cardText'>
           <h3 style={{fontSize:23}} >Emotion Stories</h3>
         </Card.Text>
         <Card.Text className='cardText'>
           <p>Happiness: {item.happy}</p>
           <p>Sadness: {item.sad}</p>
           <p>Disgust: {item.disgusted}</p>
           <p>Anger: {item.angry}</p>
           <p>Fear: {item.fearful}</p>
           <p>Bad: {item.bad}</p>
           <p>Surprise: {item.suprised}</p>
           <p></p>

         </Card.Text>
       </Card.Body>
     </Card>
     )
     
   })
}
      </section>
  
    </div>
  )
}
