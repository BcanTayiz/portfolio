import React ,{useState, useEffect} from 'react'

import Plot from 'react-plotly.js';


import './Project3.css'


const block = () => {
  

  return(
    <div>
      BLACK BOX
    </div>
  )
}

export default function Project3() {

  const [stockNumber,setStockNumber] = useState(10000)

  const [buyStockOption, setBuyStockOption] = useState(0)
  const [sellStockOption, setSellStockOption] = useState(0)


  const [financial,setFinancial] = useState(10000)

  const [startStock,setStartStock] = useState(true)

  const [xCoord,setXCoord] = useState(0)

  const [earnings,setEarnings] = useState(0)

  const [xvalues,setXValues] = useState([])
  const [yvalues,setYValues] = useState([])

  const [buyPrice,setBuyPrice] = useState(0)
  const [sellPrice,setSellPrice] = useState(0)


  let x = 0

  const handlePlotSystem = async () => {
    setStartStock(startStock => !startStock)
    console.log(startStock)
      const interval = setInterval(() => {
        let valueY = Math.random() * 1000
        x++
        setXCoord(xCoord => xCoord + 1)
        setXValues(prevNum => [...prevNum, x])
        setYValues(prev => [...prev,valueY])
      }, 2000);
  
      return () => clearInterval(interval)
    
  }


  const buy50 = () =>{
    setBuyPrice(yvalues[yvalues.length - 1])
    if(stockNumber - 50 >= 0){
      if(stockNumber * buyPrice <= financial){
      setStockNumber(stockNumber => stockNumber - 50)
      setFinancial(financial => financial = financial - 50 * buyPrice)
    }
  }
  }

  const buy100 = () =>{
    setBuyPrice(yvalues[yvalues.length - 1])
    if(stockNumber - 100 >= 0){
      if(stockNumber * buyPrice <= financial){
      setStockNumber(stockNumber => stockNumber - 100)
      setFinancial(financial => financial = financial - 100 * buyPrice)
    }
  }
}

  const buy200 = () =>{
    setBuyPrice(yvalues[yvalues.length - 1])
    if(stockNumber - 200 >= 0){
      if(stockNumber * buyPrice <= financial){
      setStockNumber(stockNumber => stockNumber - 200)
      setFinancial(financial => financial = financial - 200 * buyPrice)
    }
  }
}

  const buy500 = () =>{
    setBuyPrice(yvalues[yvalues.length - 1])
    if(stockNumber - 500 >= 0){
      if(stockNumber * buyPrice <= financial){
      setStockNumber(stockNumber => stockNumber - 500)
      setFinancial(financial => financial = financial - 500 * buyPrice)
    }
  }
}

  const buy1000 = () =>{
    setBuyPrice(yvalues[yvalues.length - 1])
    if(stockNumber - 1000 >= 0){
      if(stockNumber * buyPrice <= financial){
      setStockNumber(stockNumber => stockNumber - 1000)
      setFinancial(financial => financial = financial - 1000 * buyPrice)
    }
  }
}

  const sell50 = () =>{
    setSellPrice(yvalues[yvalues.length - 1])
    if(stockNumber + 50 < 1000000){
      if(sellStockOption <= buyStockOption){
        setStockNumber(stockNumber => stockNumber + 50)
        setFinancial(financial => financial = financial + 50 * sellPrice)
      }    
    }  
  }

  const sell100 = () =>{
    setSellPrice(yvalues[yvalues.length - 1])
    if(stockNumber + 100 < 1000000){
      if(sellStockOption <= buyStockOption){
        setStockNumber(stockNumber => stockNumber + 100)
        setFinancial(financial => financial = financial + 100 * sellPrice)
      }    
    }  
  }

  const sell200 = () =>{
    setSellPrice(yvalues[yvalues.length - 1])
    if(stockNumber + 200 < 1000000){
      if(sellStockOption <= buyStockOption){
        setStockNumber(stockNumber => stockNumber + 200)
        setFinancial(financial => financial = financial + 200 * sellPrice)
      }    
    }   
  }

  const sell500= () =>{
    setSellPrice(yvalues[yvalues.length - 1])
    if(stockNumber + 500 < 1000000){
      if(sellStockOption <= buyStockOption){
        setStockNumber(stockNumber => stockNumber + 500)
        setFinancial(financial => financial = financial + 500 * sellPrice)
      }    
    }  
  }

  const sell1000 = () =>{
    setSellPrice(yvalues[yvalues.length - 1])
    if(stockNumber + 1000 < 1000000){
      if(sellStockOption <= buyStockOption){
        setStockNumber(stockNumber => stockNumber + 1000)
        setFinancial(financial => financial = financial + 1000 * sellPrice)
      }    
    }  
  }





  


  return (
    <div className='project3Container'>
      <section className='upperSection'>
        <h2>Live Stock Simulation</h2>
        <h3>Stock Option Value : {stockNumber}</h3>
        <br/>
        <br/>
        <div className='table'>
          <h4>Financial Value: {Math.round(financial,2)}$</h4>
          <br/>
          <h5 style={{color:'green'}}>Buy Price:{Math.round(buyPrice,2)}</h5>
          <h5 style={{color:'coral'}}>Sell Price:{Math.round(sellPrice,2) }</h5>
          <br/>
          <h5 style={{color:'red'}}>Current Stock Price: {yvalues[yvalues.length - 1] && Math.round(yvalues[yvalues.length - 1],2)}</h5>
        </div>
        
          
          {startStock && <button className='button'   onClick={handlePlotSystem}>Start Stock Action</button>}
          <br/>
          <section className='buyButtons'>

            <div className='buyButtonContainer'>
              <button onClick={buy50} > buy 50</button>
            </div>
            <div  className='buyButtonContainer'>
              <button onClick={buy100} >buy 100</button>
            </div>
            <div  className='buyButtonContainer'>
              <button onClick={buy200}>buy 200</button>
            </div>
            <div  className='buyButtonContainer'>
              <button onClick={buy500}>buy 500</button>
            </div>
            <div  className='buyButtonContainer'>
              <button onClick={buy1000} >buy 1000</button>
            </div>
          </section>
          <section className='sellButtons'>
            <div className='sellButtonContainer'>
              <button onClick={sell50}> sell 50</button>
            </div>
            <div  className='sellButtonContainer'>
              <button onClick={sell100} >sell 100</button>
            </div>
            <div  className='sellButtonContainer'>
              <button onClick={sell200}>sell 200</button>
            </div>
            <div  className='sellButtonContainer'>
              <button onClick={sell500}>sell 500</button>
            </div>
            <div  className='sellButtonContainer'>
              <button onClick={sell1000}>sell 1000</button>
            </div>
          </section>
      </section>



    <section className='bottomSection'>
      <Plot className='plotElement'
        data={[
          {
            x: xvalues,
            y: yvalues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'line', x: xvalues, y: yvalues},
        ]}
        layout={ {width: 500, height: 300, title: 'Stock XRA '} }
      />

    </section>
      


      
     

      

    </div>
  )
      }
