function addTodo(form) {
    event.preventDefault();
    let todos = document.getElementsByClassName("list-group todos mx-auto text-light")[0];
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    todos.appendChild(li);
    let span = document.createElement("span");
    let input = form.querySelector("input[name='add']");
    if (input.value.trim() === ""){return;}
    span.innerHTML = input.value;
    input.value="";
    let i = document.createElement("i");
    i.className = "far fa-trash-alt delete";
    i.onclick = function() {
      li.remove();
    }
    li.appendChild(span);
    li.appendChild(i);
}

function change(input){
  let todos = document.getElementsByClassName("list-group todos mx-auto text-light")[0];
    let children = todos.children;
    let searchText = input.value.toLowerCase();
    for (let i = 0; i < children.length; i++){
      let todo = children[i];
      let span = todo.querySelector("span");
      if (span.innerHTML.toLowerCase().includes(searchText)){
        todo.style.order = "-1";
        todo.style.visibility = "visible";
      }
      else {
        todo.style.order="1";
        todo.style.visibility = "hidden";
      }
    }
}