function doUpdate() {
    let event = new Event('click')
    let elem = document.querySelector('#Pagination > ul > li.page-item.reload > a')
    elem.dispatchEvent(event)
}

document.getElementById('submit_button')?.addEventListener('click', () => {
    let intervalId
    let isFirst = true

    function update() {
        let waitingSelects = document.querySelectorAll('option[value="377"][selected="selected"]')
        let allSelects = document.querySelectorAll('option[value="377"]')
        let spinner = document.querySelector('#Searchresult > div.spinner-border')
        console.log(waitingSelects, allSelects, spinner)
        if (isFirst) {
            doUpdate()
            isFirst = false
        } else if (!spinner && waitingSelects.length == 0 && allSelects.length > 0) {
            clearInterval(intervalId)
        } else {
            doUpdate()
        }
    }

    intervalId = setInterval(update, 50)
})