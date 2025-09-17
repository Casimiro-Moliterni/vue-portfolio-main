<script>
import Headers from './components/Headers.vue';
import { store } from './store';
import { toggle } from './scroll_section.js'
import Footer from './components/footer.vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
export default{
    components:{
        Headers,
        store,
        Footer,
        SpeedInsights
    },
    data(){
        return{
             
        }
    },
  methods: {

  },
  mounted(){
    // toggle()//
  }
}

</script>

<template>
 <router-view></router-view>
 <SpeedInsights />
</template>

<style lang="scss">
@use './style/generic';

</style>
