//Grab data from text input box
//Initialize Variables
let inputItem = document.getElementById("inputText");
let submitItem = document.getElementById("submit-btn");
const todos = [];
let id = 0;

//console log text
let addItem = function(inputItem) {
    inputItem = document.getElementById("inputText").value;
    todos.push({"name": inputItem, "id": id,"done": false, "trash": false });
    console.log(todos);
    id++;
}

submitItem.addEventListener("click", addItem);
inputItem.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        submitItem.click();
    }
});
//store text

//function to generate list-item upon item creation

//function to mark item as done

//function to delete/trash item