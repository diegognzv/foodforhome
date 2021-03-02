let shoppingCartView = document.querySelector('#menu-second-view');
let menuMainView = document.querySelector('#menu-first-view');

function loadButtons(){
    let openCart = document.getElementById('openCart');
    let goBack = document.getElementById('goBack'); 
    openCart.addEventListener('click', openShoppingCart);
    goBack.addEventListener('click', closeShoppingCart);
}

function openShoppingCart(){
    shoppingCartView.classList.add('visible');
    menuMainView.classList.add('invisible');
}

function closeShoppingCart(){
    shoppingCartView.classList.add('invisible');
    menuMainView.classList.add('visible');
}

loadButtons();