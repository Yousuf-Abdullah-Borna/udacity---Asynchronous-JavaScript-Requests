
//DEPENDENCIES
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let responseData;


//FUNCTIONS TO HANDLE THE REQUESTS
function handleSuccess () { 
    //console.log( this.responseText ); 
    
    const data = JSON.parse(this.responseText)

    console.log(data[0]);
    
    responseData =data;

    //HEADING FOR THE HTML PAGE TO DISPLAY THE INFORMATION
    let header1 = document.createElement('h1');
    header1.style.color = 'red';
    header1.style.textAlign = 'center';
    header1.innerHTML= "Github Profiles";
    document.body.append(header1)

    //FOR TABLE ELEMENT
    let table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse ='collapse';
    table.style.width ='400px';
    
    table.style.marginLeft= '38%';

    //FOR TABLE COLUMN HEADERS
    let trow = document.createElement('tr');
    let theadOne = document.createElement('th');
    theadOne.innerHTML ="userId";
    let theadTwo = document.createElement('th');
    theadTwo.innerHTML ="Avatar";
    trow.append(theadOne)
    trow.append(theadTwo)
    table.append(trow)

    document.body.append(table);

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



