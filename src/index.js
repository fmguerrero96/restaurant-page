import home from "./home";
import carta from "./carta";
import contact from "./contact";
import './style.css' 

let content = document.querySelector('#content')
content.appendChild(home)

const tabs = (() =>{
    function displayCarta(){
        document.addEventListener('click', e =>{
            if (e.target.matches('.menu-btn')){
                content.innerHTML = ''
                content.appendChild(carta)
            } else if (e.target.matches ('.tab-menu')){
                content.innerHTML = ''
                content.appendChild(carta)
            }
        })
    }
    
    function displayHome(){
        document.addEventListener('click', e =>{
            if (e.target.matches('.tab-home')){
                content.innerHTML = ''
                content.appendChild(home)
            }
        })
    }
    
    function displayContact(){
        document.addEventListener('click', e =>{
            if (e.target.matches('.tab-contact')){
                content.innerHTML = ''
                content.appendChild(contact)
            }
        })
    }

    return { displayHome, displayCarta, displayContact }
})();

tabs.displayHome();
tabs.displayCarta();
tabs.displayContact();