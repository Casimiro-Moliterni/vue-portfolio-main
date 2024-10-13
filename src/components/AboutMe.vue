<script>
import { store } from "../store";
import TextTyping from "./TextTyping.vue";


export default {
  name: "AboutMe",
  components: {
    TextTyping
  },
  data() {
    return {
      store,
      activeModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.activeModal = !this.activeModal;
    },
  },
};
</script>

<template>
  <section id="AboutMe" class="">
    <div class="my-container h-100 pt-4">
      <h1 class="text-center ">About<span> Me</span></h1>
      <div class="img-about">
        <img src="../assets/img/io-remove-bg.png" alt="" class=""/>
       <span class="circle-spin"></span>
      </div>

      <TextTyping class="justify-content-center mt-4 mb-3"></TextTyping>
      <div class="row row-cols-1 row-cols-lg-2 mb-5 align-items-lg-center">
        <div class="col col-left">
          <p class="">
          Ciao! Mi chiamo Casimiro Moliterni, sono un Junior Full Stack Web Developer di 24 anni con una grande passione per lo sviluppo di applicazioni web moderne e intuitive. Ho iniziato il mio percorso di formazione presso Boolean, dove ho approfondito vari linguaggi di programmazione e tecnologie legate al web, perfezionando le mie competenze nella creazione di siti e applicazioni performanti e scalabili. Al termine del corso, ho ottenuto un'<span><button class="btn-attestato" @click="toggleModal('attestato')">attestato</button></span>.
        <br><br>
        Nel corso della mia esperienza, ho partecipato a numerosi progetti, tra cui lo sviluppo di siti vetrina, gestionali personalizzati e web app interattive. Ogni progetto mi ha permesso di affinare le mie capacità di problem solving e migliorare l'esperienza utente attraverso soluzioni tecniche efficienti e innovative.
        <br><br>
        Sei curioso di saperne di più sul mio percorso professionale? <a href="../cv.pdf" download="cv.pdf" class="link">Scarica il mio CV</a> o <a href="../cv.pdf"  target="_blank"class="link" >Visualizzalo online</a>.
        </p>
        </div>

        <div  class="col col-rigth ">
               <ul class="p-0 m-0 h-100 d-flex flex-column justify-content-between align-items-center">
                  <li v-for="e in store.myGenerality" class="d-flex align-items-center gap-4 my-2" style="width:310px ;">
                         <div class="icon-generality">
                          <i :class="e.class"></i>
                         </div>
                         <div class="d-flex flex-column gap-0 text-generality">
                           <small>{{ e.label }}</small>
                           {{ e.name }}
                         </div>
                  </li>
               </ul>
        </div>
        
      </div>

      <div class="text-center btn-wrapper">
        <button class=""> <a href="#Contact">Contattami</a></button>
      </div>
    </div>
   <div class="modal-wrapper" :class="{active : activeModal === true}">
    <button class="btn-close-modal"  @click="toggleModal()">
      <i class="fa-regular fa-rectangle-xmark"></i>
    </button>
    <div class="modal-wrapper-img">
    <img  src="../assets/img/certificato-boolean.png" alt="Attestato" />
  </div>
</div>
  </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

#AboutMe {
  background-color: #0E2C43;
  min-height: 100vh;
  padding-bottom: 30px;
  position: relative;
  h1 {
    font-size: 50px;
    color: white;
    font-weight: 900;
    margin-top: 70px;
    margin-bottom: 20px;
    @media screen and (max-width:540px) {
      margin-bottom: 20px;
      margin-top: 40px;
   }
    span {
      color: $secondary_color;
    }
  }

  .img-about {
    margin: 0 auto;
    /* background-color: $primary_color; */
    height: 14rem;
    width: 14rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:540px) {
    height: 15rem;
    width: 15rem;
   }
    .circle-spin{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50% , -50%) rotate(0);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-top: .2rem solid transparent;
      border-bottom: .2rem solid transparent;
      border-left:.2rem solid $secondary_color ;
      border-right:.2rem solid $secondary_color;
     animation: aboutSpinner 8s linear infinite;
     @keyframes aboutSpinner {
        100%{
          transform: translate(-50%, -50%) (rotate(360deg));
        }

     }
    }
    img {
      width: 90%;
      height: 90%;
      background-color: $primary_color;
      border:.2rem solid $secondary_color ;
      border-radius: 50%; /* Assicurati che anche l'immagine sia circolare */
      object-fit: cover; /* Copertura uniforme */
    }
  }
.col-left{
  border: 1px solid $secondary_color;
    background-color: $primary_color;
    border-radius: .8rem;
    padding: 1rem;
    padding-left: 10px;
  }

  p {
    font-size: 16px;
    color: white;

  }
  .btn-wrapper{

    @media screen and (max-width:540px) {
    /* border: 1px solid red; */
  }
    button {
      @include button-primary;
      height: 50px;  
      &::before {
          @include button-primary-hover;
          background-color: #0E2C43;
      }
      &:hover::before {
            width: 100%;
          }
          &:hover {
            color: #00abf0;
          }
    }
  }
  .modal-wrapper{
    position: fixed;
    top:-100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.753);
    height: 100%;
    width: 100%;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    transform: translateY(-100%);
    opacity: 0;

    .btn-close-modal{
      position: absolute;
      top: 3%;
      right:3%;
      border: none;
      font-size: 2rem;
      background-color: inherit;
      color: white;
      transition: .5s;

      &:hover{
        transition: .5s;
        color: #00abf0;
      }
     }
    &.active{
     transition: .3s;
     transform: translateY(100%);
     opacity: 1;
    }
   .modal-wrapper-img{
 
    width: 85%;
    height: 70vh;
    margin: 0 auto;
    position: relative;
         // Medium devices (tablets, 768px and up)
         @media (min-width: 768px) {  }
 
      // Large devices (desktops, 992px and up)
          @media (min-width: 992px) {  }
     
     img{
       max-width: 100%;
       height: 100%;
       width: 100%;
       object-fit: contain;
          // Medium devices (tablets, 768px and up)
         @media (min-width: 768px) {  }
 
      // Large devices (desktops, 992px and up)
          @media (min-width: 992px) {  }
     }

   }
  }
}
.btn-attestato{
  border: none;
  background-color: inherit;
  color: $secondary_color;
  text-decoration: underline;
}
.link{
  color: $secondary_color;
  text-decoration: underline;
}

.icon-generality{
  height: 40px;
  width: 40px;
  color: $secondary_color;
  background-color: $primary_color;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .4rem;
}

.text-generality{
  color: #00abf0;
  text-wrap: nowrap;
  small{
    color: white;
    font-size: small;
  }
}
</style>
