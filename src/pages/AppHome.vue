<script>
import AboutMe from "../components/AboutMe.vue";
import Contact from "../components/Contact.vue";
import HomePage from "../components/homePage.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";


export default {
  name: "AppHome",
  components: {
    HomePage,
    AboutMe,
    Skills,
    Projects,
    Contact
  },
  data() {
    return {
       headerColor: 'transparent' // Colore di default
    };
  }
};
</script>
<template>

  <main>
    <HomePage ></HomePage>
    <AboutMe></AboutMe>
    <Skills ></Skills>
    <Projects ></Projects>
    <Contact></Contact>
  </main>
</template>

<style scoped lang="scss">
 
</style>
