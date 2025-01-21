// Task data
let tasks = [
    { id: 1, title: "Task 1", description: "This is task 1" },
    { id: 2, title: "Task 2", description: "This is task 2" },
    { id: 3, title: "Task 3", description: "This is task 3" },
];

// Function to generate task stickers
function generateTaskStickers() {
    const taskStickersContainer = document.querySelector(".task-stickers");
    taskStickersContainer.innerHTML = "";

    tasks.forEach((task) => {
        const taskSticker = document.createElement("div");
        taskSticker.classList.add("task-sticker");

        const taskTitle = document.createElement("h2");
        taskTitle.textContent = task.title;

        const taskDescription = document.createElement("p");
        taskDescription.textContent = task.description;

        taskSticker.appendChild(taskTitle);
        taskSticker.appendChild(taskDescription);

        taskStickersContainer.appendChild(taskSticker);
    });
}

// Function to add new task
function addTask() {
    const newTaskTitle = prompt("Enter new task title:");
    const newTaskDescription = prompt("Enter new task description:");

    if (newTaskTitle && newTaskDescription) {
        const newTask = {
            id: tasks.length + 1,
            title: newTaskTitle,
            description: newTaskDescription,
        };

        tasks.push(newTask);
        generateTaskStickers();
    }
}

// Generate task stickers on page load
generateTaskStickers();

// Add event listener to add task button
document.querySelector(".add-task-btn").addEventListener("click", addTask);

// Task data
let tasks = [
  { id: 1, title: "Task 1", description: "This is task 1", deadline: new Date().getTime() + 60000 }, 
  { id: 2, title: "Task 2", description: "This is task 2", deadline: new Date().getTime() + 120000 }, 
  { id: 3, title: "Task 3", description: "This is task 3", deadline: new Date().getTime() + 180000 }, 
];

// User data
let user = {
  homeBalance: 0,
};

// Function to generate task stickers
function generateTaskStickers() {
  const taskStickersContainer = document.querySelector(".task-stickers");
  taskStickersContainer.innerHTML = "";

  tasks.forEach((task) => {
    const taskSticker = document.createElement("div");
    taskSticker.classList.add("task-sticker");

    const taskTitle = document.createElement("h2");
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;

    taskSticker.appendChild(taskTitle);
    taskSticker.appendChild(taskDescription);

    taskStickersContainer.appendChild(taskSticker);
  });
}

// Function to delete task and add SA points
function deleteTaskAndAddPoints(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  user.homeBalance += 1000;
  document.querySelector(".home-balance").textContent = `Home Balance: ${user.homeBalance} SA points`;
  generateTaskStickers();
}

// Function to check task deadlines
function checkTaskDeadlines() {
  tasks.forEach((task) => {
    if (new Date().getTime() > task.deadline) {
      deleteTaskAndAddPoints(task.id);
    }
  });
}

// Generate task stickers on page load
generateTaskStickers();

// Check task deadlines every second
setInterval(checkTaskDeadlines, 1000);
