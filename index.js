// --------------------HEADER-----------------/

const header = document.createElement('h1');

header.innerText = "My Calculator";

document.body.appendChild(header)


//-- input area
const inputBar = document.createElement('input');
inputBar.placeholder = "0";
document.body.appendChild(inputBar);



//------------------CREATING BUTTONS --------------------------//


//--number 1
const bNum1 = document.createElement("button")
bNum1.innerText = "1";
document.body.appendChild(bNum1);

bNum1.addEventListener('click', () => {
    inputBar.value += "1"  
});

//number 2
const bNum2 = document.createElement("button")
bNum2.innerText = "2";
document.body.appendChild(bNum2);

bNum2.addEventListener('click', () => {
    inputBar.value += "2"  
    console.log(inputBar.innerText)
});

//-- number 3
const bNum3 = document.createElement("button")
bNum3.innerText = "3";
document.body.appendChild(bNum3);

//-- number 4
const bNum4 = document.createElement("button")
bNum4.innerText = "4";
document.body.appendChild(bNum4);

//-- number 5
const bNum5 = document.createElement("button")
bNum5.innerText = "5";
document.body.appendChild(bNum5);

//-- number 6
const bNum6 = document.createElement("button")
bNum6.innerText = "6";
document.body.appendChild(bNum6);

//-- number 7
const bNum7 = document.createElement("button")
bNum7.innerText = "7";
document.body.appendChild(bNum7);

//-- number 8
const bNum8 = document.createElement("button")
bNum8.innerText = "8";
document.body.appendChild(bNum8);

//-- number 9
const bNum9 = document.createElement("button")
bNum9.innerText = "9";
document.body.appendChild(bNum9);

//-- number 0
const bNum0 = document.createElement("button")
bNum0.innerText = "0";
document.body.appendChild(bNum0);

//-- opertaion -
const subtraction = document.createElement("button")
subtraction.innerText = "-";
document.body.appendChild(subtraction);


subtraction.addEventListener('click', () => {
    inputBar.value += "-"  
});


//-- opertaion +
const addition = document.createElement("button")
addition.innerText = "+";
document.body.appendChild(addition);

//-- operation x
const multiplication = document.createElement("button")
multiplication.innerText = "x";
document.body.appendChild(multiplication);

//-- operation %
const divison = document.createElement("button")
divison.innerText = "%";
document.body.appendChild(divison);

//-- equal sign 
const total = document.createElement("button")
total.innerText = "=";
document.body.appendChild(total);


total.addEventListener('click', () => {
    inputBar.value = eval(inputBar.value)   
});

//--  Clear
const clearNumber = document.createElement("button")
clearNumber.innerText = "C";
document.body.appendChild(clearNumber);

//-- decimal button
const decimal = document.createElement("button");
decimal.innerText = ".";
document.body.appendChild(decimal);

