<script>
import { store } from "../store";
import ListCardProjects from "./ListCardProjects.vue";

export default {
  name: "Projects",
  components: {
    ListCardProjects,
  },
  data() {
    return {
      store,
      active:1,
    };
  },
  methods: {
    linkActive(index) {
      return (this.active = index);
    },
  },
};
</script>

<template>
  <section id="Projects">
    <!-- container  -->
    <div class="container">
      <h1 class="text-center">My <span>Projects</span></h1>

      <div class="wrapper-ul">

        <ul class="p-0 m-0 row row-cols-2 row-cols-lg-4 justify-content-center">

          <li   v-for="link,index in store.listProjectLink" class="cursor-pointer" @click="linkActive(index)" :class="{ 'active-li': index === active }" >

            <button class="fs-4 fw-bold cursor-pointer border-0"  :class="{active : index === active}">
              {{ link }}
            </button>

          </li>

        </ul>

      </div>
      <!-- lista con i componenti delle card dei progetti  -->
      <ListCardProjects></ListCardProjects>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

#Projects {
  min-height: 100vh;
  background-color: #0e2c43;
  padding-top: 50px;

  .container {
    padding: 40px 30px;
    height: 100%;
    h1 {
      color: white;
      text-align: center;
      font-size: 56px;
      font-weight: 900;
      margin-bottom: 40px;
      span {
        color: $secondary_color;
      }
    }

    .wrapper-ul {
      width: 90%;
      margin: 0 auto;
      border-radius: 0.6rem;
      margin-bottom: 2rem;
      background-color: $primary_color;

      ul {
        align-items: center;

        li {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;

          // Transizione fluida per ::after quando li è active
          &::after {
            position: absolute;
            content: "";
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0%; // Inizialmente width è 0
            height: 4px;
            z-index: 2;
            opacity: 0;
            background-color: $secondary_color;
            transition: width 0.5s ease, opacity 0.5s ease;
          }

          &:hover::after {
            opacity: 1;
            width: 70%; // Mostra l'after al hover
          }

          &.active-li::after {
            opacity: 1; // Rendi l'after visibile
            width: 70%; // Espandi l'after per l'elemento attivo
          }

          // Hover sul li per cambiare colore del testo
          &:hover button {
            transition: 0.5s;
            color: $secondary_color;
          }
        }

        button {
          background-color: inherit;
          color: white;
          border: none;
          cursor: pointer;
          position: relative;

          &.active {
            color: $secondary_color;
            transition: color 0.5s ease;
          }
        }
      }
    }
  }
}
</style>

