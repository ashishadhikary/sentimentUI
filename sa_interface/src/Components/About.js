import React from 'react'
import {Link} from 'react-router-dom';
import ButtonFunction from './ButtonFunction';

function About() {
   
    return (        
     
        <div className="aboutContainer"> 
            <Link exact to='/' style={{ textDecoration: 'none' }} ><h2 className="about"> Home</h2></Link>
            {/* For title */}
        <div className="title">
        <h1>About the project</h1>
        {/* <ButtonFunction/>   */}
        
        </div>
<br/>
           {/* For content  */}
            <div className="content">
                <h3> This is data science project which reads the user input and classify its sentiment using 
                    rating where '1' denotes as bad sentiment and '5' denotes as good sentiments.In simple meaning,rating one(1) represents negative 
                    sentence and rating(5) represents positive sentence.</h3>
            </div>
        {/* For rating */}
        <br/>
        <div className="rating">   
             {/* Rating 1 */} 
            <div className="rating1">
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <h5>(1) Worst</h5>
            </div>  

                 {/* Rating 2 */}
            <div className="rating2">
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <h5>(2) Poor</h5>
            </div>  

                 {/* Rating 3 */}
            <div className="rating3">
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <h5>(3) Satisfaction</h5>
            </div>  
            {/* Rating 4 */}
            <div className="rating4">
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="it is new  demo picture "></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture "></img>
            <h5>(4) Good</h5>
            </div>  
                 {/* Rating 5 */}
            <div className="rating5">
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture"></img>
            <h5>(5) Excellent</h5>
            </div>
         
        </div>
{/* End of rating div */}
<div className="futureWork">
    <h4>The created model can be used in the comment section of the ecommerce website or to find the sentiment 
        of review,comments or sentence by providing rating.Our future plan is to improve its accuracy and make it applicable in 
        real life world.<br/><br/>
        The listed below person's are the group members of this project.
    </h4>
</div>
      

        {/* Our info */}
        <div className="info">
            
            <div className="info1">
                
               <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/ashish.JPG" style={{width:'80px',height:'90px',borderRadius:"38%"}}alt=""/>
               <br/>
               <h4>Ashish Adhikari</h4>
              <br/>
              <a target="_blank" href="https://github.com/ashishadhikary">
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/github.png" style={{backgroundColor:'whitesmoke',borderRadius:'45%'}} width="35px"  alt=""/>&nbsp;&nbsp;</a>
            <a target="_blank" href="https://www.linkedin.com/in/ashish-adhikari-131764211/"> <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/linkedin.png" style={{backgroundColor:'whitesmoke',borderRadius:'45%'}} width="35px"  alt=""/></a>
            
            </div>
            
            
            <div className="info2">
               <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/bhuwan.jpg" style={{width:'80px',height:'90px',borderRadius:"38%"}}alt=""/>
               <br/>
               <h4>Bhuwan Shahi</h4>
              <br/>
              <a target="_blank" href="https://github.com/Shahibhuwan">
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/github.png" style={{backgroundColor:'whitesmoke',borderRadius:'45%'}} width="35px"  alt=""/>&nbsp;&nbsp;</a>
            <a target="_blank" href="https://www.linkedin.com/in/bhuwan-shahi-79837617b/"><img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/linkedin.png"  style={{backgroundColor:'whitesmoke',borderRadius:'45%'}} width="35px"  alt=""/></a>
            </div>
        
            <div className="info3">
               <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/yagya.JPG" style={{width:'80px',height:'90px',borderRadius:"38%"}}alt=""/>
               <br/>
               <h4>Yagya Raj Bhatta</h4>
              <br/>
              <a target="_blank" href="https://github.com/YagyaB">
            <img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/github.png" style={{backgroundColor:'whitesmoke',borderRadius:'45%'}} width="35px"  alt=""/>&nbsp;&nbsp;</a>
            <a target="_blank" href="https://www.linkedin.com/in/yagya-raj-bhatta-587463201/"><img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/linkedin.png" style={{backgroundColor:'whitesmoke',borderRadius:'45%'}} width="35px"  alt=""/></a>
            </div>
 
 
 
            



        </div>

            
        </div>
        
    )
}

export default About
