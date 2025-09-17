<template>
  <div class="section">
    <div class="subtitle">
      <unicon name="cube" fill="var(--highlight)" width="30px" height="30px" />
      만들었습니다
    </div>
    <div class="exp-section">
      <ExpContainer
        v-for="(data, index) in expData"
        :key="`exp${index}`"
        :expIdx="index"
        :expData="data"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ExpContainer from "@/components/ExpContainer.vue";
export default {
  components: {
    ExpContainer,
  },
  data() {
    return {
      expData: [],
    };
  },
  async created() {
    try {
      const baseUrl =
        process.env.NODE_ENV === "production" ? "/portfolio/" : "/";
      const response = await axios.get(`${baseUrl}data/experience.json`);
      this.expData = response.data.reverse();
    } catch (error) {
      console.error("데이터 로딩에 실패했어요.", error);
    }
  },
};
</script>

<style>
</style>