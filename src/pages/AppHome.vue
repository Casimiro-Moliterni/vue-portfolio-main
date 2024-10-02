<script>
import AboutMe from "../components/AboutMe.vue";
import Headers from "../components/Headers.vue";
import HomePage from "../components/homePage.vue";

export default {
  name: "AppHome",
  components: {
    Headers,
    HomePage,
    AboutMe
  },
  data() {
  }
};
</script>
<template>
  <Headers></Headers>
  <main>
    <HomePage></HomePage>
    <AboutMe></AboutMe>
  </main>
</template>

<style scoped lang="scss">
 
</style>
