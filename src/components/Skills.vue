<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { store } from "../store.js";
import SingleSkills from "./singleSkills.vue";

export default {
  name: "Skills",
  textBtn: "",
  components: {
    Carousel,
    Slide,
    Pagination,
    SingleSkills,
  },
  data() {
    return {
      store,
      active: false,
      breakpoints: {
        // 700px and up
        500: {
          itemsToShow: 1,
        },
        800: {
          itemsToShow: 1.6,
          autoplay: 4000,
          pauseAutoplayOnHover: true,
        },
        // 1024 and up
        1024: {
          itemsToShow: 2.5,
          autoplay: 4000,
          pauseAutoplayOnHover: true,
        },
        // 1024 and up
        1425: {
          itemsToShow: 3,
          // autoplay:4000,
          // pauseAutoplayOnHover: true,
        },
      },
    };
  },
  methods: {
    formatCategoryName(categoryName) {
      // Formatta il nome della categoria in modo leggibile
      return categoryName.replace(/([A-Z])/g, " $1").trim();
    },

    GenerateFullSkill() {
      this.active = !this.active;
      this.textBtn = "FULL SKILLS";
      if (!this.active) {
        this.textBtn = "SECTION SKILLS";
      }
    },

    addDynamicStyles() {
      const styles = document.createElement("style");
      const skills = this.store.skills;

      for (const category in skills) {
        skills[category].forEach((skill) => {
          const keyframes = this.createKeyframes(skill.range);
          styles.innerHTML += keyframes; // Aggiungi keyframes dinamici
        });
      }

      document.head.appendChild(styles); // Aggiungi gli stili al documento
    },

    createKeyframes(range) {
      const percentage = parseInt(range);
      return `
        @keyframes progress-${percentage} {
          0% { width: 0; }
          100% { width: ${percentage}%; }
            0% { width: 0; } 
        }
      `;
    },
  },
  mounted() {
    this.GenerateFullSkill();
    this.addDynamicStyles();
  },
};
</script>

<template>
  <section id="Skills" class="position-relative">
    <div class="container">
      <h1>My <span>Skills</span></h1>
      <Carousel
        :wrapAround="true"
        :transition="500"
        :breakpoints="breakpoints"
        v-if="active"
      >
        <Slide
          v-for="(skillsArray, categoryName) in store.skills"
          :key="categoryName"
        >
          <div
            class="carousel__item"
            :class="{
              item_FrontEndSkill: categoryName === 'FrontEndSkill',
              item_BackEndSkill: categoryName === 'BackEndSkill',
              item_ProfessionalSkill: categoryName === 'ProfessionalSkill',
            }"
          >
            <h3 class="title">{{ formatCategoryName(categoryName) }}</h3>
            <div class="skill-box skill-content">
              <div
                v-for="(singleSkill, skillIndex) in skillsArray"
                :key="skillIndex"
              >
                <div class="skill-progress w-100">
                  <h3>
                    {{ singleSkill.name }} <span>{{ singleSkill.range }}</span>
                  </h3>
                  <div class="bar">
                    <span  :style="{ 
      width: singleSkill.range,
      animation: `progress-${parseInt(singleSkill.range)} 3s ease-in-out infinite`
    }"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
      <div v-if="!active">
        <SingleSkills></SingleSkills>
      </div>
    </div>
    <div class="text-center mt-5 position-absolute btn-box">
      <button @click="GenerateFullSkill()">{{ textBtn }}</button>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

#Skills {
  height: 100vh;
  background-color: $primary_color;
  color: white;
  padding-top: 60px;
  @media screen and (max-width: 700) {
    height: 100vh;
    max-height: 120vh;
  }
  .container {
    padding: 20px 30px;
    height: 100%;
    h1 {
      text-align: center;
      font-size: 56px;
      font-weight: 900;
      margin-bottom: 70px;
      span {
        color: $secondary_color;
      }
    }

    .title {
      font-size: 2rem;
      margin: 0 0 1.5rem;
    }

    .skill-box {
      position: relative;
      border: 0.2rem solid $secondary_color;
      border-radius: 0.6rem;
      padding: 0.5rem 1rem;
      height: 400px;
      z-index: 3;
      overflow: hidden; /* Nascondi l'overflow per evitare la visualizzazione del contenuto che esce dal contenitore */
      &::before {
        @include button-primary-hover;
        background-color: #0e2c43;
      }
      &:hover::before {
        width: 100%;
      }
      &:hover {
        color: white;
      }

      &:hover .skill-progress {
        animation: scroll 8s linear infinite; /* Attiva l'animazione */
      }
      @media screen and (max-width: 1024px) {
        width: 97%;
        margin: 0 auto;
      }
    }
  }
  .skill-progress {
    padding: 1rem 0;
    animation: mymove 2s infinite;
    animation: paused;
    /* Quando il mouse passa sopra il contenitore delle skill */
    &.item_ProfessionalSkill .skill-progress {
      animation: paused;
      @keyframes scroll {
        0% {
          transform: translateY(0); /* Inizio nella posizione originale */
        }
        100% {
          transform: translateY(-150%); /* Sposta il contenuto verso l'alto */
        }
      }
    }

    .item_BackEndSkill {
      @keyframes scroll {
        0% {
          transform: translateY(0); /* Inizio nella posizione originale */
        }
        100% {
          transform: translateY(-150%); /* Sposta il contenuto verso l'alto */
        }
      }
    }
    .item_FrontEndSkill .skill-progress {
      @keyframes scroll {
        0% {
          transform: translateY(0); /* Inizio nella posizione originale */
        }
        100% {
          transform: translateY(-750px); /* Sposta il contenuto verso l'alto */
        }
      }
    }
    @media screen and (max-width: 700px) {
      width: 80%;
      margin: 0 auto;
    }
    h3 {
      font-size: 1rem;
      display: flex;
      justify-content: space-between;

      span {
        color: $secondary_color;
      }
    }
  }
  .bar {
    height: 2.5rem;
    border-radius: 0.6rem;
    border: 0.2rem solid $secondary_color;
    padding: 0.5rem;
    margin: 1rem 0;
    display: flex;
    justify-content: start;
    align-items: center;
    transition: width 0.5s ease-in-out; /* Animazione per il cambiamento di larghezza */
    span {
      height: 100%;
      display: block;
      border-radius: 0.3rem;
      background-color: $secondary_color;
    }
  }
  .btn-box {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%);
    button {
      @include button-primary;
      width: 200px;
      height: 50px;
      background-color: inherit;
      color: #00abf0;
      &::before {
        @include button-primary-hover;
        background-color: $secondary_color;
      }
      &:hover::before {
        width: 100%;
      }
      &:hover {
        color: $text_color;
      }
    }
  }
}
/* carosello */
.carousel__slide {
  padding: 5px;
}
.carousel__item {
  /* background-color: red; */
  padding: 10px;
  height: 500px;
  width: 100%;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
