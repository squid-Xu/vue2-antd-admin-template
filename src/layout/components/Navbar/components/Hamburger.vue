<template>
  <a-icon
    class="trigger"
    :type="sidebarOpened ? 'menu-unfold' : 'menu-fold'"
    @click="toggleSideBar"
  />
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    sidebarOpened() {
      return this.$store.state.app.sidebarOpened;
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
};
</script>
<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  padding: 0 24px;
  transform: color 0.3s;
  &:hover {
    color: #1890ff;
  }
}
</style>