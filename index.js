let firstVal = "";
let operator = "";
let secondVal = "";

// --------------------HEADER-----------------/

const header = document.createElement('h1');

header.innerText = "My Calculator";

document.body.appendChild(header)


//-- input area
const inputBar = document.createElement('input');
inputBar.placeholder = "0";
document.body.appendChild(inputBar);

//------ Create Function for first input
//  first input is the number that is number pressed into the input bar when an arithmetic operation is pressed

const inputVal = (val) => {
    if (val === "+" || val === "-" || val === "*" || val === "/") {
        if (firstVal === "") {
            return
        }
        firstVal = inputBar.value
        operator = val
        return
    }

    if (operator === "") {
        firstVal += val
        inputBar.value = firstVal
        return
    }

    secondVal += val
    inputBar.value = secondVal
}



//------------------CREATING BUTTONS --------------------------//


//--number 1
const bNum1 = document.createElement("button")
bNum1.innerText = "1";
document.body.appendChild(bNum1);

bNum1.addEventListener('click', () => {
    inputVal("1")
});

//number 2
const bNum2 = document.createElement("button")
bNum2.innerText = "2";
document.body.appendChild(bNum2);

bNum2.addEventListener('click', () => {
    inputVal("2")

});

//-- number 3
const bNum3 = document.createElement("button")
bNum3.innerText = "3";
document.body.appendChild(bNum3);

bNum3.addEventListener('click', () => {
    inputVal("3")

});

//-- number 4
const bNum4 = document.createElement("button")
bNum4.innerText = "4";
document.body.appendChild(bNum4);

bNum4.addEventListener('click', () => {
    inputVal("4")

});

//-- number 5
const bNum5 = document.createElement("button")
bNum5.innerText = "5";
document.body.appendChild(bNum5);

bNum5.addEventListener('click', () => {
    inputVal( "5")

});

//-- number 6
const bNum6 = document.createElement("button")
bNum6.innerText = "6";
document.body.appendChild(bNum6);

bNum6.addEventListener('click', () => {
    inputVal( "6")
   
});

//-- number 7
const bNum7 = document.createElement("button")
bNum7.innerText = "7";
document.body.appendChild(bNum7);

bNum7.addEventListener('click', () => {
    inputVal("7")

});

//-- number 8
const bNum8 = document.createElement("button")
bNum8.innerText = "8";
document.body.appendChild(bNum8);

bNum8.addEventListener('click', () => {
    inputVal("8")

});

//-- number 9
const bNum9 = document.createElement("button")
bNum9.innerText = "9";
document.body.appendChild(bNum9);

bNum9.addEventListener('click', () => {
    inputVal("9")

});

//-- number 0
const bNum0 = document.createElement("button")
bNum0.innerText = "0";
document.body.appendChild(bNum0);

bNum0.addEventListener('click', () => {
    inputVal("0")

});

//-- opertaion subtract
const subtraction = document.createElement("button")
subtraction.innerText = "-";
document.body.appendChild(subtraction);


subtraction.addEventListener('click', () => {
    inputVal("-")
     
});


//-- opertaion add
const addition = document.createElement("button")
addition.innerText = "+";
document.body.appendChild(addition);

addition.addEventListener('click', () => {
    inputVal("+")
});

//-- operation multiple
const multiplication = document.createElement("button")
multiplication.innerText = "x";
document.body.appendChild(multiplication);

multiplication.addEventListener('click', () => {
    inputVal("*")
});

//-- operation divide
const divison = document.createElement("button")
divison.innerText = "÷";
document.body.appendChild(divison);

divison.addEventListener('click', () => {
    inputVal("/")
});

//-- equal sign 
const total = document.createElement("button")
total.innerText = "=";
document.body.appendChild(total);


total.addEventListener('click', () => {
    if(!firstVal && !secondVal ){
        return 
    }
   const total = eval(firstVal + operator + secondVal)
   inputBar.value = total
   firstVal = "";
   secondVal = "";
   operator = "";
});

//--  Clear
const clearNumber = document.createElement("button")
clearNumber.innerText = "C";
document.body.appendChild(clearNumber);

clearNumber.addEventListener('click', () => {
    inputBar.value = " ";
});

//-- decimal button
const decimal = document.createElement("button");
decimal.innerText = ".";
document.body.appendChild(decimal);

decimal.addEventListener('click', () => {
    inputBar.value += "."
});

//----- saves number as input one when any operation sign has been pressed
