let count = 0
let btnClick = document.getElementById('btn-click')
let count_display = document.getElementById('count_display')

btnClick.addEventListener('click', (event) => {
    count++
    count_display.innerHTML = count
})

let items = [
    ['Cursor', 15, 0.1, 0, 0],
    ['Grandma', 100, 0.5, 0, 0],
    ['Farm', 500, 4, 0, 0],
    ['Factory', 3000, 10, 0, 0],
    ['Machine', 10000, 40, 0, 0],
    ['Shipment', 40000, 100, 0, 0],
    ['Alchemy Lab', 200000, 400, 0, 0],
    ['Portal', 1666666, 6666, 0, 0],
    ['Time Machine', 123456789, 98765, 0, 0],
]

let itemList = document.getElementById('item-list')

for(let i in items) {
    let item = document.createElement('li')
    let button = document.createElement('button')
    button.innerHTML = items[i][1]
    button.setAttribute('data-add', items[i][1])
    button.addEventListener('click', (event) => {
        let number = event.target.getAttribute('data-add')
        count += parseInt(number)
        count_display.innerHTML = count
    })
    item.appendChild(button)
    itemList.appendChild(item)
}

