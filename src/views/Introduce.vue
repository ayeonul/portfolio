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
        <div class="text">
          Popular,
          <a style="font-style: italic" class="highlight">난</a> 이제 곧
          popular!
        </div>
        <div class="text">
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
            좋아하고, 공감합니다. 여러 프로젝트를 겪은 뒤 문득 처음 보는 코드가
            선명히 잘 읽힐 때의 쾌감을 좋아합니다.<br />그렇게 성장한 저는 소속
            단체를 함께 성장시키고, 성장한 단체는 소속원인 저를 다시 성장시키는
            선순환을 많이 좋아합니다.
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
            수준 높은, 혹은 취향에 맞는 프로그램을 마주했을 때의 '내가 가진 능력
            안에서 어떻게 재구현할 수 있을까' 하는 고민, 그리고 그를 통해 실제로
            구현하는 것을 즐깁니다.<br />예컨대, 프론트엔드 클론 코딩을
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
            때, 그것이 실제로 서비스 되었을 때의 성취감을 사랑하고, 이 성취감을
            위해 개발자로 살아갑니다.
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    this.animateText(); // 타이핑 애니메이션 시작
  },
  methods: {
    animateText() {
      const currentWord = this.whatILike[this.wordIndex];

      if (!this.isDeleting) {
        // 글자 입력 상태
        this.displayedText = currentWord.substring(
          0,
          this.displayedText.length + 1
        );
      } else {
        // 글자 삭제 상태
        this.displayedText = currentWord.substring(
          0,
          this.displayedText.length - 1
        );
      }

      // 입력 완료 후 2초 대기
      if (!this.isDeleting && this.displayedText === currentWord) {
        setTimeout(() => {
          this.isDeleting = true; // 삭제 상태로 변경
          this.animateText();
        }, this.pauseTime);
        return;
      }

      // 삭제 완료 후 다음 단어로 이동
      if (this.isDeleting && this.displayedText === "") {
        this.isDeleting = false; // 입력 상태로 변경
        this.wordIndex = (this.wordIndex + 1) % this.whatILike.length; // 다음 단어 인덱스
      }

      // 재귀 호출로 애니메이션 지속
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