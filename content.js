function update() {
    let nodes = document.querySelectorAll('option[value="377"][selected="selected"]')
    if (nodes.length > 0) {
        let event = new Event('click')
        let elem = document.querySelector('#Pagination > ul > li.page-item.reload > a')
        elem.dispatchEvent(event)
    }
}

setInterval(update, 50)