<template>
  <a-layout style="min-height: 100vh">
    <Sidebar />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Navbar />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar/index.vue";
export default {
  components: { Sidebar, Navbar },
  data() {
    return {};
  },
};
</script>