import React from 'react';
import './index.css'


function App(){

    // LOGIC GOES HERE....
    let currTime = new Date();
    currTime = currTime.getHours();   ////getting hours only

    let greeting = " ";
    const cssStyle = {}   ///css variable to apply style

    if(currTime>=1 && currTime <=12){
    greeting = "Good Morning "
    cssStyle.color = "green"
    }
    else if(currTime>=13 && currTime <=18){
    greeting = "Good Afternoon"
    cssStyle.color = "orange"
    }
    else{
    greeting = "Good Night "
    cssStyle.color = "blue"
    }

    // THIS IS THE DATA TO SHOW
    return(
         <>
         <div>
           <h1>Hello Sir, <span style={cssStyle}> {greeting} </span> !</h1> 
         </div>
         </>
    );
}

export default App;