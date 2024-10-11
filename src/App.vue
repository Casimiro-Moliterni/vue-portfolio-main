<script>
import Headers from './components/Headers.vue';
import { store } from './store';
import { toggle } from './scroll_section.js'
import Footer from './components/footer.vue';
export default{
    components:{
        Headers,
        store,
        Footer
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
 <router-view></router-view>
</template>

<style lang="scss">
@use './style/generic';

</style>
