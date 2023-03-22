let home = document.createElement('div');

function renderHome() {
   home.className = 'home';
   home.innerHTML = `
    <nav>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
    <main>
        <h1>Engañoso</h1>
        <p>Restaurante</p>
        <hr>
        <p>Nuestra pagina web es falsa, al igual que nuestros productos</p>
        <button>Carta</button>
    </main>
    <footer>
        <p>Created by Misael Guerrero</p>
    </footer>
   ` 
};
renderHome()

export default home