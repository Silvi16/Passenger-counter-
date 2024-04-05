let totalCount = document.getElementById('count-el')
let saveCount = document.getElementById('save-el')



let count = 0

function increment() {
    count += 1
    totalCount.textContent = count
}

/*
function save() {
    saveCount.innerText = 'Total count: ' + count
}
*/

function save() {
    let lastCount = ' ' + count + ' - '
    saveCount.textContent += lastCount
    count = 0
    totalCount.textContent = count
}
    
