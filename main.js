
let curIN = '';
let curOP = '';

function append(number){
    curIN += number;
    document.getElementById('display').value = curIN;
}

function add(){
    curOP = '+';
    curIN += curOP;
    document.getElementById('display').value = curIN;
}

function sub(){
    curOP = '-';
    curIN += curOP;
    document.getElementById('display').value = curIN;
}

function multi(){
    curOP = '*';
    curIN += curOP;
    document.getElementById('display').value = curIN;
}

function divide(){
    curOP = '/';
    curIN += curOP;
    document.getElementById('display').value = curIN;
}

function clearIN(){
    curIN = '';
    curOP = '';
    document.getElementById('display').value = '';
}

function calculate(){
    const display = eval(curIN);
    document.getElementById('display').value = display;
    curIN = display.tostring();
    curOP = '';
}