// script.js
function createTask() {
    const titleInput = document.getElementById("task-title");
    const deadlineInput = document.getElementById("task-deadline");
    const taskContainer = document.getElementById("task-container");
  
    const titleText = titleInput.value;
    const deadlineText = deadlineInput.value;
  
    if (titleText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskEntry = document.createElement("li");
    taskEntry.className = "task-entry";
  
    const taskDetails = document.createElement("span");
    taskDetails.textContent = `${titleText} - ${deadlineText}`;
    taskEntry.appendChild(taskDetails);
  
    const markCompleteButton = document.createElement("button");
    markCompleteButton.textContent = "Complete";
    markCompleteButton.onclick = () => {
      taskEntry.classList.toggle("completed");
    };
    taskEntry.appendChild(markCompleteButton);
  
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.onclick = () => {
      taskContainer.removeChild(taskEntry);
    };
    taskEntry.appendChild(removeButton);
  
    taskContainer.appendChild(taskEntry);
  
    // Clear input fields
    titleInput.value = "";
    deadlineInput.value = "";
  }
  