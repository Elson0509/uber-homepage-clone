//references
const navitoggle = document.getElementById("navi-toggle")
const hamb = document.getElementById("hamb")
const hamburguer = document.getElementById("hamburguer")
const close = document.getElementById("close")
const naviToggleProducts = document.getElementById("navi-toggle-products")
const companyMenuButton = document.getElementById("company-menu")
const companySubNav = document.getElementById("company-subnav")

let isMenuOpen = false
let isMenuProductsOpen = false
let isCompanyMenuOpen = false

const toggleMenu = _ => {
    isMenuOpen = !isMenuOpen
    if(isMenuOpen){
        navitoggle.style.display='block'
        hamburguer.innerHTML='<i class="fas fa-times"></i>'
    }
    else{
        isMenuProductsOpen = false
        navitoggle.style.display='none'
        naviToggleProducts.style.display='none'
        hamburguer.innerHTML='<div class="hamb"></div>'
    }
}

const productHandler = _ => {
    isMenuProductsOpen = !isMenuProductsOpen
    if(isMenuProductsOpen){
        naviToggleProducts.style.display='block'
    }
    else{
        naviToggleProducts.style.display='none'
    }
}

const companyMenuHandler = _ => {
    isCompanyMenuOpen = !isCompanyMenuOpen
    if(isCompanyMenuOpen){
        companyMenuButton.innerHTML = '<a href="#">Company &nbsp&nbsp<i class="fas fa-chevron-up arrow-company"></i></a>'
        companySubNav.style.display='block'
    }
    else{
        companyMenuButton.innerHTML = '<a href="#">Company &nbsp&nbsp<i class="fas fa-chevron-down arrow-company"></i></a>'
        companySubNav.style.display='none'
    }

}