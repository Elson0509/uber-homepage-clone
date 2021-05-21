//references
const hamb = document.getElementById("hamb")
const hamburguer = document.getElementById("hamburguer")
const close = document.getElementById("close")
const companyMenuButton = document.getElementById("company-menu")

const windows = [
    'navi-toggle-products','company-subnav','language-toggle', 'navi-toggle'
]

const isOpenWindows = []

windows.forEach(el => {
    isOpenWindows[el] = false
})

const openMenu = id => {
    //if it is menu toggle and it is a X, close all.
    if(id==='navi-toggle' && (isOpenWindows['navi-toggle'] || isOpenWindows['navi-toggle-products'])){
        closeAllMenus()
        return
    }
    //iterating windows by windows to check which one was invoked
    windows.forEach(win => {
        const el = document.getElementById(win)
        if(id===win){
            //if that window has been invoked, show it
            el.style.display=isOpenWindows[id] ? 'none' : 'block'
            //set true to its window flag
            isOpenWindows[id] = !isOpenWindows[id]
            
        }
        else{
            //if that window has not been invoked, close it
            el.style.display='none'
            //set true to its window flag
            isOpenWindows[win] = false
            
        }
        //checking if changing the icon is needed
        if(isOpenWindows['company-subnav']){
            companyMenuButton.innerHTML = '<a href="#">Company &nbsp&nbsp<i class="fas fa-chevron-up arrow-company"></i></a>'
        }
        else{
            companyMenuButton.innerHTML = '<a href="#">Company &nbsp&nbsp<i class="fas fa-chevron-down arrow-company"></i></a>'
        }
        if(isOpenWindows['navi-toggle'] || isOpenWindows['navi-toggle-products']){
            hamburguer.innerHTML='<i class="fas fa-times"></i>'
        }
        else{
            hamburguer.innerHTML='<div class="hamb"></div>'
        }
    })
}

const closeAllMenus = _ => {
    windows.forEach(win => {
        const el = document.getElementById(win)
        el.style.display='none'
        isOpenWindows[win] = false
        companyMenuButton.innerHTML = '<a href="#">Company &nbsp&nbsp<i class="fas fa-chevron-down arrow-company"></i></a>'
        hamburguer.innerHTML='<div class="hamb"></div>'
    })
}