const button = document.getElementById("myhamburgeur-buttons");
const nav = document.getElementById("mynav");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});