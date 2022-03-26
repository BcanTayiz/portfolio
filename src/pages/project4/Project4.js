import React,{useState} from 'react'

import Slider from '@mui/material/Slider';

import './Project4.css'

export default function Project4() {

  



  const [value1,setValue1] = useState([1,10]);
  const [value2,setValue2] = useState(0)

  const handleChange = (event, newValue) => {
    setValue1(newValue);
  }

  return (
    <div className='container'>
        
        <section>
            <h1>Project 4 will come here</h1>
            {/*<Slider className="slider"
                getAriaLabel={() => 'Temperature range'}
                max={10}
                min={1}
                value={value1}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={value2}
            />*/}
        </section>
        
    </div>
  )
}
