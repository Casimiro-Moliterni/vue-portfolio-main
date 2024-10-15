<script>
import { store } from "../store";
import Projects from "./Projects.vue";

export default {
  name: "SingleProject",
  components: {},
  props: {
    project: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getImageUrl(name) {
      const url = new URL(`../assets/img/${name}`, import.meta.url).href;

      return url;
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="col">
    <div class="my-card">
      <img
        :src="getImageUrl(`img_project_porfolio/poster/${project.poster}`)"
        :alt="project.slug"
      />
      <div class="info">
        <h3>{{ project.name }}</h3>
        <button class="btn-arrow">
          <router-link :to="{ name:'single-project',params:{slug:project.slug}}" :projectInfo="project">  <i class="fa-solid fa-arrow-up"></i></router-link>
          <!-- <i class="fa-solid fa-arrow-up"></i> -->
        </button>
        <div class="box-btn">
          <h6 class="text-center">TECHNOLOGIES</h6>
          <div class="wrapper row">
            <button v-for="btn in project.technologies"   :style="{ backgroundImage: `url(${getImageUrl(`skills/${btn.path}`)})` }">
              <!-- ricorda inserisci style dinamico backgroundimage  -->
              <p>{{ btn.name }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.my-card {
  height: 250px;
  border-radius: 15px;
  padding: 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  cursor: pointer;

  h3 {
    color: black;
    font-weight: 900;
    margin-top: 70px;
  }
  &:hover {
    /* transform: scale(1.05); */
    transform: translateY(-5px);
    transform: translatex(-5px);
    &:before {
      opacity: 1;
    }

    .info {
      opacity: 1;
      transform: translateY(0px);
    }

    &:hover img{
      opacity: 0.8;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgb(0, 200, 255);
    background: -moz-linear-gradient(
      0deg,
      rgba(0, 200, 255, 1) 2%,
      rgba(0, 180, 255, 0.6362920168067228) 24%,
      rgba(120, 180, 255, 0.22452731092436973) 81%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(0, 200, 255, 1) 2%,
      rgba(0, 180, 255, 0.6362920168067228) 24%,
      rgba(120, 180, 255, 0.22452731092436973) 81%
    );
    background: linear-gradient(
      0deg,
      rgba(0, 200, 255, 1) 2%,
      rgba(0, 180, 255, 0.6362920168067228) 24%,
      rgba(120, 180, 255, 0.22452731092436973) 81%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00c8ff",endColorstr="#78b4ff",GradientType=1);

    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.5s;
    width: 100%;
    height: 100%;
    padding: 5rem 1.5rem;

    h6 {
      color: black;
      font-size: 1.3rem;
      font-family: 700;
    }
    .box-btn {
      position: absolute;
      width: 100%;
      height: 30px;
      top: 0.5rem;
      left: 0;
      width: 100%;
      .wrapper {
        width: 100%;
        height: 100%;
        justify-content: center;
        gap: 1rem;
        & > button {
          border: none;
          width: 50px;
          height: 100%;
          border-radius: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          /* background-image: url("https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"); */
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          transition: 0.5s;

          &:hover {
            transform: scale(1.1);
            transition: 0.5s;
            box-shadow: 0px 0px 40px -5px rgba(0, 171, 240, 0.4);
          }
          &:hover p {
            transition: 0.5s;
            background-color: $secondary_color;
            color: $text_color;
            z-index: 10; // Ensure the paragraph appears above other elements
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }

          p {
            top: -60px;
            text-wrap: nowrap;
            padding: 5px 10px;
            position: absolute;
            font-weight: 700;
            font-size: 16px;
            color: $text_color;
            opacity: 0;
            visibility: hidden;
            border-radius: 10px;
            background-color: $secondary_color;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease,
              visibility 0.3s ease;

            &::after {
              content: "";
              position: absolute;
              bottom: -6px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-top: 8px solid $secondary_color;
            }
          }
        }
      }
    }

    p {
      letter-spacing: 1px;
      font-size: 16px;
      color: $text_color;
      margin-top: 8px;
      padding-right: 35px;
    }

    .btn-arrow {
      height: 3rem;
      width: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      border-radius: 50%;
      background: white;
      color: black;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s ease;
      position: absolute;
      bottom: 10px;
      right: 10px;
      transition: 0.5s;
      &:hover i {
        /* transform: scale(1.2) rotate(45deg);
        transition: 0.5s;
        position: absolute; */
      }
      i {
        font-size: 2.5rem;
        font-weight: 900;
        position: relative;
        z-index: 10;
        transition: 0.5s;

        /* transform: rotate(45deg); */
      }
      &:hover {
        transform: rotate(45deg);
        transition: 0.5s;
        color: $secondary_color;
      }
      &:hover::after,
      &:hover::before {
        transition: 0.5s;
      }
    }
  }
}
</style>
