import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonFunction from './ButtonFunction';

function Home() { 
    let valued = (new URLSearchParams(window.location.search)).get("input-form");
    console.log(valued);
        //comment Grab
        function commentGrab(){
        var comment=document.getElementById('input-form').value;
        console.log(comment);
        console.log("this is comment grab function");
        document.getElementById('input-form').value='';
        document.getElementById('displayText').innerHTML=comment;

        }



    useEffect(() => {   
        let valued = (new URLSearchParams(window.location.search)).get("input-form");
    console.log(valued);
        
        console.log("hom,e uis run");
    console.log(window.ratingValue);
    var ratingDefined=window.ratingValue;
    if(typeof ratingDefined!== 'undefined'){
        console.log("The rating is defined yrr");

        //start of rating display

        // var comment=document.getElementById('input-form').value;
        let comment = (new URLSearchParams(window.location.search)).get("input-form");
        console.log(comment);
        console.log("comments is grabbed");
        document.getElementById('input-form').value='';
        document.getElementById('displayText').innerHTML=comment;
        // End for Content display

        //For rating display
        // var number=Math.floor(Math.random() * 5) + 1;
         var number=ratingDefined;
        console.log("This is real rating value");
        console.log(number);
    //    var image=  '<img src="build/images/filledStar.png"  width="25px"  alt=""/>';
    //     document.getElementById("displayRating").innerHTML=image;

        //for filledStar logic
var j=number;
var e="";
for(var i=0;i<j;i++){

e+='<img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture">';
}

document.getElementById("displayRating").innerHTML=e;

//For emptyStar logic
var k=5-number;
for( var i=0;i<k;i++){
e+='<img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture ">';

}
document.getElementById("displayRating").innerHTML=e;






       
        //end of rating display



    } else{
        console.log("the value is undefined yrr");
    }
           
     
    });
    
    
    function ratingDisplay(){
        // Start for Content display
        let comment=document.getElementById('input-form').value;
        console.log(comment);
        document.getElementById('input-form').value='';
        document.getElementById('displayText').innerHTML=comment;
        // End for Content display

        //For rating display
        var number=Math.floor(Math.random() * 5) + 1;
        // var number=window.ratingValue;
        console.log("This is real rating value");
        console.log(number);
       var image=  '<img src="build/images/filledStar.png"  width="25px"  alt=""/>';
        document.getElementById("displayRating").innerHTML=image;

        //for filledStar logic
var j=number;
var e="";
for(var i=0;i<j;i++){

e+='<img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture">';
}

document.getElementById("displayRating").innerHTML=e;

//For emptyStar logic
var k=5-number;
for( var i=0;i<k;i++){
e+='<img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture ">';

}
document.getElementById("displayRating").innerHTML=e;






       
    }
    console.log(window.ratingValue);
    
    return (
        
      
      
        <div>
            
             <Link exact='true' to='/about' style={{ textDecoration: 'none' }} ><h2 className="about"> About</h2></Link>
            <div className="interface">
            <div className='homeHeading'>
             <h2>Sentiment Analysis <br/>through rating</h2><br/>
             </div>
             <br/> <br/> <br/> <br/>
            
             <form action="" method="get">
             <div className="formDiv" >
            
                 <input type="text" id="input-form"  name="input-form" autoComplete="Off" required/>
                 <label htmlFor="comments" className="label-comments">
                     <span className="content-comments">Enter some comment</span>
                     </label>

                     {/* for button */}
                   
                  
                     </div>
                     {/* <input type="submit" class="button" value="check"/> */}
            <ButtonFunction/>
                            


 
 
                     </form>
                    
            
             <br/>
             <br/> <br/>

    



             {/* start of button code */}

           {/* <div className="buttonEdit">
             <Button className="btnClas" onClick={ratingDisplay}  style={{color:'red'}}>
             <svg viewBox="35 60 400 320" xmlns="http://www.w3.org/2000/svg">
    <path fill="#fff" d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210" mask="url(#knockout-text)" >
    </path>
    <mask id="knockout-text">
      <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
      
      <text x="140" y="227" fill="#000">BUTTON1223</text>
    </mask>
</svg>
</Button> */}


{/* </div>
   */}






             {/* End of button code */}
             {/* <ButtonFunction/>   */}
             </div>
 
        {/* for comment display */}
        <div className="comment">
            <span id="displayText"></span><span id="displayRating"></span>
        </div>




        </div>

        
     
    )

    //This is for temporary code remove it,2021/05/08
    console.log("The console is after the return");

    
    console.log("hom,e uis run");
    console.log(window.ratingValue);
    var ratingDefined=window.ratingValue;
    if(typeof ratingDefined!== 'undefined'){
        console.log("The rating is defined yrr");

        //start of rating display

        // let comment=document.getElementById('input-form').value;
        // console.log(comment);
        // document.getElementById('input-form').value='';
        // document.getElementById('displayText').innerHTML=comment;
        // End for Content display

        //For rating display
        // var number=Math.floor(Math.random() * 5) + 1;
         var number=ratingDefined;
        console.log("This is real rating value");
        console.log(number);
    //    var image=  '<img src="build/images/filledStar.png"  width="25px"  alt=""/>';
    //     document.getElementById("displayRating").innerHTML=image;

        //for filledStar logic
var j=number;
var e="";
for(var i=0;i<j;i++){

e+='<img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/filledStar.png" width="25px" alt="a demo  guess it rights picture">';
}

document.getElementById("displayRating").innerHTML=e;

//For emptyStar logic
var k=5-number;
for( var i=0;i<k;i++){
e+='<img src="https://raw.githubusercontent.com/ashishadhikary/Proposal-on-Sentiment-Analysis/master/images/emptyStar.png" width="25px" alt="it is new  demo picture ">';

}
document.getElementById("displayRating").innerHTML=e;






       
        //end of rating display



    } else{
        console.log("the value is undefined yrr");
    }

    
}

export default Home
