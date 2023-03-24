let contact = document.createElement('div');

function renderContact(){
    contact.className = 'contact'
    contact.innerHTML = `
    <nav>
        <ul>
            <li class="tab-home">Inicio</li>
            <li class="tab-menu">Carta</li>
            <li class="tab-contact">Contactanos</li>
        </ul>
    </nav>
    <main class="contact-main">
        <h1 class="contact-title">Engañoso</h1>
        <p class="contact-us">Contactanos</p>
        <hr class="contact-hr">
        <div class="card-container">
            <div class="contact-card">
                <h3 class="card-title">Ubicacion</h3>
                <p class="adress">Unnamed Road</p>
                <p class="adress">The Bronx, NY 10474</p>
            </div>
            <div class="contact-card">
                <h3 class="card-title">Horario</h3>
                <p class="hours">Lun-Jue, 11am-9pm</p>
                <p class="hours">Vie-Dom, 11am-11pm</p>
            </div>
            <div class="contact-card">
                <h3 class="card-title">Contactanos</h3>
                <p class="phone">(123) 456-7890</p>
                <p class="email">EngañosoRestaurante@fakemail.com</p>
            </div>
        </div>
    </main>
    <footer>
         <p class="credit">Created by Misael Guerrero</p>
     </footer>
    `
}

renderContact();
export default contact;