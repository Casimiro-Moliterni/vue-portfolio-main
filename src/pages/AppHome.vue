<script>
import AboutMe from "../components/AboutMe.vue";
import HomePage from "../components/homePage.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";


export default {
  name: "AppHome",
  components: {
    HomePage,
    AboutMe,
    Skills,
    Projects
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
  </main>
</template>

<style scoped lang="scss">
 
</style>
