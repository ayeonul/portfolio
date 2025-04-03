<template>
  <div id="app">
    <router-view />
    <Footer/>
    <!-- <Footer v-if="!(checkRouter())"/> -->
  </div>
</template>

<script>

import Footer from './components/Footer.vue';

export default {
  components:{
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
