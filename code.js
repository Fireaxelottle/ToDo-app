const form = document.getElementById('form');
const input = document.getElementById('input');
const TodoS = document.getElementById('Todos');

const todo = JSON.parse(localStorage.getItem('todos'));

if (todo){
   todo.forEach((todo)=>{
      addTodo(todo);
   })
}

form.addEventListener('submit', (e) => {
   e.preventDefault();

   addTodo();
})

function addTodo(todo) {
   let Todo = input.value;

if(todo){
   Todo = todo.text
}


   if (Todo ) {
      const TodoEl = document.createElement('li');

      if(todo && todo.completed){
         TodoEl.classList.add('completed');
      }

      TodoEl.innerHTML = Todo;

      TodoEl.addEventListener('click', () => {
         TodoEl.classList.toggle('completed');
         UpdateLs()
      });

      TodoEl.addEventListener('contextmenu', (e) => {
         e.preventDefault();
         TodoEl.remove();
         UpdateLs()
      });

      TodoS.appendChild(TodoEl);

      input.value = '';

      UpdateLs();
   }
};

function UpdateLs() {
   const todosEl = document.querySelectorAll('li');
             
   const todos = [];

   todosEl.forEach((todosEl) =>{
      todos.push({
         text: todosEl.innerHTML,
         completed: todosEl.classList.contains("completed"),
      });
   });

   localStorage.setItem("todos", JSON.stringify(todos));
}