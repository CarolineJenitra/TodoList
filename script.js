const displayInput = document.querySelector("#displayInput");
const addBtn = document.querySelector("#addTaskBtn");
const todoList = document.querySelector(".task-list");

const addtodo = ()=>
{
    const task=displayInput.value;
    if(!task){
        alert("Enter tasks to complete.....")
        return
    }
    const divTag = document.createElement('div');
    divTag.classList.add('task')

    const contentTag = document.createElement('div');
    divTag.classList.add('content');

    divTag.appendChild(contentTag);

    const inputTag = document.createElement('input');
    inputTag.classList.add('text');
    inputTag.type = 'text';
    inputTag.value = task;
    inputTag.setAttribute('readonly', 'readonly');
    contentTag.appendChild(inputTag);
 
    const actionsTag = document.createElement('div');
    actionsTag.classList.add('actions');

    const editBtn= document.createElement('button');
    editBtn.classList.add("edit")
    editBtn.innerText = 'Edit';
    const deleteBtn= document.createElement('button');
    deleteBtn.classList.add("delete")
    deleteBtn.innerText = 'Delete';


    actionsTag.appendChild(editBtn);
    actionsTag.appendChild(deleteBtn);

    divTag.appendChild(actionsTag);

    todoList.appendChild(divTag);


    displayInput.value="";

    editBtn.addEventListener('click', (e) => {
        if (editBtn.innerText == "Edit") {
            editBtn.innerText = "Save";
            inputTag.removeAttribute("readonly");
            inputTag.focus();
        } else {
            editBtn.innerText = "Edit";
            editBtn.setAttribute("readonly", "readonly");
        }
    });

    deleteBtn.addEventListener('click', (e) => {
        todoList.removeChild(divTag);
    });
}
addBtn.addEventListener('click',addtodo)

