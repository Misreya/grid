var d = document;
const apps = d.querySelectorAll('.child');

const [one, two, three, four, five, six, seven, eight, nine] = apps;



const todoInput = d.querySelector('#one input');
const todoButton = d.querySelector('#one button');
const todoList = d.querySelector('#one ul');

todoButton.addEventListener("click", function() {
    const todoValue = todoInput.value;
    const todoTask = d.createElement('li');
    todoTask.innerText = todoValue;
    todoList.appendChild(todoTask);
    todoInput.value = "";

    const todoEdit = d.createElement('button');
    todoEdit.innerText = "!";
    todoTask.appendChild(todoEdit);
    todoEdit.addEventListener("click", function() {
        todoTask.setAttribute("contenteditable = true")
    });
    
    const todoDelete = d.createElement('button');
    todoDelete.innerText = "x";
    todoTask.appendChild(todoDelete);
    todoDelete.addEventListener("click", function(){
        todoList.removeChild(todoTask);
    });

    const todoComplete  = d.createElement('button');
    todoComplete.innerText = 'O';
    todoTask.prepend(todoComplete);
    todoComplete.addEventListener("click", function() {
        todoTask.classList.toggle('todoComplete');
    });

    //fix edit button, change eventlisteners to switch statement
})
