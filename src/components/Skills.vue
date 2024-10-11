<script>
import { ref, computed } from 'vue';
import { store } from "../store.js";
import SingleSkills from "./singleSkills.vue";

export default {
  name: "Skills",
  components: {
    SingleSkills
  },
  setup() {
    const active = ref(false);
    const currentIndex = ref(0);
    const itemsPerPage = ref(6); // Numero di skill da mostrare per pagina

    const textBtn = computed(() => active.value ? "SECTION SKILLS" : "FULL SKILLS");

    const visibleSkills = computed(() => {
      const start = currentIndex.value * itemsPerPage.value;
      return store.SkillArray.slice(start, start + itemsPerPage.value);
    });

    const totalPages = computed(() => Math.ceil(store.SkillArray.length / itemsPerPage.value));

    function toggleView() {
      active.value = !active.value;
    }

    function nextPage() {
      if (currentIndex.value < totalPages.value - 1) {
        currentIndex.value++;
      }
    }

    function prevPage() {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    }

    return {
      store,
      active,
      textBtn,
      visibleSkills,
      currentIndex,
      totalPages,
      toggleView,
      nextPage,
      prevPage,
    };
  },
};
</script>

<template>
  <section id="Skills" class="position-relative">
    <div class="my-container pt-4">
      <h1>My <span>Skills</span></h1>

      <div v-if="active" class="my-container-component"  >
        <h3 class="title">Skills</h3>
        <div class="skill-box">
          <div class="skill-content">
            <div class="wrapper-single-box row row-cols-1 row-cols-lg-2  g-lg-3">
              <div v-for="skill in visibleSkills" :key="skill.id" class="col">
                <div class="skill-progress">
                  <div class="bar">
                    <h3>{{ skill.name }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="btn-page-wrapper">
            <button @click="prevPage" :disabled="currentIndex === 0" class="Prev btn">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <span>{{ currentIndex + 1 }} / {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentIndex === totalPages - 1" class=" Next btn">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>

        </div>
      </div>

      <div v-else class="my-container-component" >
        <SingleSkills></SingleSkills>
      </div>
      <div class="text-center  btn-box">
        <button @click="toggleView">{{ textBtn }}</button>
      </div>
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
  @media screen and (max-width: 540px) {
    height: 105vh;
  }
  .my-container {
    padding: 0 30px;
    height: 100%;

    .my-container-component{
           height: 500px;
           @media screen and (max-width: 960px) {
            height: 550px;
      }
           @media screen and (max-width: 540px) {
            height: 450px;
      }
    }
    h1 {
      text-align: center;
      font-size: 50px;
      font-weight: 900;
      margin-top: 70px;
      margin-bottom: 40px;
      @media screen and (max-width: 540px) {
        margin-bottom: 20px;
        margin-top: 40px;
      }
      span {
        color: $secondary_color;
      }
    }

    .title {
      font-size: 1.7rem;
      margin: 0 0 1rem;
      text-align: center;
    }

    .skill-box {
      position: relative;
      border: 0.2rem solid $secondary_color;
      border-radius: 0.6rem;
      /* padding: .8rem; */
      height: 450px;
      width: 70rem;
      margin:0 auto ;
      z-index: 3;
      overflow: hidden; 
      @media screen and (max-width: 960px) {
            height: 450px;
            width: 90%;
            margin:0 auto 
      }
      @media screen and (max-width: 540px) {
            height: 400px;
            width: 100%;
            margin:0 auto ;
      }
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
        margin: 0 auto;
      }
    }
  }
.skill-content{
  height: 85%;
  padding: .8rem;
}
.wrapper-single-box{
  transition: .5s;
  height: 100%;
}
.col{
  height: 50px;
      @media screen and (max-width: 540px) {
     
      }

}
  .skill-progress {
    position: relative;
    z-index: 20;
    @media screen and (max-width: 700px) {
      /* width: 80%;
      margin: 0 auto; */
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

    border-radius: 0.6rem;
    border: 0.2rem solid $secondary_color;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 540px) {
        height: 45px;
      }
  }
  
  .btn-box {
  
    margin-top: 40px;
    @media screen and (max-width: 540px) {
    }
    button {
      @include button-primary;
      min-width: 200px;
      height: 50px;
      text-wrap: nowrap;
      background-color: inherit;
      color: #00abf0;

      @media screen and (max-width: 540px) {
      width: 100%;
    } 
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
.btn-page-wrapper{
  display: flex;
  width: 130px;
  justify-content: space-between;align-items: center;
  margin: 0 auto;
   .btn{
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.5rem;
   width: 40px;
   height: 40px;
   border-radius: 100%;
   overflow: hidden;
   background-color: $secondary_color;
    padding: 0.5rem 1rem;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &.Prev{
  
    }
    &.Next{

    }
  }
}


</style>
