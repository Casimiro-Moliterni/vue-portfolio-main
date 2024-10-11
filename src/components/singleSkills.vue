
<script>
import { store } from "../store";
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "AllSkillsCarousel",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      store, // Importa lo store all'interno del componente
      currentSlide: 0, // Indice della slide corrente
      breakpoints: {
        300: {
          itemsToShow: 2.2,
          autoplay:2000,
          pauseAutoplayOnHover: true,
        },
        1425: {
          itemsToShow: 4.5,
          autoplay:2000,
          pauseAutoplayOnHover: true,
        },
        // 1024 and up
      }
    };
  },
  methods: {
    slideTo(val) {
      // Imposta l'indice corrente della slide
      this.currentSlide = val;
    },
    getImageUrl(name) {
      const url = new URL(`../assets/img/${name}`, import.meta.url).href;

      return url;
    },
  },
});
</script>

<template>
  <div class="container-single-skill">
    <!-- Carosello principale che mostra le informazioni delle abilità -->
    <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="true"
      v-model="currentSlide"
    >
      <Slide v-for="(slide, index) in store.allSkills()" :key="index">
        <div class="carousel__item">
          <h3>{{ slide.name }}</h3>
          <img :src="getImageUrl(`skills/${slide.path}`)" alt="" />
        </div>
      </Slide>
    </Carousel>

    <!-- Carosello secondario per le miniature -->
    <Carousel
    :breakpoints="breakpoints"
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <!-- Mostra le miniature delle abilità. L'attributo key deve essere unico -->
      <Slide v-for="(slide, index) in store.allSkills()" :key="index" >
        <div class="carousel__item_bottom" @click="slideTo(index)"  :class="{ active : currentSlide === index }">
          <img :src="getImageUrl(`skills/${slide.path}`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>


<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.container-single-skill{
width: 100%;
margin: 0 auto;
@media (min-width: 1400px) {
  width: 70rem;
 margin: 0 auto;

}

}
.carousel__item {
  padding: 20px;
  width: 100%;
  margin: 0 0 55px 0;
  background: #0e2c43;
  border-radius: 8px;
  border: 4px solid $secondary_color;
  overflow: hidden;
  @media screen and (max-width:540px) {
  margin-top: 50px;

  }
  img {
    height: 150px;
    width: 150px;
    object-fit: contain;
    transition: transform 0.5s; /* Aggiungi transition solo qui se vuoi effetti sull'immagine interna */
  }
}
.carousel__item_bottom {

  border: 4px solid #0e2c43;
  overflow: hidden;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.178);
  margin: 5px;
  margin-bottom: 0;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s, height 0.5s; /* Add transition for background color and height */
  &.active {
    background-color: lightblue; /* Colore di sfondo per la slide attiva */
    height: 200px; /* Imposta l'altezza desiderata */
    @media screen and (max-width:540px) {
    height: 120px;
  }
    &:hover img {
    transform: scale(1.8);
  }
}
  &:hover{
  background-color: #00acf06c;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
  }
  &:hover img {
    transform: scale(1.08);
  }
  img {
    animation: 2s;
    height: 100px;
    width: 100px;
    object-fit: contain;
    transition: transform 0.5s;
    @media screen and (max-width:700px) {
        height: 60px;
        width: 60px;
    }
    @media screen and (max-width:540px) {
   
    }
  }
}

</style>
