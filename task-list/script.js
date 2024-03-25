let txtlist = document.getElementById('txtlist')
let list = document.getElementById('list')
let task = document.querySelector('.task')

function createList(){
    const li = document.createElement('li');
    return li
}

function clearInput(){
    txtlist.value = ''
    txtlist.focus();
}

txtlist.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
    if (!txtlist.value) return;
    createTask(txtlist.value);
    }
})

function createButtonDelet(li){
    li.innerHTML += ' '
    const buttonDelet = document.createElement('button');
    buttonDelet.innerHTML = 'X'
    buttonDelet.setAttribute('class', 'X');
    buttonDelet.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(buttonDelet);
}

function createTask(textInput){
    const li = createList();
    li.innerHTML = textInput;
    task.appendChild(li);
    clearInput();
    createButtonDelet(li);
    saveTask();
}

function add(){
    if (!txtlist.value) return
    createTask(txtlist.value)
}

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('X')){
        el.parentElement.remove();
        saveTask();
    }
})

function saveTask(){
    const liTask = task.querySelectorAll('li');
    const taskOfList = [];

    for (let tarefa of liTask) {
        let taskText = tarefa.innerHTML;
        taskText = taskText.replace('X', ' ').trim();
        taskOfList.push(taskText);
    }


    const taskJSON = JSON.stringify(taskOfList);
    console.log(taskOfList);
    localStorage.setItem('task', taskJSON);
}

function addSaveTask(){
    const task = localStorage.getItem('task')
    const listOfTask = JSON.parse(task)
    
    for (let tarefa of listOfTask){
        createTask(tarefa)
    }
}
addSaveTask()