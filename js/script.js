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

    hamburguer.innerHTML = isOpenWindows['navi-toggle'] || isOpenWindows['navi-toggle-products'] || isOpenWindows['language-toggle'] ?
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

    checkScrolling()
}

const closeCovidMonitor = _ => {
    covidMonitor.style.display='none'
}

const signupOptionHandler = opt => {
    signupHr.style.marginLeft = `${10+opt*34}%`
    const signInfo = document.getElementById('sign-info')
    const imgSignup = document.getElementById('img-signup')
    const signUp = document.getElementById('signup')
    switch(opt){
        case 0:
            signInfo.innerHTML = `
            <h2>Get in the driver's seat and get paid</h2>
            <p>Drive on the platform with the largest network of active riders</p>
            <button class="btn-dark">Sign up to drive</button>
            <a class="link-underline-inline" href="#">Learn more about driving and delivering</a>`
            signUp.style.backgroundImage = "url('../imgs/earner_home.jpg')"
            imgSignup.src = '../imgs/earner_home.jpg'
            break
        case 1:
            signInfo.innerHTML = `
            <h2>Discover delicious eats</h2>
            <p>Order delivery from restaurants you love.</p>
            <button class="btn-dark">Order now</button>
            <a class="link-underline-inline" href="#">Own a restaurant? Partner with Uber Eats</a>`
            signUp.style.backgroundImage = "url('../imgs/eats_home_bg.jpg')"
            imgSignup.src = '../imgs/eats_home.jpg'
            break
        case 2:
            signInfo.innerHTML = `
            <h2>Request a ride now</h2>
            <div class="ride-input">
                <span class="vertical-line"></span>
                <span class="far fa-circle input-icon-left"></span>
                <span class="fas fa-location-arrow"></span>
                <input type="text" placeholder="Enter pickup location">
                
            </div>
            <div class="ride-input">
                <span class="far fa-square input-icon-left"></span>
                <input type="text" placeholder="Enter destination">
            </div>
            
            <button class="btn-dark">Request now</button>
            <button class="btn-dark btn-light">Schedule for later</button>`
            signUp.style.backgroundImage = "url('../imgs/rider_home.jpg')"
            imgSignup.src = '../imgs/rider_home.jpg'
            break
        
    }
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
    if(isOpenWindows['navi-toggle'] || isOpenWindows['navi-toggle-products'] || isOpenWindows['language-toggle']){
        disableScrolling()
    }
    else{
        enableScrolling()
    }
}