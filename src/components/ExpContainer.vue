<template>
  <div class="exp-container">
    <div class="exp-title">{{ expData.title }}</div>
    <div class="exp-list">
      <div class="exp-tags">
        <span
          v-for="(tag, idx) in expData.tag"
          :key="`exp ${expIdx}-tag${idx}`"
          :class="tag"
          class="no-select"
          >{{ getTagName(tag) }}</span
        >
      </div>
      <ul>
        <li>{{ expData.term }}</li>
        <li v-for="(c, idx) in expData.content" :key="`exp ${expIdx}-${idx}`">
          {{ c }}
        </li>
      </ul>
    </div>
    <div v-if="expData.detail" class="exp-detail-btn-container">
      <div
        v-for="(btn, idx) in expData.detail"
        :key="`exp ${expIdx}- btn${idx}`"
        class="exp-detail-btn"
        @click="expBtnAction(btn.type, btn.content)"
      >
        <div v-if="btn.name == 'git'" style="padding: 1px 3px;"
          ><unicon
            name="github"
            fill="#fff"
            width="23px"
            height="23px"
        /></div>
        <div v-else style="padding: 5px 9px;"> {{ btn.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    expIdx: {
      type: Number,
      required: true,
    },
    expData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    expBtnAction(type, content) {
      if (type == "url") {
        this.$linkOpen(content);
      }
    },
    getTagName(str){
      return str.replace("_", " ")
    }
  },
};
</script>

<style scoped>
@import url("@/assets/styles/exp-container.css");
</style>