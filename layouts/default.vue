<template>
  <TheHeader class="header" />
  <div class="content">
    <slot />
  </div>
  <TheFooter />
</template>

<script>
export default {
  name: "default",
};
</script>

<style lang="scss" scoped>
@use "@/public/scss/abstracts/global" as *;
.header {
  z-index: 99999999;
}
.content {
  margin: 120px -8px -8px -8px !important;
}

@media (max-width: $width-tablet) {
  .content {
    margin: 80px -8px -8px -8px !important;
  }
}
</style>
