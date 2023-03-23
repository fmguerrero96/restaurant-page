let home = document.createElement('div');

function renderHome() {
   home.className = 'home';
   home.innerHTML = `
    <nav>
        <ul>
            <li class="tab home">Home</li>
            <li class="tab menu">Carta</li>
            <li class="tab contact">Contact</li>
        </ul>
    </nav>
    <main>
        <h1 class="home-title">Engañoso</h1>
        <p class="home-rest">Restaurante</p>
        <hr class="home-hr">
        <p class="lema">Nuestra pagina web es falsa, al igual que nuestros productos</p>
        <button class="menu-btn">Carta</button>
    </main>
    <footer>
        <p class="credit">Created by Misael Guerrero</p>
    </footer>
   ` 
};
renderHome()

export default home