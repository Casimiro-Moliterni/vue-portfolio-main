<script>
import { RouterLink } from 'vue-router';

export default {
  name: "Headers",
  data() {
    return {
      links: [
        {
          name: "Casimiro",
          label: "home",
        },
        {
          name: "Home",
          label: "home",
        },
        {
          name: "Projects",
          label: "projects",
        },
        {
          name: "About",
          label: "home",
        },
        {
          name: "Skills",
          label: "home",
        },
      ],
    };
  },
};
</script>

<template >
  <header class="py-2 pt-4">
    <nav class="d-flex container">
      <ul class="d-flex list-style-none gap-5 w-100 ps-0">
        <template v-for="link in links">
          <li data-aos="fade-down" :class="{ 'flex-grow-1 logo': link.name === 'Casimiro', 'links' : link.name !== 'Casimiro' }" >
           <router-link :to="{ name: link.label }" >{{ link.name }}</router-link> 
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  color: white;
  position: fixed;
  width: 100%;
  background-color: transparent;

 .logo{
   font-size: 25px;
   font-weight: 600;
   color: #ededed;
 }

 .links a{
   font-size: 18px;
   color: #ededed;
   font-weight: 500;
   &:hover{
      color: #00abf0;
   }
 }
}
</style>
