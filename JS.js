document.querySelector('#add-to-do__text-task').addEventListener('keydown',function (e){
    if (e.keyCode === 13){
        fun_add_to_do();
    }
})
document.querySelector('#add-to-do__button-add').onclick = function(){
    fun_add_to_do();
};

function fun_add_to_do(){
    let text_task = document.querySelector('#add-to-do__text-task').value;

    if(text_task !== "" && text_task.trim() !== ''){
        const list_task = document.querySelector('.tasks__list-tasks');

        const new_task = document.createElement('li');
        new_task.className="list-tasks__style";

        const checkbox = document.createElement('input');
        checkbox.type="checkbox";
        checkbox.className="list-tasks__item_checkbox";
        checkbox.addEventListener('click',ev => fun_done_task(ev.target));

        const delete_task = document.createElement('button');
        delete_task.innerText="X";
        delete_task.className="list-tasks__item_delete-task";
        delete_task.addEventListener('click',ev => fun_delete_task(ev.target));

        const task = document.createElement('label');
        task.className="list-tasks__item_text-task";
        task.textContent=text_task.trim();
        task.addEventListener('dblclick', ev => fun_change_task(ev.target));

        new_task.appendChild(checkbox);
        new_task.appendChild(delete_task);
        new_task.appendChild(task);

        list_task.appendChild(new_task);

        document.querySelector('#add-to-do__text-task').value = '';
    }

}
function fun_change_task(ev){
    const input = document.createElement('input');
    input.className = "list-tasks__item_text-task"
    input.id ="input_change"
    input.addEventListener('focusout',ev => fun_change_task_done(ev.target));
    input.addEventListener('keydown',function (e){
        if (e.keyCode === 13){
            fun_change_task_done(e.target);
        }
    })
    input.value = ev.textContent;
    ev.replaceWith(input);
    document.querySelector('#input_change').focus();
}

function fun_change_task_done(ev) {
    const task = document.createElement('label');
    task.className="list-tasks__item_text-task";
    task.textContent=ev.value;
    task.addEventListener('dblclick', ev => fun_change_task(ev.target));
    ev.replaceWith(task);
}

function fun_delete_task(ev){
    ev.parentNode.remove();
}

function fun_done_task(ev){
    ev.parentNode.className = ev.checked ? 'list-tasks__style list-tasks__style_done':'list-tasks__style';
}
