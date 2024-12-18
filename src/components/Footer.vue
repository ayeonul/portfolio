<template>
  <div class="footer">
    <div class="copyright">
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
  background-color: var(--main-pink);
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
}
</style>