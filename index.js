// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take all the poop out"); // task 0
const task2 = newTask("Do Laundry", "hamper starting to smell"); // task 1
const tasks = [task1, task2];

console.log(task1.title);
console.log(task1.complete);
console.log(task1.completeTask());
console.log(task1.complete);

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
