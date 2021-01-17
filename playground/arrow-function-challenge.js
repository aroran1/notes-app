// GOAL: Create method to get incomplete tasks from the object below
// original code
// const tasks = {
//   todos: [
//     {
//       text: 'Grocery shopping',
//       completed: true
//     },
//     {
//       text: 'Clean yard',
//       completed: false
//     },
//     {
//       text: 'Coding course',
//       completed: false
//     }
//   ]
// }

const tasks = {
  todos: [
    {
      text: 'Grocery shopping',
      completed: true
    },
    {
      text: 'Clean yard',
      completed: false
    },
    {
      text: 'Coding course',
      completed: false
    }
  ],
  getPendingTodos() {
    // console.log(this.todos);
    // const pendingTask = this.todos.filter( todo => !todo.completed);
    // console.log(pendingTask);
    return this.todos.filter( todo => !todo.completed);
  }
};

console.log(tasks.getPendingTodos());