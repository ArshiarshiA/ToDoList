// DOM
let TaskList = document.querySelector('.taskList');
let input = document.querySelector('input[type = text]');
let button = document.querySelector('input[type = button]');

// if clicked add button
button.addEventListener('click' , ()=>{
    let nameItem = input[0].value;
    // if input empty
    if(!(nameItem == '')){
        let item = createNo('div' , nameItem , TaskList);
        nameItem = '';
    }
})