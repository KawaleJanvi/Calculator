
var data = [7,8,9, 4, 5, 6,1,2,3, 0];
var operations = ['+', '-', '*', '/'];
var value = '';
var operators = [''];
var counter = 0;

let container=document.getElementById('container');
let textBox = document.createElement('input')
textBox.id = 'input'
container.appendChild(textBox);



for (let i of data) {
    let btn = document.createElement('button');
    btn.innerHTML = i;
    btn.id = 'btn' + i;
    btn.value = i;
    container.appendChild(btn);
}
for (let j in operations) {
    let btn = document.createElement('button');
    btn.innerHTML = operations[j];
    btn.className='op';
    btn.id = 'op' + j;
    btn.value = operations[j];
    container.appendChild(btn);
}
let btn = document.createElement('button');
btn.innerHTML = '=';
btn.id = 'equal';
container.appendChild(btn);

let clearbtn = document.createElement('button');
clearbtn.innerHTML = 'Clear';
clearbtn.id = 'clear';
container.appendChild(clearbtn);

actionNumber();
actionOperation();
function handler(event) {
    value += event;
    document.getElementById('input').value = value;
}

document.getElementById('input').addEventListener("keyup", function (event) {

    if(/^[0-9]$/i.test(event.key) || operations.includes(event.key)){
    value = event.target.value;
    }
    else if(event.key=='Backspace'){
        clear()
    }
    else if(event.key=='Enter'){
        calculate();
    }
    else{
        document.getElementById('input').value=value;
    }
});

function actionNumber() {
    for (let i in data) {
        document.getElementById('btn' + i).addEventListener('click', function (event) { handler(event.target.value) });
    }
}
function actionOperation() {
    for (let i in operations) {
        document.getElementById('op' + i).addEventListener('click', function (event) {
            value += event.target.value;
            document.getElementById('input').value = value;
        });
    }
}
function calculate(){
    value = eval(value);
    document.getElementById('input').value = value.toString();
}
document.getElementById('equal').addEventListener('click', function (event) {
calculate()
});

function clear(){
    try {
        value = value.slice(0, -1);
        document.getElementById('input').value = value;
    }
    catch (err) {
        console.log(err);
    }
}
document.getElementById('clear').addEventListener('click', function (event) {
clear()
});
