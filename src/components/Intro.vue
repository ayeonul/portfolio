<template>
  <div class="section">
    <div class="title">
      <div class="page-icon">
        <img src="@/assets/imgs/undraw_Dev_focus_re_6iwt.png" />
      </div>
      <div class="changing-text-container no-select">
        <!-- 글자 입력/삭제 애니메이션 -->
        <span class="changing-text">
          {{ displayedText }}<span class="cursor"></span>
        </span>
        즐기는 개발자, <a style="color: var(--main)">김동은</a>입니다.
      </div>
    </div>
    <div class="text">
      안녕하세요, 즐거운 성장을 꿈꾸는
      <a class="highlight">파이썬 개발자 김동은</a>입니다.
    </div>
    <div class="text" style="margin: 1rem auto">
      <a class="highlight">Python</a>을 가장 자신있게 다룰 수 있으며,
      <ul>
        <li>
          생성형 모델과 타 모델 혹은 데이터를 결합한 RAG(검색 증강 생성) 기반 서비스 챗봇, 엔진 개발
        </li>
        <li>huggingface를 이용한 transformers 계열 모델 활용 엔진 개발</li>
        <li>FastAPI 라이브러리를 활용한 API 서버 개발</li>
        <li>
          프롬프트 엔지니어링 및 OpenAI, Gemini, Naver CLOVA 등의 API를 이용한
          미세조정(fine-tuning)
        </li>
        <li>챗봇 기획 및 챗봇 시나리오 작성</li>
      </ul>
      을 주로 해왔습니다.
    </div>

    <div class="text">항상 새로운 기술과 도전을 통해 성장하는 걸 즐깁니다.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whatILike: ["성장을", "카피를", "개발을"],
      displayedText: "성장을",
      wordIndex: 0,
      isDeleting: false,
      typingSpeed: 100, // 타이핑 속도 (밀리초)
      pauseTime: 3500, // 입력 후 대기 시간 (2초)
    };
  },
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      const currentWord = this.whatILike[this.wordIndex];

      if (!this.isDeleting) {
        // 글자 입력중임?
        this.displayedText = currentWord.substring(
          0,
          this.displayedText.length + 1
        );
      } else {
        this.displayedText = currentWord.substring(
          0,
          this.displayedText.length - 1
        );
      }

      // 입력 완료 후 2초 대기
      if (!this.isDeleting && this.displayedText === currentWord) {
        setTimeout(() => {
          this.isDeleting = true;
          this.animateText();
        }, this.pauseTime);
        return;
      }

      if (this.isDeleting && this.displayedText === "") {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.whatILike.length; // 다음 단어 인덱스
      }

      // 재귀 호출
      setTimeout(
        this.animateText,
        this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed
      );
    },
  },
};
</script>

<style>
</style>