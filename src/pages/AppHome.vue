<script>
import AboutMe from "../components/AboutMe.vue";
import Contact from "../components/Contact.vue";
import HomePage from "../components/homePage.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Headers from "../components/Headers.vue";
import Footer from "../components/footer.vue";


export default {
  name: "AppHome",
  components: {
    HomePage,
    AboutMe,
    Skills,
    Projects,
    Contact,
    Headers,
    Footer
  },
  data() {
    return {
       headerColor: 'transparent' // Colore di default
    };
  }
};
</script>
<template>
 <Headers ></Headers>
  <main>
    <HomePage ></HomePage>
    <AboutMe></AboutMe>
    <Skills ></Skills>
    <Projects ></Projects>
    <Contact></Contact>
  </main>
  <Footer></Footer>
</template>

<style scoped lang="scss">
 
</style>
