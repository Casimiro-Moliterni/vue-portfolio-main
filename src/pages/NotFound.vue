<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <section>
        <div class="my-container d-flex justify-content-center">
            <button><a href="/">Home Page</a></button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

section{
    background-color: $primary_color;
}
.my-container{
    height: 100vh;
    background-image: url('https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 20px;

    button{
        position: relative;
        width: 150px;
        height: 60px;
        background-color: #00abf0;
        border: 2px solid #00abf0;
        border-radius: 8px;
        font-size: 19px;
        letter-spacing: 1px;
        font-weight: 600;
        color: #081b29;
        z-index: 1;
        overflow: hidden;

        &::before{
            position: absolute;
            content: '';
            z-index: -1;
            background-color: $primary_color;
            height: 100%;
            width: 0;
            top: 0;
            left: 0;
            transition: .5s;
        }

        &:hover::before{
            transition: .5s;
            width: 100%;
        }
        &:hover {
          color: #00abf0;
        }
    }
}
</style>