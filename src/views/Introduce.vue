<template>
  <div class="router-view">
    <div class="main-container">
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
            즐기는 개발자, <a style="color: var(--main-pink)">김동은</a>입니다.
          </div>
        </div>
        <div class="text">
          안녕하세요, 즐거운 성장을 꿈꾸는
          <a class="highlight">파이썬 개발자 김동은</a>입니다.
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
              아이디어나 문서로만 존재하던 것을 눈앞에 구현해내는 과정, 그리고
              그것이 실제로 서비스되었을 때의 성취감을 사랑합니다. <br />
              저는 이 성취감을 위해 개발자로 살아가고 있습니다.
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
            <img
              src="@/assets/imgs/selenium_logo_mark_green.svg"
              class="img_L"
            />
            <div class="lang-info">
              <div class="lang-name">Selenium(py)</div>
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
            <img src="@/assets/imgs/streamlit-mark-color.svg" class="img_XL" />
            <div class="lang-info">
              <div class="lang-name">Streamlit</div>
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
          <!-- <div class="lang-container">
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
            <img
              src="@/assets/imgs/Unofficial_JavaScript_logo_2.png"
              class="img_L"
            />
            <div class="lang-info">
              <div class="lang-name">JavaScript</div>
              <Stars :rating="3" />
            </div>
          </div> -->
          <div class="lang-container">
            <img src="@/assets/imgs/Git-Icon-1788C.svg" class="img_L" />
            <div class="lang-info">
              <div class="lang-name">Git</div>
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
                <li>
                  Transformers 계열의 자연어 처리(NLP) 기술 연구 및 응용 서비스
                  개발
                </li>
                <li>FastAPI를 이용한 AI 응용 서비스의 API 개발</li>
                <li>
                  웹 크롤링 및 각종 API 서비스를 이용한 데이터 수집 및 정제
                </li>
                <li>AI 엔진 데모 버전의 웹사이트 개발</li>
                <li>
                  참여 프로젝트
                  <ul>
                    <li>
                      인천사이버진로교육원 진로추천 AI 개발(2022.03~2023.11)
                    </li>
                    <ul>
                      <li>참여인원 3인(AI 엔진 개발 기준), 참여도 40%</li>
                      <li>
                        인천사이버진로교육원 내에서 진로검사, 메타버스 게임의
                        점수 등을 통해 직무, 직업, 진로상담사, 진로체험처 등을
                        추천해주는 AI 서비스 개발(2차연도) 및 고도화(3차연도)
                      </li>
                    </ul>
                    <li>
                      부산시교육청 PEN AI AI대입설계 서비스
                      개발(2022.03~2022.11)
                    </li>
                    <ul>
                      <li>참여인원 2인(AI 엔진 개발 기준), 참여도 50%</li>
                      <li>
                        사용자의 생활기록부 및 성적을 바탕으로 기 대학
                        합격자와의 비교분석 레포트를 제공하는 AI 엔진 개발
                      </li>
                    </ul>
                    <li>
                      이외 자연어 기반 맞춤 정책 추천 엔진, GPT를 이용한 NCS
                      직무기술서 기반 자기소개서 첨삭 엔진, 웹사이트 크롤링을
                      통한 챗봇 자동제작 엔진 등 개발
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="subtitle">
          <unicon
            name="cube"
            fill="var(--highlight-pink)"
            width="30px"
            height="30px"
          />
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
      <div class="section">
        <div class="subtitle">
          <unicon
            name="comments"
            fill="var(--highlight-pink)"
            width="30px"
            height="30px"
          />
          소통합니다
        </div>
        <div class="text">
          <a class="highlight">저와 함께 상호 성장</a> 할 회사를 찾고 있어요.
          아래 메일로 문의 주세요!
        </div>
        <div class="contact-section">
          <div class="contact-container">
            <unicon
              name="at"
              fill="var(--highlight-pink)"
              width="25px"
              height="25px"
            />
            ayeonul1214@gmail.com
          </div>
          <div class="contact-container">
            <unicon
              name="github"
              fill="var(--highlight-pink)"
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
                fill="var(--highlight-pink)"
                width="15px"
                height="15px"
                class="none-top"
              />
            </span>
          </div>
        </div>
        <div class="text">혹은 인재가 필요한 다른 분께 전달드릴 수도 있죠.</div>
        <div class="contact-section">
          <div @click="kakaoShare" class="icon-label">
            <img
              src="@/assets/imgs/kakaotalk_sharing_btn_small_ov.png"
              class="kakao-share-btn"
            />
            <span>카카오톡으로 공유하기</span>
          </div>
        </div>
        <div class="contact-section">
          <div @click="$linkOpen(resumeLink)" class="icon-label">
            <unicon
              name="file-share-alt"
              fill="var(--highlight-pink)"
              width="25px"
              height="25px"
            />
            <span>이력서 다운받기</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Stars from "@/components/Stars.vue";
import ExpContainer from "@/components/ExpContainer.vue";

export default {
  components: {
    Stars,
    ExpContainer,
  },
  data() {
    return {
      whatILike: ["성장을", "카피를", "개발을"],
      displayedText: "성장을",
      wordIndex: 0,
      isDeleting: false,
      typingSpeed: 100, // 타이핑 속도 (밀리초)
      pauseTime: 3500, // 입력 후 대기 시간 (2초)
      expData: [],
      resumeLink:
        "https://drive.google.com/file/d/1i372KdegjexCqNtVvQv3mNOG2W5hsQb_/view?usp=sharing",
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
  mounted() {
    this.animateText();
    Kakao.init("ceaa1b4fa57b2d9600301656d1988ee6");
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
    kakaoShare() {
      Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Portfolio",
          description:
            "Popular한 개발자를 꿈꾸는 3년 차 파이썬 개발자 김동은입니다.",
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



<style scoped>
@import url("@/assets/styles/introduce.css");
</style>