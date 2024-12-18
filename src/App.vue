<template>
  <div id="app">
    <CircleCursor v-if="checkRouter()"/>
    <router-view />
    <Footer v-if="!(checkRouter())"/>
  </div>
</template>

<script>

import CircleCursor from './components/CircleCursor.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    CircleCursor,
    Footer
  },
  methods:{
    checkRouter(){
      if(['home'].includes(this.$route.name)){

        return true
      }
    }
  }
};
</script>

<style>
@import url("@/assets/styles/app.css");
</style>
