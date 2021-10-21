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