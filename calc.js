let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
let screen = document.querySelector('.screen');
//event delegation for calc buttons//
document.querySelector('.calc-buttons').addEventListener('click',function(event){
    buttonClick(event.target.innerText);
});
//function for checking if the value is a number or a symbol//
function buttonClick(value){
if(isNaN(parseInt(value))){
   functionSymbol(value);
}
else{  
   handleNumber(value); 
}
display();//display number on screen on every click//
}
//if user clicked a symbol//
function functionSymbol(value){
if(value === 'C'){
    buffer="0";
    runningTotal=0;
    previousOperator = null;
}
else if(value === 'del'){
    if(buffer.length === 1){
        buffer = "0";
    }
    else{
        buffer = buffer.substring(0,buffer.length-1)
    }

}
else if(value === '='){
    if(previousOperator === null){
        return;
    }
    performOperation(parseInt(buffer));
    previousOperator = null;
    buffer = "" + runningTotal;

}
else{
    performMath(value);
}

}
//storing the buffer on runningTotal var//
function performMath(value){
    
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intBuffer; 
    }
    previousOperator = value;
    buffer="0";
}
//function for performing arithmetic operation//
function performOperation(intBuffer){
    
    if(previousOperator === "+"){
        runningTotal += intBuffer;
    }
   else if(previousOperator === "-"){
        runningTotal -= intBuffer;
    }
   else if(previousOperator === "*"){
        runningTotal *= intBuffer;
    }
    else{
        runningTotal /= intBuffer;
    }
}
//function for displaying the clicked numbers on screen//
function handleNumber(value){
if(buffer==="0"){
    buffer = value;
}
else{
    buffer += value;
}
}
// fucntion to display the number on screen//
function display(){
    screen.innerHTML = buffer;
}