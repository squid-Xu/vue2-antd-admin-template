<template>
  <div class="navbar-container">
    <div class="navbar-left">
      <Hamburger />
      <!-- <Breadcrumb v-if="store.appStore.theme.isBreadcrumb" /> -->
    </div>
    <div class="navbar-right">
      <!-- <ComponentSize /> -->
      <!-- <Fullscreen /> -->
      <!-- <User /> -->
      <!-- <Settings /> -->
    </div>
  </div>
</template>
<script>
import Hamburger from "./components/Hamburger.vue";
export default {
  components: { Hamburger },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.navbar-container {
  display: flex;
  .navbar-left {
    flex: 1;
  }
  .navbar-right {
    display: flex;
  }
}
</style>