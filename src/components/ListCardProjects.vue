<script>
import { store } from '../store';
import SingleProject from './SingleProject.vue';

export default {
  name: "ListCardProjetcs",
  components: {
      store,
    SingleProject
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
        

      <!-- single component  -->
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">

        <SingleProject ></SingleProject>

      </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.row{

}

</style>
