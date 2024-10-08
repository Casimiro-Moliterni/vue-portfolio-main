<script>
import Headers from './components/Headers.vue';
import { store } from './store';
import { toggle } from './scroll_section.js'
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
     toggle()
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
