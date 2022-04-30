import React from 'react';

import './Project11.css'


const Blocks = (num) => {




    let Cal = []

    for(let i = 0;i<5;i++){
        for(let j = 0;j<5;j++){
            let number = Math.floor(Math.random() * 10)
            Cal.push(
                <div id={i*5+j} key={i*5+j} className='block'>
                    <p>{number}</p>
                </div>
            )
        }
    }

    console.log(Cal)

    return (
        <div className='blockContainer'>
           {Cal.map(x => x)}
        </div>
    )
    
}

const Project11 = () => {

    

    return (
        <div className='gameContainer11'>
            <h2>Project 11</h2>
            <h3>Reach the highest number</h3>
            <p>By Clicking greater and smaller reach to level number</p>
            <br/>
            <section className='button-Container11'>
                <button onClick={() => {}}>
                    Greater
                </button>
                <button>
                    Smaller
                </button>
            </section>
            <Blocks/>
        </div>
    );
}

export default Project11;
