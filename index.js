let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
displayItems();


function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElmenent = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElmenent.value;
  if(todoItem === '' || todoDate === '') {
    alert('Fill the required Elements');
    return;
  } 
  todoList.push({item: todoItem, dueDate: todoDate});

  inputElement.value = '';
  dateElmenent.value = '';


  localStorage.setItem('todoList', JSON.stringify(todoList));


  displayItems();
}

function displayItems(){
  let containerELement = document.querySelector('.todo-container');

  let newHtml = '';

  for(let i = 0; i < todoList.length; i++){

    // let todoitem = todoList[i].item;
    // let dueDate = todoList[i].dueDate;

    let {item, dueDate} = todoList[i];

    if(item === '' || dueDate === '') continue;

    newHtml += `
     
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick = "deleteTodo(${i});"> Delete </button>
      
    `;
  }

  containerELement.innerHTML = newHtml;

}

function deleteTodo(index){

  // Remove item from list
  todoList.splice(index, 1);

  // save updated list to local storage
  localStorage.setItem('todoList', JSON.stringify(todoList));

  displayItems();

}