<script>

export default{
    name:"Projects"
}
</script>

<template>
    <section id="Projects">
        <div class="container">
            
            <h1 class="text-center">My <span>Projects</span></h1>

        </div>
    </section>
</template>

<style  scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
#Projects{
    min-height: 100vh;
    background-color:#0E2C43;
    padding-top: 60px;

    .container{
        padding: 40px 30px;
        height: 100%;
        h1 {
      color: white;
      text-align: center;
      font-size: 56px;
      font-weight: 900;
      margin-bottom: 70px;
      span {
        color: $secondary_color;
      }
    }
     
    }
}
</style>