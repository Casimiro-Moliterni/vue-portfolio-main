<script>
import { store } from '../store';

 export default{
    name:'Footer',
    data(){
        return{
            store
        }
    }
 }
</script>

<template>
    <footer>

        <div class="my-container">
            <div class="home-social">
                <ul class="ps-0 mb-0 w-100">
                    <template v-for="link in store.social">
                        <li>
                            <a class="" v-bind:href="link.url" target="_blank">
                                <i :class="link.class"></i>
                            </a>
                        </li>
                    </template>
                </ul>
            </div>

            <div class="mt-3 wrapper-footer-link-pages">
                <ul class="ps-0 mb-0 w-100 text-white d-flex gap-4 justify-content-center">
                    <template v-for="link in store.linksNavbar">
                        <li v-if="link.name !== 'Casimiro.'">
                            <a class="" :href="link.href" >
                                {{ link.name }}
                            </a>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;



footer{
    background-color: #0E2C43;
    padding: 20px 0 25px 0;
    height: 120px;
    .home-social {
        width: 250px;
        margin: 0 auto;
        @media screen and (max-width: 992px) {
            bottom: 20px;
            width: 250px;
        }
        
        &::before {
            @include animation-showRight;
            animation-delay: 2.5s;
            z-index: 2;
        }
        ul {
            display: flex;
            justify-content: space-between;
            
            li {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
        background-color: trasparent;
        border: 2px solid#00abf0;
        border-radius: 50%;
        font-size: 20px;
        color: #00abf0;
        position: relative;
        z-index: 1;
        overflow: hidden;
        transition: 0.5s;

        &::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 0;
            top: 0;
            left: 0;
            background-color: #00abf0;
            z-index: -1;
            transition: 0.5s;
        }
        &:hover::before {
            width: 100%;
        }
        &:hover {
            color: #081b29;
        }
    }
}
}
 
.wrapper-footer-link-pages{

    ul{

        li{

            a{
                transition: .5s;
                &:hover{
                    color: $secondary_color;
                    text-decoration: underline;
                    transition: .5s;
                }
            }
        }
    }
}
}
</style>

