
//DEPENDENCIES
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let responseData;


//FUNCTIONS TO HANDLE THE REQUESTS
function handleSuccess () { 
    //console.log( this.responseText ); 
    
    const data = JSON.parse(this.responseText)

    console.log(data[0]);
    
    responseData =data;

    data.forEach(element => {
        console.log("User Id: "+ element.id + ", Account created: " +element.actor.avatar_url);
    });

  }
  
  function handleError () { 
    console.log( 'An error occurred \uD83D\uDE1E' );
  }


//CONSTRUCTED THE XMLHttpRequest
const asyncRequestObject = new XMLHttpRequest();

//MAKE A SIMPLE ASYNC REQUEST TO RETRIEVE DATA
asyncRequestObject.open('GET', 'https://api.github.com/events');



asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();



//DISPLAY THE RESPONSE DATA ON THE WEBPAGE



