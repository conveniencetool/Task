// タスクを保持する配列
let tasks = [];

// 追加ボタンのイベントリスナー
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        updateTaskList();
    } else {
        alert("タスクを入力してください。");
    }
});

// タスクリストを更新する関数
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <div>
                <button onclick="toggleComplete(${index})">${task.completed ? '未完了' : '完了'}</button>
                <button onclick="removeTask(${index})">削除</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// タスクの完了状態を切り替える関数
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

// タスクを削除する関数
function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}
