<template>
  <div class="row">
    <swiper
      :grid="{
        rows: 2, // Valore predefinito, può essere sovrascritto dai breakpoint
      }"
      :mousewheel="true"
      :spaceBetween="30"
      :slidesPerView="3"
      :pagination="{
        clickable: true,
      }"
      :keyboard="{
        enabled: true,
      }"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        340: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: {
            rows: 1, // 1 riga sui dispositivi mobili
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 2, // 1 riga sui tablet
          },
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
          grid: {
            rows: 2, // 2 righe sui dispositivi di medie dimensioni
          },
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 10,
          grid: {
            rows: 2, // 2 righe sui dispositivi grandi
          },
        },
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
</template>

<script>
import { store } from "../store";
import SingleProject from "./SingleProject.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
// Import required modules
import {
  Mousewheel,
  Pagination,
  Grid,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import "swiper/css/grid";
import "swiper/css/pagination";

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
      modules: [Grid, Pagination, Mousewheel, Keyboard , Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  justify-content: center;
  height: 650px;
  /* border: 1px solid black; */
  @media screen and (max-width: 767px) {

    align-items: center;
  }
  .swiper {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box; /* Include padding e border nel calcolo altezza */
    @media screen and (max-width: 767px) {

    height: 400px;
  }
  
  }

  .swiper-slide {
    height: 100%; /* Imposta altezza fissa delle slide */
    padding: 0 15px;
    margin: 0;
    display: flex; /* Centra verticalmente */
    align-items: center;
    box-sizing: border-box;
    transition: none !important; /* Disabilita transizioni che causano scatti */
  }
}
</style>
