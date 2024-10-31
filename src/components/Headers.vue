<script>
import { RouterLink } from 'vue-router';
import { store } from '../store';

export default {
  name: "Headers",
  data() {
    return {
      active:1,
      store,
      classActive:false
    };
  },methods:{
    linkActive(index){
     return this.active = index ;
    },
    toggleNavbar(){
         this.classActive = !this.classActive;
    }
  }
};
</script>

<template >
  <header class="py-2 pt-1 pt-lg-4  ">
    <nav class="d-flex my-container justify-content-between">
      <a class="logo " :href="store.linksNavbar[0].href" >{{ store.linksNavbar[0].name }}</a> 
      <div class="wrapper-bars">
        <button class="bars" @click="toggleNavbar()"><i class="fa-solid fa-bars"></i></button>
      </div>
      <ul :class="{activeUl : classActive}">
        <template v-for="link,index in store.linksNavbar">
          <li v-if="link.name !== 'Casimiro.'" :class="{ 'flex-grow-1 logo': link.name === 'Casimiro', 'links' : link.name !== 'Casimiro' }" >
           <a  :href="link.href" class="link" @click="linkActive(index)" :class="{active : index === active}">{{ link.name }}</a> 
          </li>
        </template>
      </ul>
      <div class="game-container">
        <router-link :to="{name:'game'}" >
          <i class="fa-solid fa-gamepad"></i>
          <i class="fa-brands fa-golang"></i>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
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

 .game-container{
      content: '';
      position: absolute;
      top: 20%;
      left: 95%;
      transform: translate(-10%, );
      border: 2px solid $secondary_color;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
     /* Aggiungi questa animazione */
      animation: rotate-border 2s linear infinite; /* Applicazione dell'animazione */
      .fa-golang{
       opacity: 0;
       position: absolute;
       top: -100%;
       transition: 0.5s;
   }

     &:hover .fa-golang{
       opacity: 1;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50% , -50%);
   }
  &:hover .fa-gamepad{
      opacity: 0;
      transition: 0.5s;
   }
      @media screen and (max-width:991px){
      top: 50%;
      left: 50%;
      transform: translate(-50%, - 50%);
      }
      /* Definisci l'animazione */
@keyframes rotate-border {
  0% {
    border-color: $secondary_color; /* Colore iniziale */
  }
  50% {
    border-color: $primary_color; /* Colore a metà animazione */
  }
  100% {
    border-color: $secondary_color; /* Torna al colore iniziale */
  }
}

   }
 @media screen and (max-width:991px) {

  .wrapper-bars{
    display: block;
    position: relative;
    &::after {
    @include animation-showRight;
        right: 0;
        animation-delay: 2s;
      }
  .bars{
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1.5rem;
  }
   

}

 }

 /* ul list  */
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
  padding: 1rem 5%;
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
  padding-left: 10px;
 }

}
}

}
</style>
