<template>
  <div class="router-view">
    <div class="main-container">
      <!-- 소개 -->
      <Intro />

      <!-- 즐깁니다 -->
      <Like />

      <!-- 할 수 있습니다 -->
      <Abillity />

      <!-- 다녔습니다 -->
      <History />

      <!-- 만들었습니다 -->
      <Projects />

      <!-- 소통합니다 -->
      <Contact />
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Like from "@/components/Like.vue";
import Abillity from "@/components/Abillity.vue";
import History from "@/components/History.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";

export default {
  components: {
    Intro,
    Like,
    Abillity,
    History,
    Contact,
    Projects,
  },
};
</script>

<style scoped>
@import url("@/assets/styles/introduce.css");
</style>