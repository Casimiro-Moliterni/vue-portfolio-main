<script>
import TextTyping from "./TextTyping.vue";

export default {
  name: "AboutMe",
  components: {
    TextTyping,
  },
};
</script>

<template>
  <section id="AboutMe" class="pages">
    <div class="container h-100 pt-4">
      <h1 class="text-center">About<span> Me</span></h1>
      <div class="img-about">
        <img src="../assets/img/io-remove-bg.png" alt="" />
      </div>

      <TextTyping class="justify-content-center mt-4 mb-3"></TextTyping>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        quia soluta expedita molestiae voluptatum tempora aliquid quisquam?
        Praesentium deserunt dicta deleniti voluptatibus reiciendis est, fugiat
        repellat quam, repudiandae ullam sequi!
      </p>
      <div class="text-center">
        <button>Contattami</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

#AboutMe {
  background-color: #0E2C43;
  padding-top: 70px;
  h1 {
    font-size: 56px;
    color: white;
    font-weight: 900;
    margin-bottom: 60px;
    span {
      color: $secondary_color;
    }
  }

  .img-about {
    margin: 0 auto;
    border: 2px solid $secondary_color;
    background-color: $primary_color;
    height: 300px;
    width: 300px;
    border-radius: 100%;
    img {
      height: 100%;
      width: 100%;
      border-radius: 100%;
      object-fit: cover;
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
