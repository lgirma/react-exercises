var db = [];
var options = {
    hideCompleted: false
}

function onAddTask() {
    let taskElt = document.getElementById('task')
    db.push({id: db.length, task: taskElt.value, isDone: false})
    taskElt.value = ''
    drawTodoList()
}

function onToggleHideCompleted() {
    options.hideCompleted = !options.hideCompleted;
    drawTodoList();
}

function drawTodoList() {
    document.getElementById('todoList').innerHTML = db
    .filter(i => !options.hideCompleted || !i.isDone)
    .map(i => {
        return `<div>
            <label>
                <input type="checkbox" onchange="onToggleDone(${i.id})">
                ${i.task}
            </label>
            <span title="Delete" style="cursor: pointer; color: red" onclick="onDelete(id)">&times;</span>
            </div>`
    }).join('')
}

function onToggleDone(id) {
    let item = db.find(i => i.id == id);
    item.isDone = !item.isDone
}

function onDelete(id) {
    if (!confirm('Are you sure?'))
        return;
    db = db.filter(i => i.id != id)
    drawTodoList()
}