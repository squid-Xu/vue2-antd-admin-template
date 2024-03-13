<template>
  <a-menu :default-selected-keys="['1']" mode="inline" :theme="sidebarStyle">
    <a-menu-item key="1">
      <a-icon type="mail" />
      Navigation One
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="calendar" />
      Navigation Two
    </a-menu-item>
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
      <a-menu-item key="3">
        Option 3
      </a-menu-item>
      <a-menu-item key="4">
        Option 4
      </a-menu-item>
      <a-sub-menu key="sub1-2" title="Submenu">
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
      <a-menu-item key="7">
        Option 7
      </a-menu-item>
      <a-menu-item key="8">
        Option 8
      </a-menu-item>
      <a-menu-item key="9">
        Option 9
      </a-menu-item>
      <a-menu-item key="10">
        Option 10
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
import { constantRouterMap } from '@/router/router-config'
export default {
  data() {
    return {
      menu: []
    };
  },
  created() {
    console.log(' this.$router.options.routes', this.$router);
    console.log('constantRouterMap', constantRouterMap);
    this.menu = constantRouterMap.map(v => {
      return {
        ...v
      }
    })
  },
  computed: {
    sidebarStyle() {
      return this.$store.state.app.sidebarStyle;
    },
  },
};
</script>