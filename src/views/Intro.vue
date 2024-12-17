<template>
  <div class="router-view">
    <div ref="wordContainer" class="container words no-select">
      <div class="center-box">
        <div class="center-hint">Click here!</div>
        <div class="center-word clickable">POPULAR</div>
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

      const wordWidth = 100; // px 단위로 가정
      const wordHeight = 50; // px 단위로 가정

      const wordsPerRow = Math.floor(containerWidth / wordWidth);
      const totalRows = Math.floor(containerHeight / wordHeight);
      const totalWords = wordsPerRow * totalRows;

      this.displayedWords = [];
      let shuffledWords = this.shuffleArray(this.wordsPop);

      // 단어를 묶음 단위로 섞어서 추가
      for (let i = 0; i < totalWords; i++) {
        if (i % this.wordsPop.length === 0) {
          // 새 묶음 시작 시 단어 배열을 다시 섞음
          shuffledWords = this.shuffleArray(this.wordsPop);
        }
        this.displayedWords.push(shuffledWords[i % shuffledWords.length]);
      }
    },
  },
};
</script>

<style scoped>
.container.words {
  flex-wrap: wrap;
  width: 100%;
  height: 100vh; /* 화면 높이 전체를 차지 */
  overflow: hidden;
  background-color: var(--main-pink);
}

.center-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.center-hint{
  font-family: 'pretendard';
  font-weight: 400;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 3px;
  font-style: italic;
}
.center-word {
  background-color: var(--highlight-pink);
  font-family: "ghana";
  padding: 0 0.5rem;
  font-size: 4rem;
  box-shadow: 3px 3px 7px 3px rgba(0, 0, 0, 0.2);
  /* cursor: pointer; */
}

.word {
  margin: 0 5px;
  font-size: 16px; /* 글자 크기 */
  white-space: pre-line;
  font-family: "ghana";
  font-size: 2rem;
  color: var(--sub-pink);
}

.word.highlight {
  color: var(--highlight-pink);
}
</style>