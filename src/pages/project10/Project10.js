import React,{useEffect,useState} from 'react';
import TextField from "@mui/material/TextField";

import { Link } from 'react-router-dom';

import './Project10.css'

const emotions = {
    "happy": {
        "playful":['aroused','cheeky'],
        "content":['free','joyful'],
        "interested":['curious','inquisitive'],
        "proud":['successful','confident'],
        'accepted':['respected','valued'],
        'powerful':['courageous','creative'],
        'peaceful':['loving','thankful'],
        'trusting':['sensitive','intimate'],
        'optimistic':['hopeful','inspired'],
    },
    "sad": {
        "lonely":['isolated','abandoned'],
        "vulnerable":['victimized','fragile'],
        "despair":['grief','powerless'],
        "guilty":['ashamed','remorseful'],
        "depressed":['empty','inferior'],
        "hurt":['dissapointed','embarrassed'],
    },
    "disgusted": {
        "repelled":['hesitant','horrified'],
        "awful":['detestable','nauseated'],
        "dissapointed":['revolted','appalled'],
        "disapproving":['embarrassed','judgemental'],
    },
    "angry":{
        "critical":['dismissive','skeptical'],
        "distant":['numb','withdrawn'],
        "frustrated":['annoyed','infuriated'],
        "aggresive":['hostile','provoked'],
        "mad":['jealous','furious'],
        "bitter":['violated','indignant'],
        "humiliated":['ridiculed','disrespected'],
        "let down":['resentful','betrayed'],
    },
    "fearful":{
        "threatened":['exposed','nervous'],
        "rejected":['persecuted','excluded'],
        "weak":['insignificant','worthless'],
        "insecure":['inferior','inadequate'],
        "anxious":['worried','overwhelmed'],
        "scared":['frightened','helpless'],
    },
    "bad":{
        "bored":['indifferent','apathetic'],
        "busy":['pressured','rushed'],
        "stressed":['overwhelmed','out of control'],
        "tired":['sleepy','unfocussed'],
    },
    "suprised":{
        "startled":['shocked','dismayed'],
        "confused":['disillusioned','perplexed'],
        "amazed":['astonished','awe'],
        "excited":['eager','energetic'],
    }
}





const Project10 = () => {

    const [emotionSet,setEmotionSet] = useState([])

    const [searchedEmotions,setSearchedEmotions] = useState([])

    const [selectedEmotions,setSelectedEmotions] = useState([])

    const [savedEmotions,setSavedEmotions] = useState({})
    const [showEmotions,setShowEmotions] = useState(false)

    useEffect(()=>{
        let EmotionsData = JSON.parse(localStorage.getItem('data')) || []
        localStorage.setItem('data', JSON.stringify(EmotionsData))

        
        for (const [key, value] of Object.entries(emotions)) {
            for (const [key2, value2] of Object.entries(emotions[key])) {
                let map = value2.map(x=>x.toLowerCase())
                setEmotionSet(emotionSet => [...emotionSet,map[0],map[1]])
            }
        }

        console.log(selectedEmotions)
        

    },[])

    const handleSearch = (text) => {
        let allEmotions = []
        emotionSet.forEach(x=>{
            if(x.startsWith(text.toLowerCase())){
                allEmotions.push(x)
            }
        })


        setSearchedEmotions(allEmotions)
    }


    const recordEmotions = () =>{

        let happy = 0
        let sad = 0
        let disgusted = 0
        let angry = 0
        let fearful = 0
        let bad = 0
        let suprised = 0

        let selectedList = []

        for (const [key, value] of Object.entries(emotions)) {
            for (const [key2, value2] of Object.entries(emotions[key])) {
               emotions[key][key2].forEach(x=>{
                   if(selectedEmotions.includes(x.toLowerCase())){
                      if(!selectedList.includes(x)){
                        selectedList.push(x)
                        if(key === 'happy'){
                            happy++
                        }
                        if(key === 'sad'){
                            sad++
                        }
                        if(key === 'disgusted'){
                            disgusted++
                        }
                        if(key === 'angry'){
                            angry++
                        }
                        if(key === 'fearful'){
                            fearful++
                        }
                        if(key === 'bad'){
                            bad++
                        }
                        if(key === 'suprised'){
                            suprised++
                        }
                      }
                      
                   }
               })
            }
        }

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

         let emotionData = {
            'happy':happy,
            'sad':sad,
            'disgusted':disgusted,
            'angry':angry,  
            'fearful':fearful,
            'bad':bad,
            'suprised':suprised,
            'date':today,
        }

        setShowEmotions(true)

        setSavedEmotions(emotionData)


        console.log(savedEmotions)

        let dataTaken =  JSON.parse(localStorage.getItem('data'))
        emotionData['id'] = dataTaken.length + 1
        dataTaken.push(emotionData)
        console.log(dataTaken)
        localStorage.setItem('data', JSON.stringify(dataTaken))

        
    }


    


    
    

    
    const handleEmotion = (emotion) => {

        setSelectedEmotions(selectedEmotions => [...selectedEmotions,emotion])

    }

    useEffect(() => {
        handleEmotion()
    }, []);

    

    return (
        <div className='container'>
            <section>
                <h2>Feeling Check</h2>
            </section>

            

            <section>
                <h3>How do you feel today?</h3> 

                <div className='buttonList'>
                    <button className='btn' onClick={() => {
                        setSelectedEmotions([])
                        setShowEmotions(false)
                    }}>Clear</button>
                    <button className='btn' onClick={() => recordEmotions()}>
                        Record Emotions
                    </button>
                    <Link to="/portfolio/memoryPage">
                        Go to Saved Emotions
                    </Link>
                </div>
                <br/><br/>

                <div>
                    
                    {
                        showEmotions  &&  
                        <section>

                        
                        <h3>Today's Emotions</h3>
                            <div className='emotionListMain'>
                                <p>happy: {savedEmotions['happy']}</p>
                                <p>sad: {savedEmotions['sad']}</p>
                                <p>disgusted: {savedEmotions['disgusted']}</p>
                                <p>angry: {savedEmotions['angry']}</p>
                                <p>fearful: {savedEmotions['fearful']}</p>
                                <p>bad: {savedEmotions['bad']}</p>
                                <p>suprised: {savedEmotions['suprised']}</p>
                            </div>
                        </section>
                    }
                    
                </div>

                { (selectedEmotions.length > 0  && searchedEmotions) ?
                <div className='emotion-add-list'>
                    <div className='emotion-add-list-inner'>
                        {selectedEmotions.length > 0 && selectedEmotions.map((emotion,index) => (
                            <div key={index} className='element-emotion'>
                                {emotion}
                            </div>
                        ))}
                    </div>
                </div> : <div>Select an emotion</div> }
                <div className="search">
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={(e)=>handleSearch(e.target.value)}
                    />
                </div>
                <div className='emotion_Container'>
                {searchedEmotions.map((emotion,index) => (
                    <div className='emotion_Container_item' key={index}>
                        <div className='emotion_Container_item_text' onClick={() => handleEmotion(emotion)}>
                            {emotion}
                        </div>
                    </div>
                ))} 
                </div>
                
                
            </section>
        </div>
    );
}

export default Project10;
