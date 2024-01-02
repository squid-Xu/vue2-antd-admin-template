<template>
  <div>
    <a-icon class="trigger" @click="visible = true" type="more" />
    <a-drawer
      title="布局设置"
      :visible="visible"
      :destroyOnClose="true"
      :width="280"
      @close="visible = false"
    >
      <div class="settings-container">
        <a-space direction="vertical" align="start">
          <a-space>
            <a-tooltip
              key="dark"
              effect="dark"
              title="暗色侧边栏"
              placement="top"
            >
              <div
                class="settings-box-item item-left-dark"
                :class="sidebarStyle === 'dark' ? 'active' : ''"
                @click="handleSidebarTheme('dark')"
              ></div>
            </a-tooltip>
            <a-tooltip
              key="light"
              effect="dark"
              title="亮色侧边栏"
              placement="top"
            >
              <div
                class="settings-box-item item-left-light"
                :class="sidebarStyle === 'light' ? 'active' : ''"
                @click="handleSidebarTheme('light')"
              ></div>
            </a-tooltip>
          </a-space>
          <!-- <a-space>
          <el-tooltip
            key="light"
            effect="dark"
            content="亮色顶栏"
            placement="top"
          >
            <div
              class="settings-box-item item-top-light"
              :class="theme.headerStyle === 'light' ? 'active' : ''"
              @click="handleHeaderTheme('light')"
            ></div>
          </el-tooltip>
          <el-tooltip
            key="auto"
            effect="dark"
            content="主题色顶栏"
            placement="top"
          >
            <div
              class="settings-box-item item-top-theme"
              :class="theme.headerStyle === 'theme' ? 'active' : ''"
              @click="handleHeaderTheme('theme')"
            ></div>
          </el-tooltip>
        </a-space>
        <a-space :size="2" wrap>
          <div v-for="color in colors" :key="color">
            <span
              class="theme-color"
              :class="theme.primaryColor === color ? 'active' : ''"
              :style="`background-color: ${color}`"
              @click="handleThemeColor(color)"
            ></span>
          </div>
        </a-space> -->
        </a-space>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    sidebarStyle() {
      return this.$store.state.app.sidebarStyle;
    },
  },
  methods: {
    handleSidebarTheme(style) {
      this.$store.dispatch("app/toggleTheme", {
        type: "sidebarStyle",
        value: style,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  padding: 0 12px;
  transform: color 0.3s;
  &:hover {
    color: #1890ff;
  }
}

.settings-container {
  padding: 15px;
  color: #444444;

  .settings-box-item {
    position: relative;
    width: 50px;
    height: 35px;
    margin: 0 20px 20px 0;
    background-color: rgb(240 242 245);
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    &.active {
      &::after {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        left: 50%;
        bottom: -15px;
      }
    }
  }

  .item-left-light {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 33%;
      height: 100%;
      background-color: #fff;
      content: "";
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }

  .item-left-dark {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 33%;
      height: 100%;
      background-color: #000;
      content: "";
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }

  .item-top-light {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 33%;
      background-color: #fff;
      content: "";
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
  }

  .item-top-theme {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 33%;
      background-color: var(--el-color-primary);
      content: "";
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
  }

  .theme-color {
    width: 20px;
    height: 20px;
    margin: 8px 8px 0 0;
    border-radius: 2px;
    display: inline-block;
    vertical-align: top;
    position: relative;
    cursor: pointer;

    &.active {
      &::after {
        content: url('data:image/svg+xml;charset=utf-8,<svg width="14" height="14" color="rgb(255 255 255)" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z"></path></svg>');
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -7px 0 0 -7px;
        font-size: 14px;
        color: #ffffff;
      }
    }
  }

  .config-btn {
    button {
      width: 100%;
      margin-top: 10px;
    }

    .el-button + .el-button {
      margin-left: 0;
    }
  }
}
</style>