// store.js
import { reactive } from "vue";

export const store = reactive({
  // codice da scrivere ....
  // Definisci `allSkills` come una computed property reattiva

  apiUrl: 'http://127.0.0.1:8000',
  
  myGenerality:[
    {
      name:'Casimiro Moliterni',
      class:'fa-solid fa-user',
      label:'FULL NAME'
    },
    {
      name:'Pontecagnano Faiano , SA 84098',
      class:'fa-solid fa-location-dot',
      label:'ADDRESS'
    },
    {
      name:'348 703 7309',
      class:'fa-solid fa-phone',
      label:'TELEFONO'
    },
    {
      name:'moliternicasimiro@hotmail.it',
      class:'fa-solid fa-envelope',
      label:'MAIL'
    },

  ],

    allSkills() {
    return this.AllSkillArray= [...this.SkillArray , ...this.ProfessionalSkill];
  },
    SkillArray: [
      { name: "HTML", range: "90%", path: "html.png" },
      { name: "CSS", range: "80%", path: "css.png" },
      { name: "Javascript", range: "80%", path: "javascript.png" },
      { name: "VUE JS", range: "70%", path: "vue.png" },
      { name: "BOOTSTRAP", range: "90%", path: "bootstrap.png" },
      { name: "SASS", range: "70%", path: "sass.png" },
      { name: "REACT", range: "40%", path: "react.png" },
      { name: "TAILWIND", range: "40%", path: "tailwind.png" },
      { name: "PHP", range: "60%", path: "php.png" },
      { name: "LARAVEL", range: "80%", path: "laravel.png" },
      { name: "MYSQL", range: "70%", path: "mysql.png" },
      { name: "NPM", range: "70%", path: "npm.png" },
      { name: "Web Development", range: "75%", path: "develop.png" },
      { name: "Problem Solving", range: "70%", path: "problemsolving.png" },
      { name: "Responsive Web App", range: "80%", path: "responsive.png" },
      { name: "Team Work", range: "80%", path: "teamwork.png" },
    ],

    ProfessionalSkill: [
    ],
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


linksNavbar: [
  {
    name: "Casimiro.",
    label: "home",
    href:'#AppHome'
  },
  {
    name: "Home",
    label: "home",
     href:'#AppHome'
  },
  {
    name: "About",
    label: "about",
    href:'#AboutMe'
  },
  {
    name: "Skills",
    label: "skills",
     href:'#Skills'
  },
  {
    name: "Projects",
    label: "projects",
     href:'#Projects'
  },
  {
    name: "Contact",
    label: "contact",
     href:'#Contact'
  }
],
  // funzioni ////////////////////////////////

});
