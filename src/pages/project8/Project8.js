import React,{useState} from 'react'

import './Project8.css'

import A_letter from './signLanguageImages/A.png'
import B_letter from './signLanguageImages/B.png'
import C_letter from './signLanguageImages/C.png'
import D_letter from './signLanguageImages/D.png'
import E_letter from './signLanguageImages/E.png'
import F_letter from './signLanguageImages/F.png'
import G_letter from './signLanguageImages/G.png'
import H_letter from './signLanguageImages/H.png'
import I_letter from './signLanguageImages/I.png'
import K_letter from './signLanguageImages/K.png'
import L_letter from './signLanguageImages/L.png'
import M_letter from './signLanguageImages/M.png'
import N_letter from './signLanguageImages/N.png'
import O_letter from './signLanguageImages/O.png'
import P_letter from './signLanguageImages/P.png'
import Q_letter from './signLanguageImages/Q.png'
import R_letter from './signLanguageImages/R.png'
import S_letter from './signLanguageImages/S.png'
import T_letter from './signLanguageImages/T.png'
import U_letter from './signLanguageImages/U.png'
import V_letter from './signLanguageImages/V.png'
import W_letter from './signLanguageImages/W.png'
import X_letter from './signLanguageImages/X.png'
import Y_letter from './signLanguageImages/Y.png'
import Z_letter from './signLanguageImages/Z.png'




export default function Project8() {
 
    const [visuals,setVisuals] = useState('')

    const [letters, setLetters] = useState({
      A: A_letter,
      B: B_letter,
      C: C_letter,
      D: D_letter,
      E: E_letter,
      F: F_letter,
      G: G_letter,
      H: H_letter,
      I: I_letter,
      K: K_letter,
      L: L_letter,
      M: M_letter,
      N: N_letter,
      O: O_letter,
      P: P_letter,
      Q: Q_letter,
      R: R_letter,
      S: S_letter,
      T: T_letter,
      U: U_letter,
      V: V_letter,
      W: W_letter,
      X: X_letter,
      Y: Y_letter,
      Z: Z_letter,
    })

    const [text, setText] = useState('')


    const handleChange = () => {
      

      let visuals = text.toUpperCase().split('').map(letter => {
        if (letter === ' ' || "!'.?,;:-\"><é*=()/\\&%+^".split('').includes(letter)) {
          return <div className='space'>||</div>
        }
        return (
          <div >
            <p>{letter}</p>
            <img className="letter" src={letters[letter]} alt={letter}/>
          </div>
          
        )
      })

      let visuals2 = (
        <div className='visuals'>
          {visuals}
        </div>
      )

      setVisuals(visuals2)
    }


  return (
    <main>
      <header>
        <h1>Text to HandSign</h1>
      </header>
      <section className=''>
          <br/><br/>
          <textarea name="" id="" cols="100" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
          <br/><br/>
          <button onClick={handleChange}>Tranform into hand sign</button>
      </section>
      <section>
        {visuals}
      </section>
    </main>
  )
}
