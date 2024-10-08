<script>
import { RouterLink } from 'vue-router';

export default {
  name: "Headers",
  data() {
    return {
      active:1,
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
        {
          name: "Contact",
          label: "contact",
           href:'#Contact'
        },
      ],
    };
  },methods:{
    linkActive(index){
     return this.active = index ;
    }
  }
};
</script>

<template >
  <header class="py-2 pt-1 pt-lg-4  ">
    <nav class="d-flex container justify-content-between">
      <a class="logo " :href="links[0].href" >{{ links[0].name }}</a> 
      <div class="wrapper-bars">
        <button class="bars"><i class="fa-solid fa-bars"></i></button>
      </div>
      <ul class="">
        <template v-for="link,index in links">
          <li v-if="link.name !== 'Casimiro.'" :class="{ 'flex-grow-1 logo': link.name === 'Casimiro', 'links' : link.name !== 'Casimiro' }" >
           <a  :href="link.href" class="link" @click="linkActive(index)" :class="{active : index === active}">{{ link.name }}</a> 
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
        z-index: 22;
        animation-delay: .4s;
      }
 }

.wrapper-bars{
 
     display: none;
   
 }

 @media screen and (max-width:991px) {

  .wrapper-bars{
    display: block;
  .bars{
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1.5rem;
  }
   

}

 }
ul{
  position: relative;
  list-style: none;
  gap: 3rem;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: end;
  justify-content: end;
  &::after {
    @include animation-showRight;
        right: 0;
        animation-delay: 3s;
      }
 .links a{
   font-size: 18px;
   color: #ededed;
   font-weight: 500;
   transition: .5s;
   position: relative;
  

   &.active{
    color: #00abf0; 
    transition: 2s;
    /* &::before{
    position: absolute;
    bottom: -10px;
    content: '';
    width: 100%;
    height: 4px;
    border-radius: .1rem;
    z-index: 1;
    border: .2rem solid #00abf0;} */
   }
   &:hover{
      color: #00abf0;
   }
   
 } 

 @media screen and (max-width:991px) {

  position: absolute;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  top: 100%;
  left: -100%;
  width: 100%;
  padding: 1rem 4%;
  background-color: $primary_color;
  box-shadow: 0 .5rem 1rem rgba( 0,0,0, .2);
  transition:.25s ease;
  transition-delay: .25s;
  &.activeUl{
    left: 0;
    transition-delay: 0s;
  }
 a{
  display: block;
  font-size: 2rem;
 }

}
}

}
</style>
