import React,{useState} from 'react'

import Footer from '../../components/Footer/Footer'

import emailjs  from '@emailjs/browser';

import './Contact.css'

export default function Contact() {


  const [name,setName] = useState('')
  const [surname,setSurname] = useState('')
  const [subject,setSubject] = useState('')
  const [email,setEmail] = useState('')
  const [textBody,setTextBody] = useState('')


  let num = 0;


  const increaseNum = () => {
    num += 1
  }



  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(num,e)
    if(num >= 5){
      console.log(name,surname,subject,textBody)
      sendEmail(e)
    }
  }


  async function sendEmail(e) {   //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_0d2uxis', 'template_rlkzyzn', e.target, '-Yn7KSmSE5W3Ofyiw')
      .then((result) => {

          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
  return (

   

    <>
    <div className='container'>
      
      <form className='form' onSubmit={e => HandleSubmit(e)}>
      <h2>Reach me for freelance and other projects</h2>
      <br/>
          <div className='form_div'>
            <label htmlFor='name'>{name.length < 3 ? 'Please enter a correct name' : increaseNum()}</label>
            <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} required/>
          </div>
          <div className='form_div'>
            <label htmlFor='surname'>{surname.length < 3 ? 'Please enter a correct surname' : increaseNum()}</label>
            <input type="text" name="surname" onChange={e => setSurname(e.target.value)} value={surname} required/>
          </div>
          <div className='form_div'>
            <label htmlFor="email">{ !email.includes('@')|| !email.includes('.com') ? 'Please enter a correct email'  : increaseNum()} </label>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} required/>
          </div>
          <div className='form_div'>
            <label htmlFor="subject">{ subject.length < 10 ? 'Please enter a correct subject'  : increaseNum()} </label>
            <input type="text" name="subject" onChange={e => setSubject(e.target.value)} value={subject} required/>
          </div>
          <div className='form_div'>
            <label htmlFor='message'>{textBody.length < 20 ? 'Please write a text longer than 200 characters'  : increaseNum()}</label>
            <textarea name="message" onChange={e => setTextBody(e.target.value)} required value={textBody}></textarea>
          </div>
          <br/>
            <input type="submit" value="Submit" className='button'/>
        </form>

        
    </div>

    <Footer/>


    
    </>
    
  )
}
