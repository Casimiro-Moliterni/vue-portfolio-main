// store.js
import { reactive } from "vue";

export const store = reactive({
  // codice da scrivere ....
  // Definisci `allSkills` come una computed property reattiva
  get allSkills() {
    return Object.values(this.skills).flat();
  },
  skills: {
    FrontEndSkill: [
      { name: "HTML", range: "90%", path: "html.png" },
      { name: "CSS", range: "80%", path: "css.png" },
      { name: "Javascript", range: "80%", path: "javascript.png" },
      { name: "VUE JS", range: "70%", path: "vue.png" },
      { name: "BOOTSTRAP", range: "90%", path: "bootstrap.png" },
      { name: "SASS", range: "70%", path: "sass.png" },
      { name: "REACT", range: "40%", path: "react.png" },
      { name: "TAILWIND", range: "40%", path: "tailwind.png" },
    ],
    BackEndSkill: [
      { name: "PHP", range: "60%", path: "php.png" },
      { name: "LARAVEL", range: "80%", path: "laravel.png" },
      { name: "MYSQL", range: "70%", path: "mysql.png" },
      { name: "NPM", range: "70%", path: "npm.png" },
    ],
    ProfessionalSkill: [
      { name: "Web Development", range: "75%", path: "develop.png" },
      { name: "Problem Solving", range: "70%", path: "problemsolving.png" },
      { name: "Responsive Web App", range: "80%", path: "responsive.png" },
      { name: "Team Work", range: "80%", path: "teamwork.png" },
    ],
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Casimiro-Moliterni",
      class: "fa-brands fa-github",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/casimiro-moliterni-9a7322281/",
      class: "fa-brands fa-linkedin",
    },
    {
      name: "Instagram",
      url: "#",
      class: "fa-brands fa-instagram",
    },
    {
      name: "phone",
      url: "tel:3487037309",
      class: "fa-solid fa-phone",
    },
    {
      name: "mail",
      url: "mailto:moliternicasimiro@hotmail.it",
      class: "fa-regular fa-envelope",
    },
  ],
  FrontEndArrayProjects: [],
  BackEndArrayProjects: [],
  DesignArrayProjects: [],
  ArraySelectedProjects:[],

 listProjectLink:[
   {
     name:'All',
     type:'all'
   },
  {
    name:'Front-End',
    type:'frontend'
  },
  {
    name:'Back-End',
    type:'backend'
  },
  {
    name:'Design',
    type:'design'
  },

],



  // funzioni ////////////////////////////////

  ActiveLInk() {
    const links = document.querySelectorAll("nav .header-link");
    const btn = document.querySelector(".my-name");
   links.forEach((e,index) => {
      btn.addEventListener("click", function () {
        if (e.getAttribute('href') === "#AboutMe") {
          e.classList.add("active"); // Aggiungi la classe .active solo all'elemento con id="AboutMe"
        } else {
          e.classList.remove("active"); // Rimuovi la classe .active dagli altri elementi se necessario
        }
      });

    // Aggiungi un event listener per ogni link
links.forEach((link) => {
  link.addEventListener('click', function() {
    // Rimuovi la classe .active da tutti i link
    links.forEach((l) => {
      l.classList.remove('active');
    });

    // Aggiungi la classe .active al link cliccato
    link.classList.add('active');
  });
});
    });
    // AboutSection.classList.toggle('active');
  },
  

});
