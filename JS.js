const enterKey = document.querySelector('#add-to-do__text-task').addEventListener('keydown',function (e){
    if (e.key === 'Enter'){
        addToDo();
    }
})
document.querySelector('#add-to-do__button-add').addEventListener('click', function(){
    addToDo();
});

function createElement(elName,elClasses = [],text='',typeEvent = [],event = [],type = '',contentEdit = false) {
    const el = document.createElement(elName);
    if (elClasses.length){
        elClasses.forEach(className => el.classList.add(className));
    }
    if (text){
        el.textContent = text;
    }
    if (event.length){
        event.forEach(event => el.addEventListener(typeEvent, ev => event(ev.target)));
    }
    if (type){
        el.type = type;
    }
    if(contentEdit){
        el.contentEditable = true;
    }
    return el;
}

function addToDo(){
    let textTask = document.querySelector('#add-to-do__text-task').value;

    if(textTask.trim()){
        const newListTask = document.querySelector('.tasks__list-tasks');
        const newTask = createElement('li',['list-tasks__style'])
        const checkboxT = createElement('input',['list-tasks__item_checkbox'],'',['click'],[doneTaskStyle],'checkbox')
        const deleteT = createElement('button',['list-tasks__item_delete-task'],'X',['click'],[deleteTask])
        const textT = createElement('label',['list-tasks__item_text-task'],textTask.trim(),'','','',true)
        newTask.appendChild(checkboxT);
        newTask.appendChild(deleteT);
        newTask.appendChild(textT);
        newListTask.appendChild(newTask);

        document.querySelector('#add-to-do__text-task').value = '';
    }
}

function deleteTask(ev){
    ev.parentNode.remove();
}

function doneTaskStyle(ev){
    ev.parentNode.className = ev.checked ? 'list-tasks__style list-tasks__style_done':'list-tasks__style';
}
