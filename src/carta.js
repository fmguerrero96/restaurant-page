let carta = document.createElement('div');

function renderCarta() {
    carta.className = 'carta';
    carta.innerHTML = `
     <nav>
         <ul>
             <li>Home</li>
             <li>Menu</li>
             <li>Contact</li>
         </ul>
     </nav>
     <main>
        <h1>Engañoso</h1>
        <p>Carta</p>
        <hr>
        <div class="menu-item">
            <h2>Ceviche</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. 
            </p
            <h2>$19.75</h2>
            <hr>
        </div>
        <div class="menu-item">
            <h2>Tacos al Pastor</h2>
            <p>
            Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Adipiscing at in tellus 
            integer feugiat scelerisque varius morbi. Mollis nunc sed id semper.
            </p
            <h2>$23.00</h2>
            <hr>
        </div>
        <div class="menu-item">
            <h2>Mole</h2>
            <p>
            Consequat mauris nunc congue nisi. Eleifend mi in nulla posuere sollicitudin aliquam. 
            Eget nunc scelerisque viverra mauris in aliquam sem. Duis at consectetur lorem donec 
            massa sapien. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et.
            </p
            <h2>$26.50</h2>
            <hr>
        </div>
        <div class="menu-item">
            <h2>Pozole Rojo</h2>
            <p>
            At augue eget arcu dictum varius duis at consectetur lorem. Semper feugiat nibh sed 
            pulvinar proin. Massa sapien faucibus et molestie ac feugiat. Donec ultrices tincidunt 
            arcu non sodales neque.
            </p
            <h2>$19.50</h2>
            <hr>
        </div>
     </main>
     <footer>
         <p>Created by Misael Guerrero</p>
     </footer>
    ` 
 };

 renderCarta()

 export default carta;