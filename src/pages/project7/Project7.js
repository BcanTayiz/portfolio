import React,{useState} from 'react';

import './Project7.css'

const Project7 = () => {

    const [activity,setActivity] = useState(null)

    const handleActivity = async () => {

        fetch('https://www.boredapi.com/api/activity/')
            .then(res => res.json())
            .then(data => setActivity(data))
                
    }

    
    return (
        <div>
            <section className='activityContainer'>
                <h1>Check Activity</h1>
                <br/>
                <aside className='activityAside'>
                    {activity ?
                    <div className='result' key={activity.key}>
                        <h3>Activity: {activity.activity}</h3>
                        <div className='h4Container'>
                            <h4>Type: {activity.type}</h4>
                            <h4>Participants: {activity.participants}</h4>
                            <h4>Price: {activity.price}</h4>
                            <h4>Link: {activity.link !== '' ? activity.link : 'no-link'}</h4>
                            <h4>Accessibility: {activity.accessibility}</h4>
                        </div>
                       
                    </div>
                    : 'Loading...'}
                </aside>
                <section>
                    <button onClick={handleActivity}>Get Random Activity</button>
                </section>
            </section>



            
        </div>
    );
}

export default Project7;
