let shoppingCartView = document.querySelector('#menu-second-view');
let menuMainView = document.querySelector('#menu-first-view');

function loadButtons(){
    let btnEnviar = document.getElementById('#enviar'); 
    btnEnviar.addEventListener('click', openShoppingCart());
}


function openShoppingCart(){
    shoppingCartView.classList.add('visible');
    menuMainView.classList.add('invisible');
}

loadButtons();