// grab data from text input box
// initialize variables
let todos = []
,id = 0;

// HTML element variables
const inputItem = document.getElementById("inputText");
const submitItem = document.getElementById("submit-btn");
const list = document.getElementById("list-table")

// get data from localstorage
let data = localStorage.getItem("TODO");

// check if data in local storage
if(data) {
    todos = JSON.parse(data);
    id = todos.length;
}

// store data in array and save to local storage
let storeItem = function(inputItem) {
    inputItem = document.getElementById("inputText").value;
    // localStorage.setItem("TODO",JSON.stringify(todos))
    // console.log(data);
    if (inputItem) {
        addItem(inputItem, id, false, false);
        todos.push({"name": inputItem, "id": id,"done": false, "trash": false });
        console.log(inputItem, id, false, false)
    }
    id++;
}

submitItem.addEventListener("click", storeItem);
inputItem.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        submitItem.click();
    }
});

// function to generate list-item upon item creation
function addItem(listItem) {
    const element = `<li class="list-item"><input type="checkbox" id="${id}"
    action="complete"><span class="item-text">${listItem}</span><i class="fas fa-trash-alt trash-icon" action="delete"></i></li>`
    const position = 'beforeend'

    list.insertAdjacentHTML(position, element)
}

list.addEventListener("click", function(event) {
    let element = event;
    console.log(element)
})

// function to mark item as done
// click event when item is checked should change action to "done" to true

// function to delete/trash item
// click event should change "trash" to true and delete item