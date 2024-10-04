<script>
import { store } from '../store'; 
import SingleProject from './SingleProject.vue';
import Front_End_json from '../json/Front_End_json.json'; 

export default {
  name: "ListCardProjects",
  components: {
    SingleProject
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    // Controlla la struttura del JSON
    store.FrontEndArrayProjects = Front_End_json 
  },
};
</script>

<template>
  <!-- Contenitore dei progetti -->
  <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
    <!-- Loop corretto attraverso myJson.FrontEndProjects -->
    <SingleProject 
      v-for="(project, index) in store.FrontEndArrayProjects.FrontEndProjects" 
      :key="index" 
      :project="project"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.row {
  // Stili personalizzati per la classe .row
}
</style>
