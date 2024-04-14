// DOM
let TaskList = document.querySelector('.taskList');
let input = document.querySelector('input[type = text]');
let button = document.querySelector('input[type = button]');
let clear = document.querySelector('input[value = Clear]');

// if clicked add button
button.addEventListener('click' , ()=>{
    // if input empty
    if(!(input.value == '')){
        let item = createNo('div' , nameItem , TaskList);
        input.value = '';
    }
})

// if clicked clear button
clear.addEventListener('click' , ()=>{
    // take all div in tasklist and removed
    let items = document.querySelectorAll('.taskList > div');
    for(let i = 0; i <= items.length; i++){
        TaskList.removeChild(items[i]);
    }
})