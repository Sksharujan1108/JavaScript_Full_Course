// Document Object Model (DOM)

// ElementById Access
const view1 = document.getElementById('view1')
console.log(view1)
console.log('*********************************************');
// Not use ElementById  
const view2 = document.querySelector('#view2')
console.log(view2)
console.log('*****************************************');

view1.style.display = "flex"
view2.style.display = 'flex'
console.log('**************************************************');

const views = document.getElementsByClassName('view')
console.log(views)
console.log('***********************************************');

const sameViews = document.querySelectorAll('.view')
console.log(sameViews)
console.log('*********************************************');

const divs = view1.querySelectorAll('div')
console.log(divs)
console.log('*********************************************');

const samedivs = view1.getElementsByTagName('div')
console.log(samedivs)
console.log('**************************************************');

// Specifec Div Select
const evenDivs = view1.querySelectorAll('div:nth-of-type(2n)')
console.log(evenDivs)
console.log('************************************************');
evenDivs[4].style.backgroundColor = 'pink'

// All Divs Color change 
for(i=0; i< evenDivs.length; i++) {
    evenDivs[i].style.width = '150px'
    evenDivs[i].style.backgroundColor = 'blue'
}
console.log('**************************************************');

// Text Change
const navText = document.querySelector('nav h1')
console.log(navText) // <h1>My Page</h1>
navText.textContent = 'Hello_World' 
console.log('******************************************************');

const navBar = document.querySelector('nav')
navBar.innerHTML = '<h1> Sk Sharu </h1> <p> Hi!! </p>'
console.log(navBar)