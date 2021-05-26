//references
const hamburguer = document.getElementById("hamburguer")
const companyMenuButton = document.getElementById("company-menu")
const covidMonitor = document.getElementById("covid-monitor")
const signupHr = document.getElementById("signup-hr")

const windows = [
    'navi-toggle-products',
    'company-subnav',
    'language-toggle',
    'navi-toggle',
    'navi-toggle-products-menu'
]

const isOpenWindows = []

windows.forEach(el => {
    isOpenWindows[el] = false
})

const openMenu = id => {
    //if it is menu toggle and it is a X, close all.
    if(id==='navi-toggle' && (isOpenWindows['navi-toggle'] || isOpenWindows['navi-toggle-products'])){
        closeAllMenus()
        checkScrolling()
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
    })
    checkIcons()
    checkScrolling()
}

const checkIcons = _ => {
    //checking if changing the icon is needed
    companyMenuButton.innerHTML = isOpenWindows['company-subnav'] ?
    '<a href="#">Company &nbsp&nbsp<i class="fas fa-chevron-up arrow-company"></i></a>'
    :
    '<a href="#">Company &nbsp&nbsp<i class="fas fa-chevron-down arrow-company"></i></a>'

    hamburguer.innerHTML = isOpenWindows['navi-toggle'] || isOpenWindows['navi-toggle-products'] ?
    '<i class="fas fa-times"></i>'
    :
    '<div class="hamb"></div>'
}

const closeAllMenus = _ => {
    //close each menu window
    windows.forEach(win => {
        const el = document.getElementById(win)
        el.style.display='none'
        isOpenWindows[win] = false
        companyMenuButton.innerHTML = '<a href="#">Company &nbsp&nbsp<i class="fas fa-chevron-down arrow-company"></i></a>'
        hamburguer.innerHTML='<div class="hamb"></div>'
    })
}

const closeCovidMonitor = _ => {
    covidMonitor.style.display='none'
}

const signupOptionHandler = opt => {
    signupHr.style.marginLeft = `${10+opt*34}%`
}

const disableScrolling = _ =>{
    const body = document.getElementsByTagName("body")[0]
    body.classList.add("stop-scrolling")
}

const enableScrolling = _ =>{
    const body = document.getElementsByTagName("body")[0]
    body.classList.remove("stop-scrolling")
}

const checkScrolling = _ =>{
    if(isOpenWindows['navi-toggle'] || isOpenWindows['navi-toggle-products']){
        disableScrolling()
    }
    else{
        enableScrolling()
    }
}