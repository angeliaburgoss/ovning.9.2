
//declare addItem function
function addItem(){

    //retrives input element with input id and stores in varaible userInput
    const userInput = document.getElementById('input');
    //gets trimmed value (no-whitespace) of the input element and stores in variable itemName
    const itemName = userInput.value.trim();

    //check if itemName is not an empty string
    if (itemName !== '')
    {
        //retrives element with id todo-list and stores in variable todoList
        const todoList = document.getElementById('todo-list');
        //creates a new list item element li
        const newItem = document.createElement('li');
        newItem.innerHTML =
        `<span class = "item-name"> ${itemName}</span>
        <span class = "delete-button" onClick = "removeItem(this)">Remove</span>`;

        //adds a click event listener to newItem that will execute the toogleItem function when newItem is clicked
        newItem.addEventListener('click', toggleItem);
        
        //appends the new list item newItem as a child to the todoList element and adds the new item to the list
        todoList.appendChild(newItem);
        //should clear input field after item is added to list. does not work
        userInput.value = '';

    }
}


//declare toogleItem functon
function toggleItem(event) 
{
    //retrives the checked list item and stores in varaible item
    //adds/removes css class completed from the item element 
    const item = event.currentTarget;
    item.classList.toggle('completed');
}

//declare removeItem function 
function removeItem(deleteButton)
{
    const item = deleteButton.parentNode;
    item.remove();
}