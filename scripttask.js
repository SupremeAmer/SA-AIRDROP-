// Task data
let tasks = [
    { id: 1, title: "follow SupremeAmer channel ", link: "https://t.me/SupremeAmer_community", clicks: 0 },
    { id: 2, title: "Task 2", link: "https://www.example.com/task2", clicks: 0 },
    { id: 3, title: "Task 3", link: "https://www.example.com/task3", clicks: 0 },
];

// User data
let user = {
    homeBalance: 0,
};

// Function to generate task list
function generateTaskList() {
    const taskListContainer = document.querySelector(".task-list");
    taskListContainer.innerHTML = "";

    tasks.forEach((task) => {
        const taskListItem = document.createElement("li");
        const taskLink = document.createElement("a");

        taskLink.textContent = task.title;
        taskLink.href = task.link;
        taskLink.target = "_blank";

        taskListItem.appendChild(taskLink);
        taskListContainer.appendChild(taskListItem);

        taskLink.addEventListener("click", () => {
            task.clicks++;
            checkTaskCompletion(task);
        });
    });
}

// Function to check task completion
function checkTaskCompletion(task) {
    if (task.clicks === 3) {
        alert("Well done! You have successfully completed the task. +1000");
        user.homeBalance += 1000;
        document.querySelector("#home-balance-amount").textContent = user.homeBalance;
    } else if (task.clicks > 3) {
        alert("You did not complete the task.");
    }
}

// Generate task list on page load
generateTaskList();

// Function to update home balance
function updateHomeBalance() {
document.querySelector("#home-balance-amount").textContent = user.homeBalance;
}

// Update home balance on page load
updateHomeBalance();

// Add event listener to task list items
document.querySelectorAll(".task-list li").forEach((item) => {
item.addEventListener("click", () => {
// Get the task ID from the list item
const taskId = item.dataset.taskId;

```// Find the task object
const task = tasks.find((task) => task.id === parseInt(taskId));

// Open the task link in a new tab
window.open(task.link, "_blank");
```
});
});


