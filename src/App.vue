<script>
import Headers from './components/Headers.vue';
import { store } from './store';

export default{
    components:{
        Headers,
        store
    },
    data(){
        return{
             
        }
    },
  methods: {

  },
  mounted(){

  }
}

</script>

<template>
 <Headers ></Headers>
 <router-view></router-view>
</template>

<style lang="scss">
@use './style/generic';

</style>
