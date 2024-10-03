<script>
import { RouterLink } from 'vue-router';

export default {
  name: "Headers",
  data() {
    return {
      links: [
        {
          name: "Casimiro.",
          label: "home",
          href:'#AppHome'
        },
        {
          name: "Home",
          label: "home",
           href:'#AppHome'
        },
        {
          name: "About",
          label: "about",
          href:'#AboutMe'
        },
        {
          name: "Skills",
          label: "skills",
           href:'#Skills'
        },
        {
          name: "Projects",
          label: "projects",
           href:'#Projects'
        },
      ],
    };
  },
};
</script>

<template >
  <header class="py-2 pt-1 pt-lg-4 test_debug">
    <nav class="d-flex container ">
      <a class="logo" :href="links[0].href" >{{ links[0].name }}</a> 
      <ul class="d-none d-lg-flex list-style-none gap-5 w-100 ps-0 justify-content-end mb-0 align-items-end">
        <template v-for="link in links">
          <li v-if="link.name !== 'Casimiro.'" :class="{ 'flex-grow-1 logo': link.name === 'Casimiro', 'links' : link.name !== 'Casimiro' }" >
           <a :href="link.href" >{{ link.name }}</a> 
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
header {
  color: white;
  position: fixed;
  width: 100%;
  z-index: 11;
  background-color: $primary_color;
 .logo{
   font-size: 25px;
   font-weight: 600;
   color: #ededed;
   position: relative;
   &::before{
    @include animation-showRight;
        right:0;
        animation-delay: .4s;
      }
 }
ul{
  position: relative;
  &::after {
    @include animation-showRight;
        right: 0;
        animation-delay: 3s;
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

}
</style>
