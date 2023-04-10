function add(a, b){
    return a + b;
}; 

function subtract(a, b){
    return a - b; 
}; 

function multiply(a, b){
    return a * b; 
};

function divide(a, b){
    return a / b; 
};

function operate(operator, num_1, num_2){
    return operator(num_1, num_2);
};


//DISPLAY
//When the user presses a number(s), populate the display
const display = document.getElementById('display');
const button = document.querySelectorAll('.button');
const numArray = new Array();

button.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        display.innerHTML += currentButton.textContent; 
        num_1 = Number(display.innerHTML); 
        //console.log(num_1);
    })





const operatorButton = document.querySelectorAll('.operator');
const equals = document.querySelector('.equalSign'); 
const addition = document.getElementById('add');
operatorButton.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
       
        //if(clicked = false){
           num_1 = Number(display.innerHTML);
            //console.log(num_1);
            //console.log(clicked);
            //numArray.push(num_1);
           
        //}
        //if(clicked = true){
            //console.log(clicked);
            //num_1 = Number(display.innerHTML);

            let operator = currentButton.id; 
           
            //console.log(operator);
            num_2 = Number(display.innerHTML);
            //console.log(num_2);
            //numArray.push(num_2);
            
            /*if(num_1 && num_2 && operator){
                addition.addEventListener('click', () => {
                    if(operator === 'add'){
                        
                    }
                })*/


                equals.addEventListener('click', () => {
                    if(operator === 'add'){
                        display.innerHTML = add(num_1, num_2);
                        //numArray.push(Number(display.innerHTML));
                        /*for(let i = 0 ; i < numArray.length ; i++){
                            numArray[i] = Number(display.innerHTML);
                            if(numArray[i] === numArray[i + 1]){
                                numArray.pop();
                                //num_1 = numArray[0];
                            }
                        }*/
                    }else if (operator === 'subtract'){
                        display.innerHTML = operate(subtract, num_2, num_1);
                    }
                })

            //}
        //}

        
    }
    )


    //try .remove for display instead of clear
    //you've added a class of 'remove' to add button
    //create an event for add that involves remove()
    


})});

const clear = document.querySelectorAll(".clear");
clear.forEach(function(currentButton){
    currentButton.addEventListener('click', () =>{
        display.innerHTML = '';

        //return;     
    })});







//When the operator button is clicked, save the number in the display(num_1)



/*const addition = document.getElementById('add');
add.addEventListener('click', () => {
    add(Number(display.innerHTML));
})

//When the user presses a number(s), populate the display
const display = document.getElementById('display');
const button = document.querySelectorAll('.button');
const operatorButton = document.querySelectorAll('.operator');
button.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        display.innerHTML += currentButton.textContent; 
    })
    return display.innerHTML; 
});

//When the user presses an operator button, save the number before it
let operator; 
operatorButton.forEach(function(currentButton){
    currentButton.addEventListener('click', () =>{
        var clicked = false; 
        num_1 = Number(display.innerHTML); 
        display.innerHTML = ' ';
        console.log(num_1);
        operator = currentButton.id; 
        console.log(operator);
        num_2 = 0;
        clicked = true; 
        console.log(operate(operator, num_1, num_2)); 
    })
});
       
       
        /*if(clicked = true){
            currentButton.addEventListener('click', () =>{
                num_2 = Number(display.innerHTML); 
                display.innerHTML = ' ';
                console.log(num_2);
    });
    console.log(operate(operator, num_1, num_2));
}})});*/






/*
//ADD BUTTON
const operation = document.querySelector('.operation');
operation.forEach(function(currentOperation){
    currentOperation.addEventListener('click', () => {
        console.log(currentOperation.id); 
    })
})*/



/*button.addEventListener('click', () => {
    display.innerHTML += button.innerHTML;
})*/



    //Create a div with the class name 'grid'
    //const grid = document.createElement('div');
    //grid.classList.add("grid");
    //Make the 'grid' div a child of the 'container' div
    //container.appendChild(grid);
