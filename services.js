const cookies = ((cookie) => {
    return cookie;
})

const Spock = document.querySelector('.Spock')
const navLinks = document.querySelector('.navLinks')
const links = document.querySelectorAll('.navLinks li')

Spock.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
})