import React,{useState} from 'react';
import { useRef } from 'react';
import './project12.css';
const compare = require("resemblejs").compare;



const Project12 = () => {

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    const [imageData,setImageData] = useState(null)

    const refButton = useRef(null);
    
    async function getDiff() {
        const options = {
            output: {
                errorColor: {
                    red: 255,
                    green: 0,
                    blue: 255
                },
                errorType: "movement",
                transparency: 0.3,
                largeImageThreshold: 1200,
                useCrossOrigin: true,
                outputDiff: true
            },
            scaleToSameSize: true,
            ignore: "antialiasing"
        };
    
        compare(image1, image2, options, function (err, data) {
            if (err) {
                console.log("An error!");
            } else {
                console.log(data);
                setImageData(data)
            }
        });
    }
    
    

    return (
        <div>
            <section className='title-page-project-12'>
                <h2>Image Similarity</h2>
                <h4>Check Image Similarity and get a difference score by algorithm</h4>
            </section>

            <section className='image-container-project-12'>
            <div>
            {image1 && <img alt="not fount" width={"250px"} src={URL.createObjectURL(image1)} /> }
                <h3>Select Image</h3>
                <input type="file" name="myImage" onChange={(event) => {
          console.log(event.target.files[0]);
          setImage1(event.target.files[0]);
          setImageData(null)
        }} />
            </div>
            <div>
            {image2 && <img alt="not fount" width={"250px"} src={URL.createObjectURL(image2)} /> }
                <h3>Select Image</h3>
                <input type="file" name="myImage" onChange={(event) => {
          console.log(event.target.files[0]);
          setImage2(event.target.files[0]);
          setImageData(null)
        }} />
            </div>
            </section>

            <section>
                <button onClick={async () => {
                    if(image1 && image2){
                    refButton.current.innerHTML = 'Analyzing...';
                    
                    
                    let img1 = URL.createObjectURL(image1);
                    let img2 = URL.createObjectURL(image2);

                    getDiff().then(
                        () => {
                            refButton.current.innerHTML = 'Difference ===> ' + imageData.misMatchPercentage + '%';
                            setImageData(null)
                        }
                    )

                    setImageData(null)

                    
                    
                                 
                    setTimeout(() => {
                        refButton.current.innerHTML = 'Click to Analyze'; 
                    }, 5000);
                    }
                }} ref={refButton}>Check Similarity</button>
            </section>
        </div>
    );
}

export default Project12;
