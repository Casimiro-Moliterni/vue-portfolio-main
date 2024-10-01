<script>
import Headers from "../components/Headers.vue";

export default {
  name: "AppHome",
  components: {
    Headers,
  },
  data() {
    return {
      social: [
        {
          name: "GitHub",
          url: "https://github.com/Casimiro-Moliterni",
          class: "fa-brands fa-github",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/casimiro-moliterni-9a7322281/",
          class: "fa-brands fa-linkedin",
        },
        {
          name: "Instagram",
          url: "#",
          class: "fa-brands fa-instagram",
        },
      ],
    };
  },
  methods: {},
};
</script>
<template>
  <Headers></Headers>
  <section id="AppHome" class="pages">
    <div class="overlay"></div>
    <div class="container">
      <div class="home-content"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1>Ciao, sono Casimiro Moliterni</h1>
        <h3>Junior Full Stack Web Developer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint porro
          illo non dolores molestias autem dicta! Numquam cumque vero corporis.
          Unde, fugiat. Iure voluptatem doloribus id ut omnis assumenda
          dignissimos!
        </p>

        <!-- container button  -->
        <div class="btn-box">
          <button>test 1</button>
          <button>test 2</button>
        </div>
      </div>
      <!-- container social  -->
      <div class="home-social"data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
        <ul class="ps-0 mb-0 w-100">
          <template v-for="link in social">
            <li>
              <a v-bind:href="link.url" target="_blank">
                <i :class="link.class"></i>
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
:root {
  --bg-color: #081b29;
  --second-bg-color: #112e42;
  --text-color: #ededed;
  --main-color: #00abf0;
}
.pages {
  height: 100vh;
}
#AppHome {
  background: #081b29;
  color: var(--text-color);
  height: 100vh;
  display: flex;
  align-items: center;
  /* inizio home content  */
 .overlay{
  position: absolute;
  top: 70%;
  left: 80%;
  height: 400px;
  width: 400px;
  border-radius: 100%;
  z-index: 2;
  transform: translate(-70%,-80%);
   background-image: url('../assets/img/io.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 3s;
  &:hover{
    opacity: 0.4;
    background-color: #081B29;
    transition: 3s
  }
 }
  .home-content {
    color: white;
    width: 60%;
    h1 {
      font-size: 56px;
      font-weight: 700;
      line-height: 1.2;
    }
    h3 {
      font-size: 32px;
      font-weight: 700;
      color: #00abf0;
    }
    p {
      font-size: 16px;
      margin: 20px 0 40px;
    }

    /* btn  */

    .btn-box {
      width: 345px;
      height: 50px;
      display: flex;
      justify-content: space-between;

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
    width: 170px;
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
