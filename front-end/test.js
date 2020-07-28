const readline = require('readline');
const fs = require('fs');
const path = require('path')


let todos = [];
const interface = readline.createInterface({input: process.stdin, output: process.stdout})
const menu = `
Your options are:
1. Add a todo.
2. Remove a todo.
3. Mark a todo completed.
4. Mark a todo uncompleted.
5. Quit.
`

const loadTodos = function() {
  const jsonData = path.join(__dirname, '../back-end/todos.json')
  const file = fs.readFileSync(jsonData, 'utf8');
  const rows = JSON.parse(file);
  todos = rows
  return todos
}

const saveTodos = function() {
  const jsonData = path.join(__dirname, '../back-end/todos.json')
  const file = fs.readFileSync(jsonData, 'utf8');
  const newContents = JSON.stringify(loadTodos().todos)
  fs.writeFileSync(file, newContents);
}
console.log(loadTodos())
console.log(saveTodos())
