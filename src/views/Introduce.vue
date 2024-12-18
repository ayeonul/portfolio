<template>
  <div class="router-view">
    <div class="main-container">
      <div class="section">
        <div class="title">
          <div class="page-icon">
            <img src="@/assets/imgs/undraw_Dev_focus_re_6iwt.png" />
          </div>
          <div class="changing-text-container">
            <!-- 글자 입력/삭제 애니메이션 -->
            <span class="changing-text">
              {{ displayedText }}<span class="cursor"></span>
            </span>
            즐기는 개발자, <a style="color: var(--main-pink)">김동은</a>입니다.
          </div>
        </div>
        <div class="text" style="width: 95%; margin: 0 auto">
          Popular,
          <a style="font-style: italic" class="highlight">난</a> 이제 곧
          popular!
        </div>
        <div class="text" style="width: 95%; margin: 0 auto">
          <a style="font-style: italic">Popular</a>한 개발자를 꿈꾸는
          <a class="highlight">3년 차 파이썬 개발자 김동은</a>입니다.
        </div>
      </div>
      <div class="section">
        <div class="subtitle">
          <unicon
            name="comment-heart"
            fill="var(--highlight-pink)"
            width="30px"
            height="30px"
          />즐깁니다
        </div>
        <div class="intro-section">
          <div class="intro-container">
            <div class="small-title">
              <unicon
                name="arrow-growth"
                fill="var(--highlight-pink)"
                width="25px"
                height="25px"
              /><a style="color: var(--highlight-pink)">성장을</a> 즐깁니다.
            </div>
            <div class="text">
              '지식은 세상을 조금 더 높은 화질로 볼 수 있게 해준다'는 비유를 참
              좋아하고, 공감합니다. 여러 프로젝트를 겪은 뒤 문득 처음 보는
              코드가 선명히 잘 읽힐 때의 쾌감을 좋아합니다.<br />그렇게 성장한
              저는 소속 단체를 함께 성장시키고, 성장한 단체는 소속원인 저를 다시
              성장시키는 선순환을 많이 좋아합니다.
            </div>
          </div>
          <div class="intro-container">
            <div class="small-title">
              <unicon
                name="file-copy-alt"
                fill="var(--highlight-pink)"
                width="25px"
                height="25px"
              /><a style="color: var(--highlight-pink)">카피를</a> 즐깁니다.
            </div>
            <div class="text">
              수준 높은, 혹은 취향에 맞는 프로그램을 마주했을 때의 '내가 가진
              능력 안에서 어떻게 재구현할 수 있을까' 하는 고민, 그리고 그를 통해
              실제로 구현하는 것을 즐깁니다.<br />예컨대, 프론트엔드 클론 코딩을
              시도해보는 것과, 생성형 인공지능의 경우 프롬프트를 어떻게 사용하면
              같은 결과물을 낼 수 있을지 고민하는 것을 즐깁니다.
            </div>
          </div>
          <div class="intro-container">
            <div class="small-title">
              <unicon
                name="laptop"
                fill="var(--highlight-pink)"
                width="25px"
                height="25px"
              /><a style="color: var(--highlight-pink)">개발을</a> 즐깁니다.
            </div>
            <div class="text">
              생각하던 것, 혹은 문서로만 존재하던 것을 눈 앞에 실제로 구현해냈을
              때와 그것이 실제로 서비스 되었을 때의 성취감을 사랑하고, 이
              성취감을 위해 개발자로 살아갑니다.
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="subtitle">
          <unicon
            name="user-plus"
            fill="var(--highlight-pink)"
            width="30px"
            height="30px"
          />할 수 있습니다
        </div>
        <div class="lang-section">
          <div class="lang-container">
            <img src="@/assets/imgs/python-logo-only.png" />
            <div class="lang-info">
              <div class="lang-name">
                Python
                <unicon
                  name="thumbs-up"
                  fill="var(--highlight-pink)"
                  width="20px"
                  height="20px"
                />
              </div>
              <Stars :rating="4" />
            </div>
          </div>
          <div class="lang-container">
            <img src="@/assets/imgs/fastapi-logo.png" />
            <div class="lang-info">
              <div class="lang-name">FastAPI</div>
              <Stars :rating="3" />
            </div>
          </div>
          <div class="lang-container">
            <img src="@/assets/imgs/pandas_mark.svg" />
            <div class="lang-info">
              <div class="lang-name">Pandas</div>
              <Stars :rating="3" />
            </div>
          </div>
          <div class="lang-container">
            <img src="@/assets/imgs/vue-logo.png" />
            <div class="lang-info">
              <div class="lang-name">Vue2</div>
              <Stars :rating="3.5" />
            </div>
          </div>
          <div class="lang-container">
            <img src="@/assets/imgs/HTML5_logo_and_wordmark.png" />
            <div class="lang-info">
              <div class="lang-name">HTML</div>
              <Stars :rating="2.5" />
            </div>
          </div>
          <div class="lang-container">
            <img src="@/assets/imgs/CSS3_logo_and_wordmark.png" />
            <div class="lang-info">
              <div class="lang-name">CSS</div>
              <Stars :rating="1.5" />
            </div>
          </div>
          <div class="lang-container">
            <img src="@/assets/imgs/Unofficial_JavaScript_logo_2.png" />
            <div class="lang-info">
              <div class="lang-name">JavaScript</div>
              <Stars :rating="3" />
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="subtitle">
          <unicon
            name="suitcase-alt"
            fill="var(--highlight-pink)"
            width="30px"
            height="30px"
          />
          다녔습니다
        </div>
        <div class="career-section">
          <div class="career-container">
            <div class="small-title">
              <unicon
                name="building"
                fill="var(--highlight-pink)"
                width="25px"
                height="25px"
              />(주) 스마트소셜
            </div>
            <div class="career-list">
              <ul>
                <li>2021.12 ~ 2024.05</li>
                <li>AI·DX 사업부 AI 연구소</li>
                <li>자연어 처리(NLP) 기술 연구 및 개발</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "@/components/Stars.vue";

export default {
  components: {
    Stars,
  },
  data() {
    return {
      whatILike: ["성장을", "카피를", "개발을"], // 순환할 단어 리스트
      displayedText: "성장을",
      wordIndex: 0,
      isDeleting: false, // 현재 입력 또는 삭제 상태
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



<style scoped>
@import url("@/assets/styles/introduce.css");
</style>