<template>
  <div class="router-view no-cursor">
    <div ref="wordContainer" class="container words no-select">
      <div class="center-box">
        <div class="center-hint">Click here!</div>
        <div
          class="center-word clickable"
          @click="$goRoute('/intro')"
          @mouseover="isMouseOver()"
          @mouseleave="isMouseLeave()"
        >
          <div class="clickable" v-show="isGoShow" style="font-size: 4rem">GO!</div>
          <div class="clickable" v-show="!isGoShow">DongEun's</div>
          <div class="clickable" v-show="!isGoShow">PortFolio</div>
        </div>
      </div>
      <span
        v-for="(word, index) in displayedWords"
        :key="index"
        class="word"
        :class="word == 'popular' ? 'highlight' : ''"
      >
        {{ word }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wordsPop: [
        "makeover",
        "depressing",
        "beautiful",
        "Galinda",
        "slang",
        "sports",
        "cohorts",
        "hair",
        "shoes",
        "flounce",
        "popular",
      ],
      // wordsDfG: [
      //   "Elphaba",
      //   "gravity",
      //   "Wizard",
      //   "instincts",
      //   "leap",
      //   "unlimited",
      //   "fly",
      //   "free",
      // ],
      displayedWords: [],
      isGoShow: false,
    };
  },
  mounted() {
    this.debouncedPopulateWords = this.debounce(this.populateWords, 100);
    this.populateWords();
    window.addEventListener("resize", this.debouncedPopulateWords);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.debouncedPopulateWords);
  },
  methods: {
    debounce(func, wait) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout); // 기존 타이머 제거
        timeout = setTimeout(() => func.apply(this, args), wait); // 일정 시간 후 함수 실행
      };
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    populateWords() {
      const container = this.$refs.wordContainer;

      if (!container) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const wordWidth = 100; // 단위: px
      const wordHeight = 50;

      const wordsPerRow = Math.floor(containerWidth / wordWidth);
      const totalRows = Math.floor(containerHeight / wordHeight);
      const totalWords = wordsPerRow * totalRows;

      this.displayedWords = [];
      let shuffledWords = this.shuffleArray(this.wordsPop);

      for (let i = 0; i < totalWords; i++) {
        if (i % this.wordsPop.length === 0) {
          shuffledWords = this.shuffleArray(this.wordsPop);
        }
        this.displayedWords.push(shuffledWords[i % shuffledWords.length]);
      }
    },
    isMouseOver() {
      this.isGoShow = true;
    },
    isMouseLeave(){
      this.isGoShow = false;
    }
  },
};
</script>

<style scoped>
@import url("@/assets/styles/intro.css");
</style>