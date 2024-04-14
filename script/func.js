// created element function
function createNo(type , text , parent){
    let element = document.createElement(type);
    element.textContent = text;
    parent.appendChild(element);
    return element;
}