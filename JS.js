SizeTextarea();
DeleteTask();

function SizeTextarea(){
    let tx = document.getElementsByClassName('Text');

    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        tx[i].addEventListener("input", OnInput, false);
    }
    function OnInput() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    }
}


function FunAddToDo(){
    let text = document.getElementById('AddToDo').value;

    if(text !== "" && text.trim() !== ''){
        const ListTask = document.querySelector('#ListTasks')

        const NewTask = document.createElement('li');

        NewTask.className="ElementListTasks";
        NewTask.onclick = Done;

        const checkbox = document.createElement('input');
        const task = document.createElement('textarea');
        const ButDelete = document.createElement('button')

        checkbox.type="checkbox";
        checkbox.className="checkbox";

        task.type="text";
        task.className="Task Text";
        task.value=text.trim();

        ButDelete.innerText="X";
        ButDelete.className="Delete";

        NewTask.appendChild(checkbox);
        NewTask.appendChild(task);
        NewTask.appendChild(ButDelete);

        ListTask.appendChild(NewTask);

        document.getElementById('AddToDo').value = '';

        SizeTextarea();
        DeleteTask();
    }

}

function DeleteTask(){
    let els = document.getElementsByClassName('Delete');

    for (let i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
}


function Done(){
    let els = document.getElementsByClassName('checkbox');

    for (let i = 0; i < els.length; i++) {
        if(els[i].checked){
            els[i].parentNode.className = ('FinishedListTasks');
        }
        else  {
            els[i].parentNode.className = "ElementListTasks"
        }
    }
}
