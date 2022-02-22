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


// remove notification button
document.querySelector('#page-wrapper > nav > ul.nav.navbar-nav.ml-auto > li:nth-child(2)').remove()
document.querySelector('#page-wrapper > nav > ul.nav.navbar-nav.ml-auto > li.d-none.d-lg-block').remove()

// remove second name
let nodeText = document.querySelector('#action-menu-toggle-1 > span > span.usertext.mr-1')
nodeText.textContent = nodeText.textContent.slice(0, nodeText.textContent.indexOf(' '))
document.querySelector('.usertext').classList.remove('mr-1')
document.querySelector('.usertext').style.marginRight = '0.5rem'

// secret meme
let userNameLink = document.querySelector('#page-footer > div > div.logininfo > a:nth-child(1)')
userNameLink.removeAttribute('href')
userNameLink.addEventListener('click', () => fetch('https://meme-api.herokuapp.com/gimme').then(data => data.json()).then(json => { let elem = document.createElement('img'); elem.src = json.url; document.querySelector('footer').appendChild(elem) }))