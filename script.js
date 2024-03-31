var allTodos = []
var errorMsg = document.getElementById("errorMsg")
var newIndex = 0
// var show = document.getElementById("show")

if(localStorage.baby){
    allTodos = JSON.parse(localStorage.getItem('baby'))
}

function submitTodo() {
    if (todo.value === "" || todoDes.value === "") {
        errorMsg.style.display = 'block'
    } else {
        var todoContain = {
            oneInputs: document.getElementById ('todo').value,
            twoInputs: document.getElementById ('todoDes').value, 
            threeInputs: new Date().toLocaleDateString(),
            fourInputs: new Date().toLocaleTimeString()
        }
        errorMsg.style.display = 'none'

        allTodos.push(todoContain)
        localStorage.setItem('baby', JSON.stringify(allTodos))
        // var second ={}
        // showTodos()
        document.getElementById('todo').value = ''
        document.getElementById('todoDes').value = ''
        window.location.href = "pagetwo.html"
    }
}

// function showTodos() {
//     newTodo.value = todo.value
//     newTodoTwo.value = todoDes.value
//     show.innerHTML = ""
//     allTodos.map((todoContain, index) => {
//         show.innerHTML += `
//                 <div class="card text-bg-dark mb-3 w-100" style="width: 270px;">

//                 <div class="card-body">
//                     <h5 class="card-title fs-4"><p>${index + 1}. ${todoContain.oneInputs}</p></h5>
//                 </div>
//                 <hr>
//                 <div class="card-body">
//                     <h6 class="card-title fs-4"><p>${todoContain.twoInputs}</p></h6>
//                 </div>
//                 <hr>
//                 <div class="card-body firstbtn">
//                 <button class="btn btn-sm my-3 mx-auto btn-warning fs-6 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit(${index})">Edit</button>
//                 <button class="btn btn-sm my-3 mx-auto btn-danger fs-6 fw-bold" onclick="deleteTodo(${index})">Delete</button>
//                 </div>
//                 </div>
//                 `
//     })
// }

// function deleteTodo(i) {
//     var confirmation = confirm("Are you sure you want to delete?")
//     if (confirmation == true) {
//         allTodos.splice(i, 1)
//         showTodos()
//     }
// }

// function edit(i) {
//     newIndex = i
// }

// function editItem() {
//     if (newTodo.value == "") {
//         alert("No way")
//     } else {
//         var newValue = {
//             oneInputs: document.getElementById ('newTodo').value,
//             twoInputs: document.getElementById ('newTodoTwo').value 
//         }
//         // var newValue = document.getElementById('newTodo').value
//         allTodos.splice(newIndex, 1, newValue)
//         showTodos()
//     }
// }