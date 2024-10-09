export function toggle() {
  const bars = document.querySelector('.fa-solid.fa-bars');
  const ulLinkHeader = document.querySelector('header ul');

  if (bars && ulLinkHeader) { // Controllo per evitare errori
    bars.onclick = () => {
      bars.classList.toggle('fa-x'); // Aggiunge o rimuove la classe 'fa-x' al pulsante
      ulLinkHeader.classList.toggle('activeUl'); // Aggiunge o rimuove la classe 'activeUl' alla lista
    }
  }
}
