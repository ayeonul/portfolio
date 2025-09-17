<template>
  <div class="section">
    <div class="subtitle">
      <unicon
        name="user-plus"
        fill="var(--highlight)"
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
              fill="var(--highlight)"
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
          <Stars :rating="3.5" />
        </div>
      </div>
      <div class="lang-container">
        <img src="@/assets/imgs/langchain_logo.png" class="img_XL" />
        <div class="lang-info">
          <div class="lang-name">Langchain</div>
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
</template>

<script>
import Stars from "@/components/Stars.vue";
export default {
  components: {
    Stars,
  },
};
</script>

<style>
</style>