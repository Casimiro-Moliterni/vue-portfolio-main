<script>
import { store } from "../store";
import Front_End_json from "../json/Front_End_json.json";
import Back_End_json from "../json/Back_End_json.json";
import Design_json from "../json/Design_json.json";

export default {
  name: "ProjectDetails",

  components: {},
  data() {
    return {
      store,
      project:null
    };
  },
  methods: {
    checkForProject() {
    const slug = this.$route.params.slug;
    const allProjects = [
      ...store.FrontEndArrayProjects.FrontEndProjects,
      ...store.BackEndArrayProjects.BackEndProjects,
      ...Design_json.DesignProjects
    ];

    this.project = allProjects.find((project) => project.slug === slug);
    if (!this.project) {
      console.error(`Progetto con slug "${slug}" non trovato.`);
    }
  }
  },
  mounted() {
      store.FrontEndArrayProjects = Front_End_json;
      store.BackEndArrayProjects = Back_End_json;
      store.DesignArrayProjects = Design_json;
      this.checkForProject()
      console.log(this.project)
  },
};
</script>

<template>
  <section id="ProjectDetails" v-if="project">
    <div class="my-container">
      <h2 class="text-center text-white">{{ this.project.name }}</h2>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

#ProjectDetails {
  height: 100vh;
  background-color: #0e2c43;
}
</style>
