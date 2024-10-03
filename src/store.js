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

  FrontEndProjects: [
    {
      name: "",
      slug: "",
      poster: "",
      technologies: [
        {
          name: "",
          path: "",
        },
      ],
      albums: [
        {
          name:'',
          path:'',
          description:''
        }
      ],
    },
  ],
  BackEndProjects: {},
  FrontEndProjects: {},
});
