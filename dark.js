let blocks = document.querySelectorAll('body *')
console.group('Dark theme blocks update')
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
    console.count(i)
}
console.groupEnd('Dark theme blocks update')


// nav drawer update
let nav = document.querySelector('#nav-drawer')
let navChildNodes = document.querySelectorAll('#nav-drawer > nav:first-child li')
let newNav = document.querySelector('nav:first-child')
let ulNode = newNav.querySelector('ul')
ulNode.innerHTML = ""

for (let node of navChildNodes) {
    ulNode.appendChild(node)
}

nav.innerHTML = ''
nav.appendChild(newNav)


// remove drawer toggle button
document.querySelector('nav:first-of-type > :first-child').remove()