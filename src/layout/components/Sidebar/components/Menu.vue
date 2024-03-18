<template>
  <a-menu :default-selected-keys="['1']" mode="inline" :theme="sidebarStyle">
    <template v-for="menu in menuRoutes">
      <a-menu-item v-if="!menu.children || menu?.children.length == 1" :key="menu.path">
        <a-icon type="pie-chart" />
        <span>{{ menu?.meta?.title || menu?.children?.[0]?.meta?.title }}</span>
      </a-menu-item>
      <menu-item v-else :menu-info="menu" :key="menu.path" />
    </template>
  </a-menu>
</template>
<script>
import { constantRouterMap } from "@/router/router-config";
import MenuItem from "./MenuItem.vue";
export default {
  components: { MenuItem },
  data() {
    return {
      menuRoutes: [],
    };
  },
  created() {
    // console.log("constantRouterMap", constantRouterMap);
    this.menuRoutes = constantRouterMap;
  },
  computed: {
    sidebarStyle() {
      return this.$store.state.app.sidebarStyle;
    },
  },
};
</script>
