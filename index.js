var button = document.getElementsByClassName("button"); 
var display = document.getElementById("dis");
var operand1 = null;
var operand2 = null;
var operator = null;
var result = null;
// var arr = ["+","-","%","/","*","=","Enter Anything"]

// adding click function in all buttons.
// Operator buttons.
button[0].addEventListener('click',function(){
    display.innerHTML = "Enter Anything"
});

button[1].addEventListener('click',function(){
    if(parseInt(display.innerText) > 0 ) {
        operand1 = -parseInt(display.innerText);
        display.innerText = "-" + display.innerText;
    }

    else{
        operand1 = -1 * parseInt(display.innerText);
        display.innerText = operand1; 
    }
});


button[2].addEventListener('click',percentage);
button[3].addEventListener('click',division);
button[7].addEventListener('click',multiplication);
button[11].addEventListener('click',subtraction);
button[15].addEventListener('click',addition);
button[18].addEventListener('click',equal);
// Operator buttons ending.



// Numerical Buttons.
button[4].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "7";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "7";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "7";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "7";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "7";
    }else{
        display.innerHTML =  display.innerText + "7";
       
        // console.log('else works');
    };
    
    // alert("the value chosen is" + display.innerText);
});

button[5].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "8";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "8";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "8";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "8";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "8";
    }else{
        display.innerHTML =  display.innerText + "8";
       
        // console.log('else works');
    };
    
    // alert("the value chosen is" + display.innerText);
});
    

button[6].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "9";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "9";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "9";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "9";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "9";
    }else{
        display.innerHTML =  display.innerText + "9";
       
        // console.log('else works');
    };
    
    // display.innerHTML = display.innerText + "7"
});


button[8].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "4";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "4";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "4";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "4";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "4";
    }else{
        display.innerHTML =  display.innerText + "4";
       
        // console.log('else works');
    };
    
    // display.innerHTML = display.innerText + "4"
});

button[9].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "5";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "5";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "5";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "5";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "5";
    }else{
        display.innerHTML =  display.innerText + "5";
       
        // console.log('else works');
    };
    
    // display.innerHTML = display.innerText + "5"
});

button[10].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "6";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "6";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "6";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "6";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "6";
    }else{
        display.innerHTML =  display.innerText + "6";
       
        // console.log('else works');
    };
    
    // display.innerHTML =  display.innerText + "6"
});


button[12].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "1";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "1";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "1";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "1";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "1";
    }else{
        display.innerHTML =  display.innerText + "1";
       
        // console.log('else works');
    };
    
    // display.innerHTML = display.innerText + "1"
});

button[13].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "2";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "2";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "2";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "2";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "2";
    }else{
        display.innerHTML =  display.innerText + "2";
       
        // console.log('else works');
    };
    
    // display.innerHTML = display.innerText + "2"
});

button[14].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "3";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "3";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "3";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "3";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "3";
    }else{
        display.innerHTML =  display.innerText + "3";
       
        // console.log('else works');
    };
    
    // display.innerHTML = display.innerText + "3"
});

// {
//     display.innerHTML = display.innerText + "+"
// });

button[16].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "0";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "0";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "0";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "0";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = "0";
    }else{
        display.innerHTML =  display.innerText + "0";
       
        // console.log('else works');
    };
    
    // display.innerHTML = display.innerText + "0"
});

button[17].addEventListener('click',function(){
    if(display.innerText == "Enter Anything"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = ".";
    }else if(display.innerText == "+"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = ".";
    }else if(display.innerText == "-"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = ".";
    }else if(display.innerText == "*"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = ".";
    }else if(display.innerText == "/"){
        // console.log(display.innerText);
        // console.log(' if works');
        display.innerText = ".";
    }else{
        display.innerHTML =  display.innerText + ".";
       
        // console.log('else works');
    };

    
});

// Number Button ending.

// {
//     display.innerText = display.innerText + "="
// });

// button.addEventListener('click',function(){
//     display.innerHTML="hello how are you";
// });

// Operator functions
// addition function
function addition(){
    operand1 = parseInt(display.innerText);
    operator = "+";
    display.innerText = "+";
    // return operand1,operator;
};

// subtraction function
function subtraction(){
    operand1 = parseInt(display.innerText);
    operator = "-";
    display.innerText = "-";
    // return operand1,operator;
};

//multiplication function
function multiplication(){
    operand1 = parseInt(display.innerText);
    operator = "*";
    display.innerText = "*";
    // return operand1,operator;
};

// division function
function division(){
    operand1 = parseInt(display.innerText);
    operator = "/";
    display.innerText = "/";
    // return operand1,operator;
};

// percentage function
function percentage(){
    operand1 = parseInt(display.innerText);
    // operator = "+";
    display.innerText = operand1/100;
    // return operand1,operator;
};

// evalute function
function equal(){
    // alert(operator);
    operand2 = parseInt(display.innerText);
    result = eval(operand1 + operator + operand2);
    // console.log(result);
    display.innerText = result;
};
// Operator functions ending.