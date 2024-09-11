let todoList = [{item:'buy milk', dueDate: '4/10/2023'}, {item:'go to college', dueDate: '4/10/2023'}];
displayItems();


function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElmenent = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElmenent.value;
  if(todoItem === '' || todoDate === '') {
    alert('Fill the required Elements');
  } 
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElmenent.value = '';
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
      <button class="btn-delete" onclick = "todoList.splice(${i}, 1);
      displayItems(); "> Delete </button>
      
    `;
  }

  containerELement.innerHTML = newHtml;

}