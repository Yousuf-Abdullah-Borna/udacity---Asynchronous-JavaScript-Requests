
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
    table.style.borderRadius = '30px';
    table.style.width ='600px';
    table.style.borderCollapse = 'collapse';
    
    table.style.marginLeft= '33%';

    //FOR TABLE COLUMN HEADERS
    let trow = document.createElement('tr');
    let theadOne = document.createElement('th');
    theadOne.innerHTML ="username";
    theadOne.style.fontSize= "40px";
    theadOne.style.borderCollapse = 'collapse';
    let theadTwo = document.createElement('th');
    theadTwo.innerHTML ="Profile Photo";
    theadTwo.style.fontSize= "40px";
    theadTwo.style.borderCollapse = 'collapse';
    trow.append(theadOne)
    trow.append(theadTwo)
    table.append(trow)

    document.body.append(table);

    data.forEach(element => {
        console.log("User Id: "+ element.id + ", Account created: " +element.actor.avatar_url);
     
          let trowData = document.createElement('tr');
          
          let theadOneData = document.createElement('td');
           theadOneData.innerHTML =element.actor.login;
           theadOneData.style.fontSize= "30px";
           theadOneData.style.textAlign = 'center';
           theadOneData.style.border = '1px solid black';
           theadOneData.style.borderCollapse = 'collapse';


          let theadTwoData = document.createElement('th');
          let image = document.createElement('img');
          image.src = element.actor.avatar_url;
          image.style.width = '100px';
          image.style.height ='100px';
          image.style.borderRadius = '100%';
          theadTwoData.append(image);
          theadTwoData.style.textAlign = 'center';
          theadTwoData.style.border = '1px solid black';
          theadTwoData.style.borderCollapse = 'collapse';

          trowData.append(theadOneData);
          trowData.append(theadTwoData);
          table.append(trowData);


    });

    document.body.append(table);

    document.body.style.backgroundColor ='#FCAC32'

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



