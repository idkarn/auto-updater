document.getElementById('submit_button')?.addEventListener('click', () => {
    let intervalId

    function update() {
        let waitingSelects = document.querySelectorAll('option[value="377"][selected="selected"]')
        let allSelects = document.querySelectorAll('option[value="377"]')
        if (waitingSelects.length > 0 && allSelects.length > 0) {
            let event = new Event('click')
            let elem = document.querySelector('#Pagination > ul > li.page-item.reload > a')
            elem.dispatchEvent(event)
        } else {
            clearInterval(intervalId)
        }
    }

    intervalId = setInterval(update, 50)
})

let blocks = document.querySelectorAll('body *')
for (let i = 0; i < blocks.length; i++) {
    let item = blocks[i]
    if (window.getComputedStyle(item).background.includes('important')) {
        blocks[i].style.background = 'var(--dark)'
    }
    if (window.getComputedStyle(item).color.includes('important')) {
        blocks[i].style.color = 'var(--light)'
    }
    if (window.getComputedStyle(item).border.includes('important')) {
        blocks[i].style.border = 'var(--light)'
    }
    blocks[i].classList.remove('bg-light', 'bg-dark', 'bg-gray', 'bg-white', 'navbar-light', 'btn-light')
    console.log(i)
}