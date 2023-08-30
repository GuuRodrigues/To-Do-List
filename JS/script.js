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

        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'>ok</button></li>`
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