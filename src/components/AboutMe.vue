<script>
import TextTyping from "./TextTyping.vue";

export default {
  name: "AboutMe",
  components: {
    TextTyping,
  }
};
</script>

<template>
  <section id="AboutMe" class="">
    <div class="container h-100 pt-4 ">
      <h1 class="text-center ">About<span> Me</span></h1>
      <div class="img-about">
        <img src="../assets/img/io-remove-bg.png" alt="" class=""/>
       <span class="circle-spin"></span>
      </div>

      <TextTyping class="justify-content-center mt-4 mb-3"></TextTyping>

      <p class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        quia soluta expedita molestiae voluptatum tempora aliquid quisquam?
        Praesentium deserunt dicta deleniti voluptatibus reiciendis est, fugiat
        repellat quam, repudiandae ullam sequi!
      </p>
      <div class="text-center ">
        <button class="">Contattami</button>
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
  h1 {
    font-size: 56px;
    color: white;
    font-weight: 900;
    margin-top: 70px;
    margin-bottom: 40px;
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
    height: 22rem;
    width: 22rem;
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

  p {
    font-size: 16px;
    color: white;
  }
  button {
    @include button-primary;
    height: 50px;
    margin-top: 50px;
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

</style>
