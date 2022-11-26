var counterElement = document.getElementById("counterText");

var decrementBtn = document.getElementById("decrement");
var incrementBtn = document.getElementById("increment");
var clearBtn = document.getElementById("clear");

var counter = counterElement.innerText;

function decrement(){
        if(counter<=-1){
            console.log("Error:cannot go below 0");
            counterElement.innerHTML = "<span style='color:red;'> Error : Cannot go below 0</span>"
    }    
        if(counter>=0){
            error.innerHTML ="<span style='color:black;'></span>"
    }
    counter--;
    if(counter>=0){
        console.log(counter);
        counterElement.innerText = counter;
   }
}

function increment(){
    if(counter<0){
        console.log("Error:cannot go below 0");
        counterElement.innerHTML = "<span style='color:red;'> Error : Cannot go below 0</span>"
    }    
    if(counter>=0){
        error.innerHTML ="<span style='color:black;'></span>"
    }
    counter++;
    if(counter>=0){
        console.log(counter);
        counterElement.innerText = counter;
    }
}

function clear(){
   if(counter<0){
        console.log("Error:cannot go below 0");
        counterElement.innerHTML = "<span style='color:red;'> Error : Cannot go below 0</span>"
   }
   if(counter>=0){
       error.innerHTML ="<span style='color:black;'></span>"
   }
   counter = 0;
   console.log(counter);
   counterElement.innerText = counter;
}
incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
cleartBtn.onclick = clear;
