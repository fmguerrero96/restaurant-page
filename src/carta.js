let carta = document.createElement('div');

function renderCarta() {
    carta.className = 'carta';
    carta.innerHTML = `
     <nav>
        <ul>
            <li class="tab-home">Inicio</li>
            <li class="tab-menu">Carta</li>
            <li class="tab-contact">Contactanos</li>
        </ul>
     </nav>
     <main class="carta-main">
        <h1 class="carta-title">Engañoso</h1>
        <p class="carta-menu">Carta</p>
        <hr class="carta-hr">
        <div class="menu-container">
            <div class="menu-item">
                <h2 class="dish-name">Ceviche</h2>
                <p class="dish-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. 
                </p>
                <h2 class="dish-price">$19.75</h2>
                <hr class="dish-hr">
            </div>
            <div class="menu-item">
                <h2 class="dish-name">Tacos al Pastor</h2>
                <p class="dish-description">
                Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Adipiscing at in tellus 
                integer feugiat scelerisque varius morbi. Mollis nunc sed id semper.
                </p>
                <h2 class="dish-price">$23.00</h2>
                <hr class="dish-hr">
            </div>
            <div class="menu-item">
                <h2 class="dish-name">Mole</h2>
                <p class="dish-description">
                Consequat mauris nunc congue nisi. Eleifend mi in nulla posuere sollicitudin aliquam. 
                Eget nunc scelerisque viverra mauris in aliquam sem. Duis at consectetur lorem donec 
                massa sapien. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et.
                </p>
                <h2 class="dish-price">$26.50</h2>
                <hr class="dish-hr">
            </div>
            <div class="menu-item">
                <h2 class="dish-name">Pozole Rojo</h2>
                <p class="dish-description">
                At augue eget arcu dictum varius duis at consectetur lorem. Semper feugiat nibh sed 
                pulvinar proin. Massa sapien faucibus et molestie ac feugiat. Donec ultrices tincidunt 
                arcu non sodales neque.
                </p>
                <h2 class="dish-price">$19.50</h2>
                <hr class="dish-hr">
            </div>
        </div>
     </main>
     <footer>
         <p class="credit">Created by Misael Guerrero</p>
     </footer>
    ` 
 };

 renderCarta()

 export default carta;