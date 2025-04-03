<template>
  <div class="footer no-select">
    <div class="copyright">
      본 사이트는 Chrome, Edge, Whale 등 최신 브라우저에 최적화되어 있습니다.<br/>
      Designed and developed by 김동은(ayeonul). All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer{
  position: relative;
  width: 100vw - 10px;
  padding-right: 10px;
  height: 100px;
  background-color: var(--footer);
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.copyright{
  color: #fff;
  font-size: .7rem;
  position: relative;
  margin: 0 auto;
  width: fit-content;
  padding: 0 0 .5rem 0;
  text-align: center;
}
</style>