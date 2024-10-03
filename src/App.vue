<script>
import Headers from './components/Headers.vue';
export default{
    components:{
        Headers
    },
    data(){
        return{

        }
    },
  methods: {
    changeBgHeader(color){
      this.headerBg=color;
    }
  },
}

</script>

<template>
 <Headers ></Headers>
 <router-view></router-view>
</template>

<style lang="scss">
@use './style/generic';

</style>
