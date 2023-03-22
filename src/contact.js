let contact = document.createElement('div');

function renderContact(){
    contact.className = 'contact'
    contact.innerHTML = `
    <nav>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
    <h1>Engañoso</h1>
    <p>Contact Us</p>
    <hr>
    <div class="contact-card">
        <h3>Location</h3>
        <p>Unnamed Road</p>
        <p>The Bronx, NY 10474</p>
    </div>
    <div class="contact-card">
        <h3>Hours</h3>
        <p>Mon-Thu, 11am-9pm</p>
        <p>Fri-Sun, 11am-11pm</p>
    </div>
    <div class="contact-card">
        <h3>Contact Us</h3>
        <p>(123) 456-7890</p>
        <p>EngañosoRestaurante@fakemail.com</p>
    </div>
    `
}

renderContact();
export default contact;