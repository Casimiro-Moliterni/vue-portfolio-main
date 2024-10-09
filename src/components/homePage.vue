<script>
import { store } from "../store";
import TextTyping from "./TextTyping.vue";

export default {
  name: "homePage",
  components: {
    TextTyping,
  },
  data() {
    return {
      store,
      activeSection: null, // Stato della sezione attiva,
    };
  },
  computed: {
    // ActiveLInk(){
    //   const AboutSection = document.querySelector('#AbouteMe');
    //   console.log(AboutSection)
    // }
  },
  methods: {
  },
  mounted() {
   store.ActiveLInk();
  },
};
</script>
<template>
  <section id="AppHome" class="pages">
    <div class="container">
      <div
        class="row flex-lg-wrap justify-content-lg-between justify-content-center"
      >
        <div
          class="home-content col-12 col-lg-8"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 class="waviy">
            <span class="move" style="--i: 1">C</span>
            <span class="move" style="--i: 2">i</span>
            <span class="move" style="--i: 3">a</span>
            <span class="move" style="--i: 4">o,</span>
            <span class="move" style="--i: 5">S</span>
            <span class="move" style="--i: 6">o</span>
            <span class="move" style="--i: 7">n</span>
            <span class="move" style="--i: 8">o</span>
            <a href="#AboutMe">
              <span class="my-name"> Casimiro Moliterni</span></a
            >
          </h1>
          <TextTyping></TextTyping>
          <p class="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint porro
            illo non dolores molestias autem dicta! Numquam cumque vero
            corporis. Unde, fugiat. Iure voluptatem doloribus id ut omnis
            assumenda dignissimos!
          </p>
          <!-- container button  -->
          <div class="btn-box">
            <button><a href="#Contact">Contattami</a></button>
            <button><a href="#Projects">Progetti</a></button>
          </div>
        </div>
        <!-- container social  -->
        <div class="img-my col-12 col-lg-4"></div>
        <div
          class="home-social"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <ul class="ps-0 mb-0 w-100">
            <template v-for="link in store.social">
              <li>
                <a class="" v-bind:href="link.url" target="_blank">
                  <i :class="link.class"></i>
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;

.waviy {
  position: relative;
  /* -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2)); */
}
.waviy .move {
  position: relative;
  display: inline-block;
  color: #ffffff;
  animation: waviy 1.5s infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes waviy {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-5px);
  }
}
:root {
  --bg-color: #081b29;
  --second-bg-color: #112e42;
  --text-color: #ededed;
  --main-color: #00abf0;
}
#AppHome {
  background: #081b29;
  color: var(--text-color);
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  align-items: center;
  /* inizio home content  */
  .img-my {
    height: 300px;
    width: 300px;
    border-radius: 100%;
    background-image: url("../assets/img/io.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 3s;
    z-index: 1;
    position: relative;
    &::before {
      @include animation-showRight;
      top: 0;
      right: 0;
      animation-delay: 3s;
      background-image: url("../assets/img/io-remove-bg.png");
    }

    &::after {
      @include animation-showRight;
      z-index: 3;
      top: 0;
      right: 0;
      animation-delay: 3s;
    }
    &:hover {
      opacity: 0.8;
      border: 3px solid #00abf0;
      transition: 3s;
      background-image: url("../assets/img/test.png");
    }

    @media screen and (max-width: 1200px) {
      margin: 20px 0;
      height: 200px;
      width: 200px;
    }
    @media screen and (max-width: 540px) {
      margin: 20px 0;
      height: 100px;
      width: 100px;
    }
  }

  .home-content {
    color: white;
    h1 {
      font-size: 56px;
      font-weight: 700;
      line-height: 1.2;
      position: relative;
      .my-name {
        color: #00abf0;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        line-height: 1;
        color: transparent;
        -webkit-text-stroke: 1px #ffffff;
        text-shadow: 0 0 0 #00abf0;
        transition: all 250ms;
        &:hover {
          text-shadow: 4px 4px 0 #00abf0;
          transform: translate(-2px, -2px);
        }
      }
      @media screen and (max-width: 992px) {
        font-size: 40px;
        text-align: center;
      }
      &::before {
        @include animation-showRight;
        animation-delay: 1s;
      }
    }
    p {
      font-size: 16px;
      margin: 20px 0 40px;
      position: relative;
      &::before {
        @include animation-showRight;
        animation-delay: 1.6s;
      }
    }

    /* btn  */

    .btn-box {
      width: 345px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      position: relative;

      @media screen and (max-width: 992px) {
        margin: 0 auto;
      }
      &::before {
        @include animation-showRight;
        z-index: 2;
        animation-delay: 1.9s;
      }

      button {
        position: relative;
        width: 150px;
        height: 100%;
        background-color: #00abf0;
        border: 2px solid #00abf0;
        border-radius: 8px;
        font-size: 19px;
        letter-spacing: 1px;
        font-weight: 600;
        color: #081b29;
        z-index: 1;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 0;
          top: 0;
          left: 0;
          z-index: -1;
          background-color: #081b29;
          transition: 0.5s;
        }
        &:nth-child(2) {
          background-color: transparent;
          color: #00abf0;
          &::before {
            background-color: #00abf0;
          }
          &:hover {
            color: #081b29;
          }
        }

        &:hover::before {
          width: 100%;
        }
        &:hover {
          color: #00abf0;
        }
      }
    }
  }
  /* fine home content  */

  /* inizio home social  */

  .home-social {
    position: absolute;
    bottom: 40px;
    width: 250px;

    @media screen and (max-width: 992px) {
      bottom: 20px;
      width: 230px;
    }

    &::before {
      @include animation-showRight;
      animation-delay: 2.5s;
      z-index: 2;
    }
    ul {
      display: flex;
      justify-content: space-between;

      li {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: trasparent;
        border: 2px solid#00abf0;
        border-radius: 50%;
        font-size: 20px;
        color: #00abf0;
        position: relative;
        z-index: 1;
        overflow: hidden;
        transition: 0.5s;

        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 0;
          top: 0;
          left: 0;
          background-color: #00abf0;
          z-index: -1;
          transition: 0.5s;
        }
        &:hover::before {
          width: 100%;
        }
        &:hover {
          color: #081b29;
        }
      }
    }
  }
}
</style>
