<template>
  <div class="section">
    <div class="subtitle">
      <unicon
        name="comments"
        fill="var(--highlight)"
        width="30px"
        height="30px"
      />
      소통합니다
    </div>
    <div class="text">
      <a class="highlight">저와 함께 상호 성장</a> 할 회사를 찾고 있어요. 아래
      메일로 문의 주세요!
    </div>
    <div class="contact-section">
      <div class="contact-container">
        <unicon name="at" fill="var(--highlight)" width="25px" height="25px" />
        kde013434@naver.com
      </div>
      <div class="contact-container">
        <unicon
          name="github"
          fill="var(--highlight)"
          width="25px"
          height="25px"
        />
        ayeonul
        <span
          style="cursor: pointer"
          @click="$linkOpen('https://github.com/ayeonul')"
        >
          <unicon
            name="external-link-alt"
            fill="var(--highlight)"
            width="15px"
            height="15px"
            class="none-top"
          />
        </span>
      </div>
      <div class="contact-container">
        <unicon
          name="file-share-alt"
          fill="var(--highlight)"
          width="25px"
          height="25px"
          class="icon-label"
        />
        이력서 다운받기
        <span style="cursor: pointer" @click="$linkOpen(resumeLink)">
          <unicon
            name="external-link-alt"
            fill="var(--highlight)"
            width="15px"
            height="15px"
            class="none-top"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resumeLink:
        "https://drive.google.com/file/d/13x9UyKUDGtJKFSxqErD_hOFlsAyOfdXo/view?usp=sharing",
    };
  },
  methods: {
    kakaoShare() {
      Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Portfolio",
          description: "성장을 즐기는는 3년 차 파이썬 개발자 김동은입니다.",
          imageUrl: "http://ayeonul.github.io/portfolio/imgs/share-img.png",
          link: {
            mobileWebUrl: "https://ayeonul.github.io/portfolio/",
            webUrl: "https://ayeonul.github.io/portfolio/",
          },
        },
      });
    },
  },
};
</script>

<style>
</style>