<template>
  <div id="app">
    <div class="circle-cursor" ref="cursor"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cursor: null,
    };
  },
  mounted() {
    this.cursor = this.$refs.cursor;
    if (!this.cursor) return;

    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseleave", () => {
      this.cursor.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      this.cursor.style.opacity = "1";
    });

    // clickable 요소 hover 시 삼각형으로 변경
    document.addEventListener("mouseover", this.handleMouseOver);
    document.addEventListener("mouseout", this.handleMouseOut);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseleave", this.handleMouseLeave);
    document.removeEventListener("mouseenter", this.handleMouseEnter);
    document.removeEventListener("mouseover", this.handleMouseOver);
    document.removeEventListener("mouseout", this.handleMouseOut);
  },
  methods: {
    handleMouseMove(e) {
      // 커서를 마우스 위치로 이동
      this.cursor.style.left = `${e.clientX}px`;
      this.cursor.style.top = `${e.clientY}px`;
    },
    handleMouseOver(e) {
      if (e.target.classList.contains("clickable")) {
        this.cursor.classList.add("triangle");
      }
    },
    handleMouseOut(e) {
      if (e.target.classList.contains("clickable")) {
        this.cursor.classList.remove("triangle");
      }
    },
  },
};
</script>

<style>
@import url("@/assets/styles/app.css");

body {
  cursor: none;
}
.circle-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%; /* 기본 원형 */
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 9999;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: clip-path 0.2s ease-in-out, border-radius 0.2s ease-in-out,
    opacity 0.2s ease; /* 부드러운 전환 */
  clip-path: circle(50%); /* 원형 */
}

/* clickable 요소 hover 시 삼각형으로 변형 */
.circle-cursor.triangle {
  clip-path: polygon(100% 50%, 0% 0%, 0% 100%); /* 오른쪽을 가리키는 삼각형 */
  border-radius: 0; /* 원형에서 각진 형태로 변형 */
}
</style>
