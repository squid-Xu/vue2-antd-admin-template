<template>
  <a-layout-sider v-model="sidebarOpened" :trigger="null" collapsible>
    <Logo></Logo>
    <Menu />
  </a-layout-sider>
</template>
<script>
import Logo from "./components/Logo.vue";
import Menu from "./components/Menu.vue";
export default {
  components: { Logo, Menu },
  data() {
    return {};
  },
  computed: {
    sidebarOpened() {
      return this.$store.state.app.sidebarOpened;
    },
  },
};
</script>