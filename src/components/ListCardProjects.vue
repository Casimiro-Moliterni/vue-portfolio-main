<script>
import { store } from "../store";
import SingleProject from "./SingleProject.vue";
import Front_End_json from "../json/Front_End_json.json";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
 // import required modules
 import { Mousewheel, Pagination } from 'swiper/modules';
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid } from "swiper/modules";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default {
  name: "ListCardProjects",
  components: {
    SingleProject,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      store,
      modules: [Grid, Pagination,Mousewheel],
    };
  },
  mounted() {
  },
};
</script>

<template>
  <div class="row">
    <swiper
      :grid="{
        rows: 2,
      }"
      :mousewheel="true"
      :spaceBetween="30"
      :slidesPerView="3"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(project, index) in store.ArraySelectedProjects"
        :key="index"
        :project="project"
      >
        <SingleProject :project="project" />
      </swiper-slide>
    </swiper>
  </div>
  <!-- Contenitore dei progetti -->
  <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
    <!-- Loop corretto attraverso myJson.FrontEndProjects -->
    <!-- <SingleProject
      v-for="(project, index) in store.ArraySelectedProjects"
      :key="index"
      :project="project"
    /> -->
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.row {
  // Stili personalizzati per la classe .row
  justify-content: center;
   height: 600px;
   .swiper {
     height: 600px;
     padding: 0 20px;
     overflow: hidden;
     }
}
</style>
