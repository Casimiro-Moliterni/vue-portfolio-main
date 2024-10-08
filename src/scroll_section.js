export function toggle() {
 const bars = document.querySelector('.fa-solid.fa-bars');
 const ulLinkHeader = document.querySelector('header ul')

bars.onclick = () => {

  bars.classList.toggle('fa-x');
  ulLinkHeader.classList.toggle('activeUl');
 
}

}
