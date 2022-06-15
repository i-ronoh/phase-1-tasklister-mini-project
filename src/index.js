document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit' ,(e) => {
    e.preventDefault()
    newTask(e.target.new_task_description.value)
    form.reset()
  })
  
});

function newTask(task) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click' , deleteTask)
  btn.textContent = 'Remove Item'
  li.textContent = `${task} `
  li.appendChild(btn)
  document.getElementById("tasks").appendChild(li)
}

function deleteTask(e){
  e.target.parentNode.remove()
}

