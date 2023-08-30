const localStorageKey = 'to-do-list-ar'

function validateNewTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    let inputValue = document.querySelector('#input-new-task').value 
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

const newTask =  () => {
    let input = document.querySelector('#input-new-task') 
    input.style.border = ''

    //valudation

    if(!input.value) {
        input.style.border = '1px solid red'
        alert(' NENHUMA TAREFA ESTÁ SENDO ADICIONADA! Digite algo para prosseguir.')
    } else if(validateNewTask()) {
        alert('Tarefa já existente')
    } else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    let list = document.querySelector('#to-do-list')
    list.innerHTML = ''
    for(let i=0; i<values.length; i++) {

        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks" viewBox="0 0 16 16">
        <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
      </svg></button></li>`
    }
}

function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues()
}

showValues()